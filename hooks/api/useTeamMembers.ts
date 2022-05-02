import { getAccessToken } from "@lib/functions";
import axios from "axios";
import useSWR from "swr";
import { PaginationRequestOptions } from "types/pagination";

export const API_VER = "v1";
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

export interface TeamMembersOptions extends PaginationRequestOptions {}

const defaultOptions: TeamMembersOptions = { page: 1, size: 10, showArchivedData: true };

const useTeamMembers = (options?: TeamMembersOptions) => {
  const { showArchivedData, page, size } = Object.assign(defaultOptions, options);
  const { data, error } = useSWR(
    `${BASE_URL}${URL}?showArchivedData=${Boolean(showArchivedData)}&page=${page}&size=${size}`,
    fetcher
  );

  return { teamMemberPage: data, error, loading: !data && !error };
};

export default useTeamMembers;
