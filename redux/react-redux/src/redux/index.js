import { combineReducers } from "redux";
import { postReducer } from "./postsReducer";
export const reducers = combineReducers({
  posts: postReducer 
})