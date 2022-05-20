import { configureStore } from "@reduxjs/toolkit";
import { staffTypeListReducer } from "./reducer/staffTypeReducer";
import { roleTypeListReducer } from "./reducer/roleTypeReducer";
import { salutationListReducer } from "./reducer/salutationReducer";
import { teamMemberFormReducer } from "./reducer/teamMemberReducer";
import { companyReducer } from "./reducer/companyReducer";

const store = configureStore({
  reducer: {
    staffTypeList: staffTypeListReducer,
    roleTypeList: roleTypeListReducer,
    salutationList: salutationListReducer,
    teamMemberForm: teamMemberFormReducer,
    company: companyReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
