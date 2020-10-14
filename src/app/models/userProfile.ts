import { IStartUpLocation } from "./startUp";

export interface IUserProfileFormValues {
  isAvailableForFreelance: boolean;
  gender: string;
  birthday: Date;
  description: string;
  titleId: string;
  skills: string[];
  location: IStartUpLocation;
  resumes: IResume[];
}

export interface IResume {
  companyName: string;
  companyDescription: string;
  position: string;
  start: Date;
  end: Date;
  isCurrent: boolean;
}

export interface IUserProfile {
  id: string;
  created: Date;
  isAvailableForFreelance: boolean;
  gender: string;
  birthday: Date;
  description: string;
  title: string;
  titleId: string;
  userSkills: ISkill[];
  location: IStartUpLocation;
  resumes: IResume[];
}

export interface ITitle {
  id: string;
  name: string;
  skillForUsers: ISkill[];
}

export interface ISkill {
  id: string;
  name: string;
}
