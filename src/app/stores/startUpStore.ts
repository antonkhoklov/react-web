import { observable, action, computed, runInAction, reaction } from "mobx";
import agent from "../api/agent";
import { RootStore } from "./rootStore";
import { IStartUpProfile, IStartUpProfileForm } from "../models/startUp";
import { history } from "../..";
// configure({enforceActions: 'always'});

const HOMELIMIT = 10;
const SEARCHLIMIT = 10;

export default class StartUpStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    reaction(
      () => this.homePredicate.keys(),
      () => {
        this.homePage = 0;
        this.startUpHomeRegistry.clear();
        this.loadStartUpsForHome();
      }
    );
  }

  @observable startUpHomeRegistry = new Map();
  @observable startUpSearchRegistry = new Map();
  @observable startUpProfile: IStartUpProfile | null = null;
  @observable loadingCreateProfile = false;
  @observable loadingForHome = false;
  @observable loadingProfile = false;
  @observable loadingForSearch = false;
  @observable startUpHomeCount = 0;
  @observable homePage = 0;
  @observable homePredicate = new Map();
  @observable homeParamStr = "";
  @observable startUpSearchCount = 0;
  @observable searchPage = 0;
  @observable searchPredicate = new Map();
  @observable searchParamStr = "";

  @observable initStartUpProfile: IStartUpProfileForm | null = null;

  @action createStartup = async (values: IStartUpProfileForm) => {
    this.loadingCreateProfile = true;
    try {
      const startUp = await agent.StartUp.createStartUp(values);
      runInAction(() => {
        this.startUpProfile = startUp;
        this.loadingCreateProfile = false;
      });
      history.push("/");
    } catch (error) {
      runInAction(() => {
        this.loadingCreateProfile = false;
      });
      throw error;
    }
  };

  @action resetHomeSearch = () => {
    this.startUpHomeRegistry.clear();
    this.homePredicate.clear();
    this.startUpHomeCount = 0;
    this.homePage = 0;
    this.loadingForHome = false;
  };

  @action resetSearchSearch = () => {
    this.startUpSearchRegistry.clear();
    this.searchPredicate.clear();
    this.startUpSearchCount = 0;
    this.searchPage = 0;
    this.loadingForSearch = false;
  };

  @action setSearchParamsForHome = (searchParams: any) => {
    this.homePredicate.clear();
    this.homeParamStr = "";
    for (var param in searchParams) {
      if (searchParams.hasOwnProperty(param)) {
        this.homePredicate.set(param, searchParams[param]);
        if (param === "query" && searchParams[param] !== "") {
          this.homeParamStr =
            this.homeParamStr + `/search/${searchParams[param]}`;
        }
        if (param === "predicate" && searchParams[param] !== "") {
          this.homeParamStr =
            this.homeParamStr + `/predicate/${searchParams[param]}`;
        }
      }
    }
  };

  @action setSearchParamsForSearch = (searchParams: any) => {
    this.searchPredicate.clear();
    this.searchParamStr = "";
    for (var param in searchParams) {
      if (searchParams.hasOwnProperty(param)) {
        this.searchPredicate.set(param, searchParams[param]);
        if (param === "query" && searchParams[param] !== "") {
          this.searchParamStr =
            this.searchParamStr + `/search/${searchParams[param]}`;
        }
        if (param === "predicate" && searchParams[param] !== "") {
          this.homeParamStr =
            this.homeParamStr + `/predicate/${searchParams[param]}`;
        }
      }
    }
  };

  @computed get axiosHomeParams() {
    const params = new URLSearchParams();

    this.homePredicate.forEach((value, key) => {
      params.append(key, value);
    });

    params.append("limit", String(HOMELIMIT));
    params.append("offset", `${this.homePage ? this.homePage * HOMELIMIT : 0}`);
    return params;
  }

  @computed get axiosSearchParams() {
    const params = new URLSearchParams();

    this.searchPredicate.forEach((value, key) => {
      params.append(key, value);
    });

    params.append("limit", String(SEARCHLIMIT));
    params.append(
      "offset",
      `${this.homePage ? this.homePage * SEARCHLIMIT : 0}`
    );
    return params;
  }

  @computed get totalHomePages() {
    return Math.ceil(this.startUpHomeCount / HOMELIMIT);
  }

  @computed get totalSearchPages() {
    return Math.ceil(this.startUpSearchCount / SEARCHLIMIT);
  }

  @action setHomePage = (page: number) => {
    this.homePage = page;
  };
  @action setSearchPage = (page: number) => {
    this.searchPage = page;
  };

  @computed get searchedStartUpsForHome() {
    return Array.from(this.startUpHomeRegistry.values());
  }

  @computed get searchedStartUpsForSearch() {
    return Array.from(this.startUpSearchRegistry.values());
  }

  @action getStartUpProfile = async (id: string) => {
    this.loadingProfile = true;
    try {
      const startUpProfile = await agent.StartUp.getStartUpProfile(id);
      runInAction(() => {
        this.startUpProfile = startUpProfile;
        this.loadingProfile = false;
      });
      return startUpProfile;
    } catch (error) {
      runInAction(() => {
        this.loadingProfile = false;
      });
      console.log(error);
    }
  };

  @action loadStartUpsForHome = async () => {
    this.loadingForHome = true;
    try {
      const startUpProfileHomePageEnvelope = await agent.StartUp.getStartUpsForHome(
        this.axiosHomeParams
      );
      const {
        startUpProfilesForHomePage,
        startUpCount,
      } = startUpProfileHomePageEnvelope;
      runInAction("loading startUps for home", () => {
        startUpProfilesForHomePage.forEach((startUpProfile) => {
          this.startUpHomeRegistry.set(startUpProfile.id, startUpProfile);
        });
        this.startUpHomeCount = startUpCount;
        this.loadingForHome = false;
      });
    } catch (error) {
      runInAction("load startup profile for home error", () => {
        this.loadingForHome = false;
      });
    }
  };

  @action loadStartUpsForSearch = async () => {
    this.loadingForSearch = true;
    try {
      const startUpProfileSearchEnvelope = await agent.StartUp.getStartUpsForSearch(
        this.axiosHomeParams
      );
      const {
        startUpProfilesForSearchPage,
        startUpCount,
      } = startUpProfileSearchEnvelope;
      runInAction("loading startUps for home", () => {
        startUpProfilesForSearchPage.forEach((startUpProfile) => {
          this.startUpSearchRegistry.set(startUpProfile.id, startUpProfile);
        });
        this.startUpSearchCount = startUpCount;
        this.loadingForSearch = false;
      });
    } catch (error) {
      runInAction("load startup profile for home error", () => {
        this.loadingForSearch = false;
      });
    }
  };
}
