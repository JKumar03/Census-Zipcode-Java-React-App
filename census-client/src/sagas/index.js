import { all } from "redux-saga/effects";

import queriesSaga from "./queriesSaga";


export default function* rootSaga() {
  yield all([
    queriesSaga(),
  ])
  // code after all-effect
}