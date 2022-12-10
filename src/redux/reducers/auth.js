import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userAws: null,
};

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserAws: (state, action) => {
      state.userAws = action.payload;
    },
  },
});

export const { setUser, setUserAws } = authReducer.actions;
export default authReducer.reducer;
