import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountModal: false,
  modal: null,
  toast: null,
};

const uiReducer = createSlice({
  name: "uiReducer",
  initialState,
  reducers: {
    accountModal(state, action) {
      state.accountModal = action.payload;
    },
    SHOW_MODAL(state, action) {
      state.modal = true;
    },
    HIDE_MODAL(state, action) {
      state.modal = false;
    },
  },
});

export const { accountModal, SHOW_MODAL, HIDE_MODAL } = uiReducer.actions;
export default uiReducer.reducer;
