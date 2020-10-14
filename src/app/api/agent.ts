import axios, { AxiosResponse } from "axios";
import { history } from "../..";
import { toast } from "react-toastify";
import {
  IStartUpProfile,
  IStartUpProfileForm,
  IStartUpProfileHomePageEnvelope,
  IStartUpProfileSearchEnvelope,
} from "../models/startUp";
import {
  IUser,
  IUserChangePasswordFormValues,
  IUserFormValues,
} from "../models/user";
import { IUserPhoto } from "../models/userPhoto";
import {
  IUserProfileFormValues,
  IUserProfile,
  ITitle,
} from "../models/userProfile";
import { IStartUpMemberOption, IStartUpOption } from "../models/startUpOption";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(undefined, (error) => {
  const orignalRequest = error.config;

  if (error.message === "Network Error" && !error.response) {
    toast.error("Network error - make sure API is running!");
  }
  const { status, data, config } = error.response;

  if (status === 404) {
    history.push("/notfound");
  }

  // if (status === 401 && orignalRequest.url.endWith("refresh")) {
  //   console.log("clean");
  //   window.localStorage.removeItem("token");
  //   window.localStorage.removeItem("refreshToken");
  //   history.push("/");
  //   toast.info("Your session has expired, please login again");
  //   return Promise.reject(error);
  // }

  if (status === 401 && orignalRequest._retry === undefined) {
    orignalRequest._retry = true;
    return axios
      .post("user/refresh", {
        token: window.localStorage.getItem("token"),
        refreshToken: window.localStorage.getItem("refreshToken"),
      })
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("refreshToken", res.data.refreshToken);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.token}`;
        return axios(orignalRequest);
      });
  }

  if (
    status === 400 &&
    config.method === "get" &&
    data.errors.hasOwnProperty("id")
  ) {
    history.push("/notfound");
  }
  if (status === 500) {
    toast.error("Server error - check the terminal for more info!");
  }
  throw error.response;
});

const responseBody = (response: AxiosResponse) => response.data;

// const sleep = (ms: number) => (response: AxiosResponse) =>
//   new Promise<AxiosResponse>((resolve) =>
//     setTimeout(() => resolve(response), ms)
//   );

// enable to see loading
// const requests = {
//   get: (url: string) => axios.get(url).then(sleep(2000)).then(responseBody),
//   post: (url: string, body: {}) => axios.post(url, body).then(sleep(2000)).then(responseBody),
//   put: (url: string, body: {}) => axios.put(url, body).then(sleep(2000)).then(responseBody),
//   del: (url: string) => axios.delete(url).then(sleep(2000)).then(responseBody),
//   postForm: async (url: string, file: Blob) => {
//     let formData = new FormData();
//     formData.append("File", file);
//     const response = await axios
//       .post(url, formData, {
//         headers: { "Content-type": "multipart/form-data" }
//       });
//     return responseBody(response);
//   }
// };

//enable in production or don't want to see loading
const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
  postForm: async (url: string, file: Blob) => {
    let formData = new FormData();
    formData.append("File", file);
    const response = await axios.post(url, formData, {
      headers: { "Content-type": "multipart/form-data" },
    });
    return responseBody(response);
  },
};

const User = {
  login: (user: IUserFormValues): Promise<IUser> =>
    requests.post(`/user/login`, user),
  register: (user: IUserFormValues): Promise<IUser> =>
    requests.post(`/user/register`, user),
  getCurrentUser: (): Promise<IUser> => requests.get("/user/current-user"),
  fbLogin: (accessToken: string) =>
    requests.post(`/user/facebook`, { accessToken }),
  update: (updateUser: Partial<IUser>) =>
    requests.put(`/user/update`, updateUser),
  changePassword: (newPassword: IUserChangePasswordFormValues) =>
    requests.post(`/user/change-password`, newPassword),
};

const UserPhoto = {
  addOrChangePhoto: (photo: Blob): Promise<IUserPhoto> =>
    requests.postForm(`/userPhoto/add-change`, photo),
  deletePhoto: (photoId: string) =>
    requests.del(`/userPhoto/${photoId}/delete`),
};

const StartUp = {
  getStartUpProfile: (id: string): Promise<IStartUpProfile> =>
    requests.get(`/startup/${id}`),
  getStartUpsForHome: (
    params: URLSearchParams
  ): Promise<IStartUpProfileHomePageEnvelope> =>
    axios.get("/startup/for-home", { params: params }).then(responseBody),
  getStartUpsForSearch: (
    params: URLSearchParams
  ): Promise<IStartUpProfileSearchEnvelope> =>
    axios.get("/startup/for-search", { params: params }).then(responseBody),
  createStartUp: (startUp: IStartUpProfileForm): Promise<IStartUpProfile> =>
    requests.post(`/startup/create-startup`, startUp),
};

const UserProfile = {
  create: (userProfile: IUserProfileFormValues): Promise<IUserProfile> =>
    requests.post(`/userprofile/create-user-profile`, userProfile),
  get: (): Promise<IUserProfile> =>
    requests.get(`/userprofile/get-user-profile`),
};

const TitleForUser = {
  fetchTitles: (): Promise<ITitle[]> =>
    requests.get(`/DefaultUserData/get-titles`),
};

const StartUpOptions = {
  fetchStartUpOptions: (): Promise<IStartUpOption> =>
    requests.get(`/StartUpDataOption/get-options`),
  fetchStartupMemberOptions: (): Promise<IStartUpMemberOption[]> =>
    requests.get(`/StartUpDataOption/get-startup-member-option`),
};

export default {
  User,
  UserPhoto,
  StartUp,
  UserProfile,
  TitleForUser,
  StartUpOptions,
};
