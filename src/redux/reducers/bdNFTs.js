import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BDNFTList: [],
};

const nftListReducer = createSlice({
  name: "nftListReducer",
  initialState,
  reducers: {
    setFeed: (state, action) => {
      state.BDNFTList = action.payload;
    },
  },
});

export const { setFeed } = nftListReducer.actions;
export default nftListReducer.reducer;
