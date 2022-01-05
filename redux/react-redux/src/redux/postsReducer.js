import { CREATE_POST, AXIOS_POST } from "./types";
const initialState = {
  posts: [],
  getPosts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case AXIOS_POST:
      return { ...state, getPosts: action.payload };
    default:
      return state;
  }
};
