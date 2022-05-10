import { Reducer } from "@reduxjs/toolkit";
import { RoleTypeListAT } from "../actionTypes";

export const roleTypeListReducer: Reducer = (state = { data: [], loading: false }, action) => {
  switch (action.type) {
    case RoleTypeListAT.REQUEST:
      return { loading: true, data: [] };

    case RoleTypeListAT.SUCCESS:
      return { loading: false, data: action.payload };

    case RoleTypeListAT.FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
