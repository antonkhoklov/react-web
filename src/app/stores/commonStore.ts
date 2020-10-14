import {RootStore} from './rootStore';
import { observable, action, reaction } from 'mobx';

export default class CommonStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        reaction(
            () => this.token,
            token => {
                if (token) {
                    window.localStorage.setItem('token', token);
                } else {
                    window.localStorage.removeItem('token')
                }
            }
        )

        reaction(
            () => this.refreshToken,
            token => {
                if (token) {
                    window.localStorage.setItem('refreshToken', token);
                } else {
                    window.localStorage.removeItem('refreshToken')
                }
            }
        )
    }

    @observable token: string | null = window.localStorage.getItem('token');
    @observable refreshToken: string | null = window.localStorage.getItem('refreshToken');
    @observable appLoaded = false;
    
    @action setToken = (token: string | null) => {
        this.token = token;
    }

    @action setRefreshToken = (refreshToken: string | null) => {
        this.refreshToken = refreshToken;
    }

    @action setAppLoaded = () => {
        this.appLoaded = true;
    }    
}