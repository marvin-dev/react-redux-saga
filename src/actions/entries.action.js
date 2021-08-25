import {
  ADD_ENTRY,
  ADD_TRANSACTION,
  FETCH_ENTRIES,
  GET_ENTRIES,
  REMOVE_ENTRY,
  UPDATE_ENTRY,
} from "./types";

export const addEntry = (payload) => {
  return { type: ADD_ENTRY, payload };
};

export const deleteEntry = (id) => {
  return { type: REMOVE_ENTRY, payload: { id } };
};

export const updateEntry = (id, entry) => {
  return { type: UPDATE_ENTRY, payload: { id, entry } };
};

export const getEntries = () => {
  return { type: GET_ENTRIES };
};

export const fetchEntries = (entries) => {
  return { type: FETCH_ENTRIES, payload: entries };
};

export const addTransaction = (payload) => {
  return { type: ADD_TRANSACTION, payload };
};
