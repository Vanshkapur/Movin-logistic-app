import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth/authSlice.js";
import orderReducer from "./Order/orderReducer.js";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    order: orderReducer,
  },
});
