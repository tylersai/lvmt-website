import { Reducer } from "@reduxjs/toolkit";
import { CommonSelectorType } from "types/redux";
import { SalutationListAT } from "../actionTypes";

export const salutationListReducer: Reducer = (state: CommonSelectorType = { data: [], loading: false }, action) => {
  switch (action.type) {
    case SalutationListAT.REQUEST:
      return { loading: true, data: [] };

    case SalutationListAT.SUCCESS:
      return { loading: false, data: action.payload };

    case SalutationListAT.FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
