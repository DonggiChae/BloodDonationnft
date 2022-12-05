import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authReducer.actions;
export default authReducer.reducer;
