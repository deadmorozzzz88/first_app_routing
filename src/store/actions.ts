import { PostsDataType } from "../assets/data";
/* eslint-disable no-unused-vars */
export enum PostsActionType {
  fetchPostsData = "FETCH_POST_DATA",
}

export const fetchPostsDataAction = (data: PostsDataType) => {
  return {
    type: PostsActionType.fetchPostsData,
    payload: data,
  };
};
