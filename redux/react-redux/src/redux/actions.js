import { CREATE_POST, AXIOS_POST } from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function axiosPost() {
  return {
    type: AXIOS_POST
  }

}