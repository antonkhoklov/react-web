import { observable, computed, action, runInAction, configure } from "mobx";
import {
  IUser,
  IUserChangePasswordFormValues,
  IUserFormValues,
  IUserPhoto,
} from "../models/user";
import agent from "../api/agent";
import { RootStore } from "./rootStore";
import { history } from "../..";
import { toast } from "react-toastify";

configure({enforceActions: 'always'});
export default class UserStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable user: IUser | null = null;
  @observable initUser: IUserFormValues | null = null;
  @observable loading = false;
  @observable logOuting = false;
  @observable uploadingPhoto = false;

  @computed get isLoggedIn() {
    return !!this.user;
  }

  @computed get isUserProfile() {
    if(this.user) {
      return this.user!.userProfileId !== null ? true : false;
    }
    return false;
  }

  @action login = async (values: IUserFormValues) => {
    try {
      const user = await agent.User.login(values);
      runInAction(() => {
        this.user = user;
      });      
      this.rootStore.commonStore.setToken(user.token);
      this.rootStore.modalStore.closeModal();
      history.push("/");
    } catch (error) {
      throw error;
    }
  };

  @action getUser = async () => {
    try {
      const user = await agent.User.getCurrentUser();
      runInAction(() => {
        this.user = user;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action register = async (values: IUserFormValues) => {
    try {
      const user = await agent.User.register(values);
      runInAction(() => {
        this.user = user;
      });
      this.rootStore.commonStore.setToken(user.token);
      this.rootStore.commonStore.setRefreshToken(user.refreshToken);
      this.rootStore.modalStore.closeModal();
      history.push("/");
    } catch (error) {
      throw error;
    }
  };

  @action logout = () => {
    this.rootStore.commonStore.setToken(null);
    this.rootStore.commonStore.setRefreshToken(null);
    this.user = null;
    history.push("/");
  };

  @action fbLogin = async (response: any) => {
    this.loading = true;
    try {
      const user = await agent.User.fbLogin(response.accessToken);
      runInAction(() => {
        this.user = user;    
        this.loading = false;   
      });
      this.rootStore.commonStore.setToken(user.token);
      this.rootStore.commonStore.setRefreshToken(user.refreshToken);
      this.rootStore.modalStore.closeModal();
      history.push("/");
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
      throw error;
    }
  };

  @action updateUser = async (updatedUser: Partial<IUser>) => {
    this.loading = true;
    try {
      await agent.User.update(updatedUser);
      runInAction(() => {
        this.user = { ...this.user!, ...updatedUser };
        this.loading = false;
      });
    } catch (error) {
      toast.error("Problem updating user");
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  @action changeUserPassword = async (
    updatedPassword: IUserChangePasswordFormValues
  ) => {
    this.loading = true;
    try {
      await agent.User.changePassword(updatedPassword);
      runInAction(() => {
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  @action uploadUserPhoto = async (file: Blob) => {
    this.uploadingPhoto = true;
    try {
      const photo = await agent.UserPhoto.addOrChangePhoto(file);
      runInAction(() => {
        if (this.user) {
          //need to test it
          let userPhoto = this.user!.userPhoto;
          userPhoto = { ...userPhoto, ...photo };
          this.user = { ...this.user!, ...userPhoto };
        }
        this.uploadingPhoto = false;
      });
    } catch (error) {
      runInAction(() => {
        this.uploadingPhoto = false;
      });
    }
  };

  @action deletePhoto = async (photo: IUserPhoto) => {
    this.loading = true;
    try {
      await agent.UserPhoto.deletePhoto(photo.id);
      runInAction(() => {
        //need to test
        this.user!.userPhoto = undefined;
        this.loading = false;
      });
    } catch (error) {
      toast.error("Problem deleting the photo");
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
