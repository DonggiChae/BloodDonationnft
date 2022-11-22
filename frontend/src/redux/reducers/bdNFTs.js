import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BDNFTList: null,
};

const nftListReducer = createSlice({
  name: "nftListReducer",
  initialState,
  reducers: {
    SET_FEED: (state, action) => {
      state.BDNFTList = action.payload.BDNFTList;
    },
  },
});

export const { SET_BDNFTLIST } = nftListReducer.actions;
export default nftListReducer.reducer;
