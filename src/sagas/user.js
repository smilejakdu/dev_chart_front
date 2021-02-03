import { all, call, fork, put, takeLatest, throttle } from "redux-saga/effects";
import request from "../util/request";

import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
  PROGRAMMING_REQUEST,
  PROGRAMMING_SUCCESS,
  PROGRAMMING_FAILURE,
} from "../reducers/user";

function logInAPI(data) {
  return request.post("/users/login", data);
}

function* logIn(action) {
  try {
    console.log("sagas-logIn");
    const result = yield call(logInAPI, action.data);
    // yield delay(1000);
    localStorage.setItem("token", result.data.access);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return localStorage.removeItem("token");
  // return request.post("/user/logout");
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI(data) {
  return request.post("/users/register", data);
}

function* signUp(action) {
  try {
    console.log("signUp-Saga");
    const result = yield call(signUpAPI, action.data);
    console.log(result);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function loadUserListAPI() {
  return request.get(`/users/userlist`);
}

function* loadUserList() {
  try {
    const result = yield call(loadUserListAPI);
    console.log("result : ", result);
    yield put({
      type: USER_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: USER_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchLoadUserList() {
  yield throttle(5000, USER_LIST_REQUEST, loadUserList);
}

// function* watchProgrammingList() {
//   yield throttle(5000, USER_LIST_REQUEST, loadUserList);
// }

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchLoadUserList),
  ]);
}
