import { getAccessToken } from "@lib/functions";
import axios from "axios";
import useSWR from "swr";

export const API_VER = "v2";
export const BASE_URL = process.env.NEXT_PUBLIC_E360_API_URL || "";
const URL = "/staffs/paginate/employees";

const fetcher = (url: string) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data);
  } else {
    throw new Error("You're not logged in.");
  }
};


const useCompany = () => {
  const { data, error } = useSWR(
    `${BASE_URL}${URL}`,
    fetcher
  );

  return { teamMemberPage: data, error, loading: !data && !error };
};

export default useCompany;
