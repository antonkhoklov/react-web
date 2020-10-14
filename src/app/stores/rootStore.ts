import { createContext } from "react";
import { configure } from "mobx";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import UserStore from './userStore'
import StartUpStore from "./startUpStore";
import UserProfileStore from "./userProfileStore";
import StartUpOptionStore from "./startUpOptionStore";

configure({ enforceActions: "always" });

export class RootStore {
  commonStore: CommonStore;
  modalStore: ModalStore;
  userStore: UserStore;
  startUpStore: StartUpStore;
  userProfileStore: UserProfileStore;
  startUpOption: StartUpOptionStore;

  constructor() {
    this.commonStore = new CommonStore(this);
    this.modalStore = new ModalStore(this);
    this.userStore = new UserStore(this);
    this.startUpStore = new StartUpStore(this);
    this.userProfileStore = new UserProfileStore(this);
    this.startUpOption = new StartUpOptionStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
