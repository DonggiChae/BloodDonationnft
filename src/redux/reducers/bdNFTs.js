import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BDNFTList: [],
  RequestListLength: 0,
};

const nftListReducer = createSlice({
  name: "nftListReducer",
  initialState,
  reducers: {
    setFeed: (state, action) => {
      state.BDNFTList = action.payload;
    },
    setRequestListLength: (state, action) => {
      state.RequestListLength = action.payload;
    },
  },
});

export const { setFeed } = nftListReducer.actions;
export default nftListReducer.reducer;
