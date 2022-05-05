import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./slice/popupSlice";

const store = configureStore({
  reducer: {
    popup: popupSlice,
  },
});

export default store;
