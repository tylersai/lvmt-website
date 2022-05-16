import { configureStore } from "@reduxjs/toolkit";
import { staffTypeListReducer } from "./reducer/staffTypeReducer";
import { roleTypeListReducer } from "./reducer/roleTypeReducer";
import { salutationListReducer } from "./reducer/salutationReducer";

const store = configureStore({
  reducer: {
    staffTypeList: staffTypeListReducer,
    roleTypeList: roleTypeListReducer,
    salutationList: salutationListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
