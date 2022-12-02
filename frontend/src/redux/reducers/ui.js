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
  },
});

export const { accountModal } = uiReducer.actions;
export default uiReducer.reducer;
