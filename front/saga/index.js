import { all, fork } from "redux-saga/effects";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

import schedule from "./schedule";

export default function* rootSaga() {
  yield all([fork(schedule)]);
}
