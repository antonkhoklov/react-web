export interface IUser {
  firstname: string;
  lastname: string; 
  userPhoto?: IUserPhoto;
  userCoverPhoto?: IUserPhoto;
  joiningDate: Date;  
  token: string;
  refreshToken: string;  
  userProfileId: string;
}

export interface IUserFormValues {
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
}
// export interface IUserUpdateFormValues {
//     firstname: string;
//     lastname: string;
//     joiningDate: Date;
//     birthday? : Date;
//     description?: string;
// }

export interface IUserChangePasswordFormValues {
  email: string;
  token: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IUserPhoto {
  id: string;
  url: string;
}
