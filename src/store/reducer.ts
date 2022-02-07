import { ReducerType, ActionsType } from "./types";
import { PostsActionType, UserActionsType } from "./actions";

const initialState: ReducerType = {
  posts: [],
  user: { lastName: "", firstName: "" },
};

const reducer = (state = initialState, action: ActionsType): ReducerType => {
  switch (action.type) {
    case PostsActionType.fetchPostsData:
      return {
        ...state,
        posts: action.payload,
      };
    case UserActionsType.userRegistration:
      return {
        ...state,
        user: action.payload,
      };
    case UserActionsType.userLogout:
      return {
        ...state,
        user: initialState.user,
      };
    default:
      return state;
  }
};

export default reducer;
