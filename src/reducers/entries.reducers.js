import {
  ADD_ENTRY,
  REMOVE_ENTRY,
  UPDATE_ENTRY,
  FETCH_ENTRIES,
  ADD_TRANSACTION,
} from "../actions/types";

const initialState = [];

const reducers = (state = initialState, action) => {
  let newEntries;
  switch (action.type) {
    case FETCH_ENTRIES:
      return action.payload;
    case ADD_TRANSACTION:
      newEntries = state.concat({ ...action.payload });
      return newEntries;
    case REMOVE_ENTRY:
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    case UPDATE_ENTRY:
      newEntries = [...state];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = { ...action.payload.entry };
      return newEntries;
    default:
      return state;
  }
};

export default reducers;
