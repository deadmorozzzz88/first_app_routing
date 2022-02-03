import { PostsDataType } from "../assets/data";
import { ReducerType, ActionsType } from "./types";
import { PostsActionType } from "./actions";

const initialState: ReducerType = {
  posts: [] as PostsDataType,
};

const reducer = (state = initialState, action: ActionsType): ReducerType => {
  switch (action.type) {
    case PostsActionType.fetchPostsData:
      return state;
    default:
      return state;
  }
};

export default reducer;
