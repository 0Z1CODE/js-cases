import React from "react";
import {render} from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import createSagaMiddleware from "@redux-saga/core";
import { reducers } from "./redux/index";
import { sagaWatcher } from "./redux/sagas";
import thunk from "redux-thunk";
const saga = createSagaMiddleware();
const store = createStore(reducers, compose(
  applyMiddleware(
    thunk, saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)
const app = (
  <Provider store={store}>
      <App />
    
  </Provider>
);

render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
