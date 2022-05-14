import { Reducer } from "@reduxjs/toolkit";
import { CommonSelectorType } from "types/redux";
import { StaffTypeListAT } from "../actionTypes";

export const staffTypeListReducer: Reducer<CommonSelectorType> = (
  state: CommonSelectorType = { data: [], loading: false },
  action
) => {
  switch (action.type) {
    case StaffTypeListAT.REQUEST:
      return { loading: true, data: [] };

    case StaffTypeListAT.SUCCESS:
      return { loading: false, data: action.payload };

    case StaffTypeListAT.FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
