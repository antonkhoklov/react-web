import { observable, action, computed, runInAction } from "mobx";
import agent from "../api/agent";
import { RootStore } from "./rootStore";
import { IStartUpOption } from "../models/startUpOption";

export default class StartUpOptionStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable startUpOption: IStartUpOption | null = null;
  @observable stageOptions = new Map();
  @observable fundingOptions = new Map();
  @observable industryOptions = new Map();
  @observable bussinessModelOptions = new Map();
  @observable sdgOptions = new Map();
  @observable memberOptions = new Map();
  @observable loading = false;

  @computed get getStageOptions() {
    return Array.from(this.stageOptions.values());
  }
  
  @computed get getFundingOptions() {
    return Array.from(this.fundingOptions.values());
  }
  
  @computed get getIndustryOptions() {
    return Array.from(this.industryOptions.values());
  }
  
  @computed get getBussinessModelOptions() {
    return Array.from(this.bussinessModelOptions.values());
  }
  
  @computed get getSdgOptions() {
    return Array.from(this.sdgOptions.values());
  }
  @computed get getMemberOptions() {
    return Array.from(this.memberOptions.values());
  }
  @action fetchStartUpOption = async () => {
    this.loading = true;
    try {
      const startUpOption = await agent.StartUpOptions.fetchStartUpOptions();
      const {
        stages,
        bussinessModels,
        industries,
        sdgs,
        fundings,
      } = startUpOption;
      runInAction(() => {
        this.stageOptions.clear();
        stages.forEach((stage) => {
          this.stageOptions.set(stage.id, stage);
        });

        this.bussinessModelOptions.clear();
        bussinessModels.forEach((model) => {
          this.bussinessModelOptions.set(model.id, model);
        });

        this.industryOptions.clear();
        industries.forEach((industry) => {
          this.industryOptions.set(industry.id, industry);
        });

        this.fundingOptions.clear();
        fundings.forEach((funding) => {
          this.fundingOptions.set(funding.id, funding);
        });

        this.sdgOptions.clear();
        sdgs.forEach((sdg) => {
          this.sdgOptions.set(sdg.id, sdg);
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

  @action fetchMemberForStartUp = async () => {
    this.loading = true;
    try {
      const members = await agent.StartUpOptions.fetchStartupMemberOptions();
      runInAction(() => {
        this.memberOptions.clear();
        members.forEach((member) => {
          console.log(member)
          this.memberOptions.set(member.id, member);
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
}
