import { call, put, takeEvery } from "redux-saga/effects";
import { AXIOS_POST } from "./types";

export function* sagaWatcher() {
  yield takeEvery(AXIOS_POST, sagaWorker);
}

function* sagaWorker() {
  try {
    const payload = yield call(axiosPost) 
    yield put({ type: AXIOS_POST, payload })
  } catch (e) {
    console.log(e);
  }
}
async function axiosPost() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5'"
  );
  return await response.json()
  
}
