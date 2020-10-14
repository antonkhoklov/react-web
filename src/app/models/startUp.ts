export interface IStartUpProfileHomePageEnvelope {
  startUpProfilesForHomePage: IStartUpProfileForHomePage[];
  startUpCount: number;
}

export interface IStartUpProfileSearchEnvelope {
  startUpProfilesForSearchPage: IStartUpProfileForSearch[];
  startUpCount: number;
}

export interface IStartUpProfile {
  id: string;
  created: Date;
  name: string;
  email: string;  
  website?: string;
  tagLine: string;
  description: string;
  valueProposition: string;
  isRegistered: boolean;
  videoPitch?: string;
  averageAgeOfTeamMembers: string;
  totalTeamMembers: number;
  founded: number;
  impact: boolean;
  //only if impact is true then iterate sdg's 
  sdGs: IStartUpSDGs[];
  logo: IStartUpLogo;
  coverPhoto: IStartUpCoverPhoto;
  socialMedia?: IStartUpSocialMedia;
  photos: IStartUpPhoto[];
  sharedDocs: IStartUpSharedDoc[];
  startUpLocation: IStartUpLocation;
  teamMembers: IStartUpTeamMember[];
  level: IStartUpLevel;
}

export interface IStartUpProfileForHomePage {
  id: string;
  created: Date;
  name: string;
  website: string;
  tagLine: string;
  logo: IStartUpLogo;
  socialMedia?: IStartUpSocialMedia;
  startUpLocation: IStartUpLocation;
}

export interface IStartUpProfileForSearch {
  id: string;
  created: Date;
  name: string;
  description: string;
  totalTeamMembers: number;
  logo: IStartUpLogo;
  startUpLocation: IStartUpLocation;
  level: IStartUpLevel;
}

export interface IStartUpSDGs {
  name: string;
  description: string;
}

export interface IStartUpLogo {
  id: string;
  url: string;
}
export interface IStartUpCoverPhoto {
  id: string;
  url: string;
}
export interface IStartUpSocialMedia {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
}

export interface IStartUpPhoto {
  id: string;
  url: string;
  isMain: boolean;
}

export interface IStartUpSharedDoc {
  id: string;
  url: string;
  name: string;
}

export interface IStartUpLocation {
  name: string;
  address: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface IStartUpTeamMember {
  name: string;
  id: string;
  title: string;
  isOwner: boolean;
}

export interface IStartUpLevel {
  stageName: string;
  fundingStatus: string;
  bussinessModelType: string;
  industryType: string;
}

export interface IStartUpProfileForm {
  name: string;
  email: string;  
  website?: string;
  tagLine: string;
  description: string;
  valueProposition: string;
  isRegistered: boolean;
  videoPitch: string;
  averageAgeOfTeamMembers: string;  
  totalTeamMembers: number;
  founded: number;
  impact: boolean;
  location: IStartUpLocation;
  socialMedia: IStartUpSocialMedia;
  level: ILevelForStartUpProfileForm;  
  sDGs: ISDGsForStartUpProfileForm[];
  //pass id from IStartUpMemberOption, check inside of startUpOption
  memberNames: string[];  
  sdgSel: string; 
  sdgDescription: string;
}

export interface ILevelForStartUpProfileForm {
  stageId: string;
  fundingId: string;
  bussinessModelId: string;
  industryId: string;
}

export interface ISDGsForStartUpProfileForm {
  id: string;
  name: string;
  description: string;
}