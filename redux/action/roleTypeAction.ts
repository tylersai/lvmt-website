import axios from "axios";
import { RoleTypeListAT } from "../actionTypes";
import constants from "@lib/constants";

export const getRoleTypeListAction = (accessToken: string) => async (dispatch: any) => {
  try {
    dispatch({ type: RoleTypeListAT.REQUEST });

    const res = await axios.get(`${constants.E360_V1_API_URL}/setting/role-types`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch({ type: RoleTypeListAT.SUCCESS, payload: res.data });
  } catch (error: any) {
    dispatch({
      type: RoleTypeListAT.FAIL,
      payload: (error.response && error.response.data.message) || error.message,
    });
  }
};
