import { UserType } from "./types";
import { PostsDataType } from "../assets/data";
/* eslint-disable no-unused-vars */
export enum PostsActionType {
  fetchPostsData = "FETCH_POST_DATA",
}

export enum UserActionsType {
  userRegistration = "USER_REGISTRATION",
  userLogout = "USER_LOGOUT",
}

export const fetchPostsDataAction = (data: PostsDataType) => {
  return {
    type: PostsActionType.fetchPostsData,
    payload: data,
  };
};

export const userRegistrationAction = (user: UserType) => {
  const editUser = {
    lastName: user.lastName.toLocaleLowerCase(),
    firstName: user.firstName.toLocaleLowerCase(),
  };
  return {
    type: UserActionsType.userRegistration,
    payload: editUser,
  };
};

export const userLogoutAction = () => {
  return {
    type: UserActionsType.userLogout,
  };
};
