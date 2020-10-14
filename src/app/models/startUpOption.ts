export interface IStartUpOption {
    bussinessModels: IBussinessModelOption[];
    fundings: IFundingOption[];
    industries: IIndustryOption[];
    sdgs: ISdgOption[];
    stages: IStageOption[];
}

export interface IBussinessModelOption {
    id: string;
    bussinessModelName: string;
}

export interface IFundingOption {
    id: string;
    fundingType: string;
}

export interface IIndustryOption {
    id: string;
    type: string;
}

export interface IStageOption {
    id: string;
    stageName: string;
}

export interface ISdgOption {
    id: string;
    name: string;
}

export interface IStartUpMemberOption {
    id: string;
    name: string;
}