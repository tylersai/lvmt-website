import { Reducer } from "@reduxjs/toolkit";
import { TeamMemberForm } from "types/model";
import { TeamMemberFormAT } from "../actionTypes";

const getDefaultTeamMember = (): TeamMemberForm => ({
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  globalHourlyRate: 0.0,
  initials: "",
  phone: "",
  staffType: "",
  roleType: "",
  salutation: "",
});

export const teamMemberFormReducer: Reducer<TeamMemberForm> = (state = getDefaultTeamMember(), action) => {
  switch (action.type) {
    case TeamMemberFormAT.CHANGE:
      return { ...state, ...action.payload };

    case TeamMemberFormAT.DEFAULT:
      return getDefaultTeamMember();

    default:
      return state;
  }
};
