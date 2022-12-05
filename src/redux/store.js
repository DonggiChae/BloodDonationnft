import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import uiReducer from "./reducers/ui";
import bdReducer from "./reducers/bdNFTs";
import authReducer from "./reducers/auth";

const reducer = {
  ui: uiReducer,
  bdNFTs: bdReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
