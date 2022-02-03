import { PostsDataType } from "../assets/data";
import { PostsActionType } from "./actions";

export type ReducerType = {
  posts: PostsDataType;
};

type FetchPostsDataActionType = {
  type: PostsActionType.fetchPostsData;
  payload: PostsDataType;
};

export type ActionsType = FetchPostsDataActionType;
