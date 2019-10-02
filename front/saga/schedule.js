import { all, fork, takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

import {
  MAKE_SCHEDULE_REQUEST,
  MAKE_SCHEDULE_SUCCESS,
  MAKE_SCHEDULE_FAILURE
} from "../reducer/schedule";

function makeScheduleAPI(data) {
  return axios.post("/schedule", data, { withCredentials: true });
}

function* makeSchedule(action) {
  try {
    const result = yield call(makeScheduleAPI, action.data);
    yield put({
      type: MAKE_SCHEDULE_SUCCESS,
      data: result && result.data
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MAKE_SCHEDULE_FAILURE
    });
  }
}

function* resolveMakeSchedule() {
  yield takeEvery(MAKE_SCHEDULE_REQUEST, makeSchedule);
}

// ------------------------------------------------

export default function* scheduleSaga() {
  yield all([fork(resolveMakeSchedule)]);
}
