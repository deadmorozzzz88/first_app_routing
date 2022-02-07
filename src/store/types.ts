import { PostsDataType } from "../assets/data";
import { PostsActionType, UserActionsType } from "./actions";

export type ReducerType = {
  posts: PostsDataType;
  user: UserType;
};

export type UserType = {
  lastName: string;
  firstName: string;
};

type FetchPostsDataActionType = {
  type: PostsActionType.fetchPostsData;
  payload: PostsDataType;
};

type UserRegistrationActionType = {
  type: UserActionsType.userRegistration;
  payload: UserType;
};

type UserLogoutActionType = {
  type: UserActionsType.userLogout;
};

export type ActionsType =
  | FetchPostsDataActionType
  | UserRegistrationActionType
  | UserLogoutActionType;
