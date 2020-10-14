import { RootStore } from "./rootStore";
import { observable, action } from "mobx";

export default class ModalStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @observable.shallow modal = {
        open: false,
        body: null
    }
    
    @observable.shallow SuperModal = {
        openSuperModal: false,
        bodySuperModal: null
    }
    
    @action openModal = (content: any) => {
        this.modal.open = true;
        this.modal.body = content;
    }
    @action openSuperModal = (content: any) => {
        this.SuperModal.openSuperModal = true;
        this.SuperModal.bodySuperModal = content;
    }

    @action closeModal = () => {
        this.modal.open = false;
        this.modal.body = null;
    }
    @action closeSuperModal = () => {
        this.SuperModal.openSuperModal = false;
        this.SuperModal.bodySuperModal = null;
    }
}