import axios from "axios";
import { StaffTypeListAT } from "../actionTypes";
import constants from "@lib/constants";

export const getStaffTypeListAction = (accessToken: string) => async (dispatch: any) => {
  try {
    dispatch({ type: StaffTypeListAT.REQUEST });

    const res = await axios.get(`${constants.E360_V1_API_URL}/setting/types/STAFF-TYPES`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch({ type: StaffTypeListAT.SUCCESS, payload: res.data });
  } catch (error: any) {
    dispatch({
      type: StaffTypeListAT.FAIL,
      payload: (error.response && error.response.data.message) || error.message,
    });
  }
};
