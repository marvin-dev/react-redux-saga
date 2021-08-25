import { OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL } from "./types";

export const openEditModal = (id) => {
  return { type: OPEN_EDIT_MODAL, payload: { id } };
};

export const closeEditModal = () => {
  return { type: CLOSE_EDIT_MODAL };
};
