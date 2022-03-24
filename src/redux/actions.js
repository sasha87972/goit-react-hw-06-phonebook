import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export const addContact = createAction("items/add", (userData) => ({
  payload: { id: nanoid(), ...userData },
}));
export const deleteContact = createAction("items/delete");
export const handleFilter = createAction("filter/change");
