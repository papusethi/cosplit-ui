import { configureStore } from "@reduxjs/toolkit";
import appReducers from "./appSlice";

export const store = configureStore({
  reducer: {
    app: appReducers
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
