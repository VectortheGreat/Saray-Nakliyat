import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../blogSlice";
import authSlice from "../authSlice";

export const store = configureStore({
  reducer: {
    blogStore: blogSlice,
    authStore: authSlice,
  },
});
