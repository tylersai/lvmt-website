import { configureStore } from "@reduxjs/toolkit";
import { staffTypeListReducer } from "./reducer/staffTypeReducer";
import popupSlice from "./slice/popupSlice";

const store = configureStore({
  reducer: {
    popup: popupSlice,
    staffTypeList: staffTypeListReducer,
  },
});

export default store;
