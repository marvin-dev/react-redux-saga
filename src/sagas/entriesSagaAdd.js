import { takeLatest, fork, call, put } from "redux-saga/effects";
import { getEntries } from "../actions/entries.action";
import { ADD_ENTRY } from "../actions/types";
import * as API from "../api/apiCall";

function* addTransaction({ payload }) {
  const result = yield call(API.addEntry, {
    id: payload.id,
    description: payload.description,
    value: payload.value,
    isExpense: payload.isExpense,
  });
  yield put(getEntries());
}

function* watchAddTransaction() {
  yield takeLatest(ADD_ENTRY, addTransaction);
}

const addSaga = [fork(watchAddTransaction)];

export default addSaga;
