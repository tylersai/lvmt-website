import { Reducer } from "@reduxjs/toolkit";
import { Company } from "types/model";
import { CompanyAT } from "../actionTypes";

interface CompanyState {
  company: Company | null;
  loading: boolean;
}

export const companyReducer: Reducer<CompanyState> = (
  state: CompanyState = {
    company: null,
    loading: false
  },
  action
) => {
  switch (action.type) {
    case CompanyAT.GET_REQUEST:
    case CompanyAT.EDIT_REQUEST:
      return { ...state, loading: true };

    case CompanyAT.GET_SUCCESS:
    case CompanyAT.EDIT_SUCCESS:
      return { company: action.payload, loading: false, };
    case CompanyAT.GET_FAIL:
    case CompanyAT.EDIT_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};
