import { put } from "redux-saga/effects";
import { takeLatest } from "@redux-saga/core/effects";
import { QUERIES } from "../actions/queries";
import { OUTPUT } from "../actions/output";
import runQuery from "../services/runQuery";

export function* querySaga(action) {
  console.log('inside querySaga');
  const response = yield runQuery(action.payload);
  yield put({
    type: OUTPUT.UPDATE_OUTPUT,
    payload: {
      queryId: action.payload.queryId,
      response,
    }
  });
};

export default function* watchQuerySaga() {
  yield takeLatest(QUERIES.RUN_QUERY, querySaga);
}