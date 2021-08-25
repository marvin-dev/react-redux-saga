import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import entriesReducer from "../reducers/entries.reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import modalsReducer from "../reducers/modals.reducers";
import rootSaga from "../sagas";

const rootReducers = combineReducers({
  entries: entriesReducer,
  modals: modalsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
