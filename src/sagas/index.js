import { all, fork } from "@redux-saga/core/effects";
// import * as addTransaction from "./entriesSagaAdd";
import addSaga from "./entriesSagaAdd";
import sagas from "./entriesSaga";

export default function* rootSaga() {
  yield all([...sagas, ...addSaga]);
  // yield all([...Object.values(entriesSagas)].map(fork));
}
