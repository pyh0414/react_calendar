import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import createSagaMiddleware from "redux-saga";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducer";
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)) // redux dev tool
);
sagaMiddleware.run(rootSaga);

const Hot = hot(App);
ReactDOM.render(
  <Provider store={store}>
    <Hot />
  </Provider>,

  document.getElementById("root")
);
