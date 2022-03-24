import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, handleFilter } from "./actions";

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

const filter = createReducer("", {
  [handleFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
