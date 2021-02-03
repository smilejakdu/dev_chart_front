import {
  all,
  call,
  fork,
  put,
  takeLatest,
  throttle,
  take,
} from "redux-saga/effects";
import request from "../util/request";

import {
  CHART_DATA_REQUEST,
  CHART_DATA_SUCCESS,
  CHART_DATA_FAILURE,
} from "../reducers/chart";

function ChartDataAPI() {
  return request.get("/users/chartdata");
}

function* ChartData() {
  try {
    console.log("sagas-chart-data");
    const result = yield call(ChartDataAPI);
    // yield delay(1000);
    console.log("chart-data result: ", result);
    yield put({
      type: CHART_DATA_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHART_DATA_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchChartData() {
  yield takeLatest(CHART_DATA_REQUEST, ChartData);
}

export default function* chartSaga() {
  yield all([fork(watchChartData)]);
}
