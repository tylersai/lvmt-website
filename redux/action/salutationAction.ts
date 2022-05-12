import axios from "axios";
import { SalutationListAT } from "../actionTypes";
import constants from "@lib/constants";

export const getSalutationListAction = (accessToken: string) => async (dispatch: any) => {
  try {
    dispatch({ type: SalutationListAT.REQUEST });

    const res = await axios.get(`${constants.E360_V1_API_URL}/setting/types/SALUTATION-TYPES`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch({ type: SalutationListAT.SUCCESS, payload: res.data });
  } catch (error: any) {
    dispatch({
      type: SalutationListAT.FAIL,
      payload: (error.response && error.response.data.message) || error.message,
    });
  }
};
