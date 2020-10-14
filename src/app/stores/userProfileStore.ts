import { observable, action, runInAction, configure, computed } from "mobx";
import agent from "../api/agent";
import { RootStore } from "./rootStore";
import {
  ISkill,
  ITitle,
  IUserProfile,
  IUserProfileFormValues,
} from "../models/userProfile";
import { history } from "../..";

configure({ enforceActions: "always" });
export default class UserProfileStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable userProfile: IUserProfile | null = null;
  @observable initUserProfile: IUserProfileFormValues | null = null;
  @observable allTtitleForUser = new Map();
  @observable loading = false;
  @observable selectedSkills: ISkill[] | null = null;

  @action createUserProfile = async (values: IUserProfileFormValues) => {
    this.loading = true;
    try {
      const userProfile = await agent.UserProfile.create(values);    
      runInAction(() => {
        this.userProfile = userProfile;
        this.rootStore.userStore.user!.userProfileId = userProfile.id;
        this.loading = false;
      });
      history.push("/");
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
      throw error;
    }
  };

  @computed get getAllTitles() {
    return Array.from(this.allTtitleForUser.values());
  }

  @action setSkills = (id: string) => {
    if (this.allTtitleForUser.has(id)) {
      const title: ITitle = this.allTtitleForUser.get(id);
      this.selectedSkills = title.skillForUsers;
    }
  };

  @action fetchTitle = async () => {
    this.loading = true;
    try {
      const titles = await agent.TitleForUser.fetchTitles();
      runInAction(() => {
        this.allTtitleForUser.clear();
        titles.forEach((title) => {
          this.allTtitleForUser.set(title.id, title);
        });
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
      console.log(error);
    }
  };

  @action loadUserProfile = async () => {
    this.loading = true;
    try {
      const profile = await agent.UserProfile.get();
      runInAction(() => {
        this.userProfile = profile;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loading = false;
      });
      console.log(error);
    }
  };
}
