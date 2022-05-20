import constants from "@lib/constants";
import axios from "axios";
import { Company } from "types/model";
import { CompanyAT } from "../actionTypes";

export const getCompanyAction = (accessToken: string) => async (dispatch: any) => {
  try {
    dispatch({ type: CompanyAT.GET_REQUEST });

    const res = await axios.get(`${constants.E360_V2_API_URL}/website/companies`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch({ type: CompanyAT.GET_SUCCESS, payload: res.data });
  } catch (error: any) {
    dispatch({
      type: CompanyAT.GET_FAIL,
      payload: (error.response && error.response.data.message) || error.message,
    });
  }
};

export const editCompanyAction = (accessToken: string, company: Company) => async (dispatch: any) => {
  try {
    dispatch({ type: CompanyAT.EDIT_REQUEST });

    const res = await axios.put(`${constants.E360_V2_API_URL}/website/companies`, company, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch({ type: CompanyAT.EDIT_SUCCESS, payload: res.data });
  } catch (error: any) {
    dispatch({
      type: CompanyAT.EDIT_FAIL,
      payload: (error.response && error.response.data.message) || error.message,
    });
  }
};
