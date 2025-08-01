import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
