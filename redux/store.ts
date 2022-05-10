import { configureStore } from "@reduxjs/toolkit";
import { staffTypeListReducer } from "./reducer/staffTypeReducer";

const store = configureStore({
  reducer: {
    staffTypeList: staffTypeListReducer,
  },
});

export default store;
