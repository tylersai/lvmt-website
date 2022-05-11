import { configureStore } from "@reduxjs/toolkit";
import { staffTypeListReducer } from "./reducer/staffTypeReducer";
import { roleTypeListReducer } from "./reducer/roleTypeReducer";

const store = configureStore({
  reducer: {
    staffTypeList: staffTypeListReducer,
    roleTypeList: roleTypeListReducer,
  },
});

export default store;
