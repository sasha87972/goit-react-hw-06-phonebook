import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export const addContact = createAction("items/add", (userData) => ({
  payload: { id: nanoid(), ...userData },
}));
export const deleteContact = createAction("items/delete");
export const handleFilter = createAction("filter/change");
//   const addContact = (info) => {
//     const contact = {
//       id: nanoid(),
//       name: info.name,
//       number: info.number,
//     };
//
//   const handleFilter = (e) => {
//     setFilter(e.currentTarget.value);
//   };

//   const filterContacts = () => {
//     const normFilter = filter.toLowerCase();

//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normFilter)
//     );
//   };
//   const deleteContact = (id) => {
//     setContacts((prevState) =>
//       prevState.filter((contact) => contact.id !== id)
//     );
//   };
