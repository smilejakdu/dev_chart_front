import { all, fork } from "redux-saga/effects";
import userSaga from "./user";
import chartSaga from "./chart";

export default function* rootSaga() {
  yield all([fork(userSaga)]);
  yield all([fork(chartSaga)]);
}
