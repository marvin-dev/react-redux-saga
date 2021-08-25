import { takeEvery, fork, call, put } from "@redux-saga/core/effects";
import { fetchEntries } from "../actions/entries.action";
import { FETCH_ENTRIES, GET_ENTRIES } from "../actions/types";
import * as API from "../api/apiCall";

function* getEntries() {
  "calling again";
  try {
    const result = yield call(API.getEntries);
    // yield put({ type: FETCH_ENTRIES, payload: result.data });
    console.log("result", result.data);
    yield put(fetchEntries(result.data));
  } catch (error) {}
}

function* watchGetEntries() {
  yield takeEvery(GET_ENTRIES, getEntries);
}

const sagas = [fork(watchGetEntries)];

export default sagas;
