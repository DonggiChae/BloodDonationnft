import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./reducers/ui";
import photosReducer from "./reducers/bdNFTs";
import authReducer from "./reducers/auth";

const reducer = {
  ui: uiReducer,
  photos: photosReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer,
});

export default store;
