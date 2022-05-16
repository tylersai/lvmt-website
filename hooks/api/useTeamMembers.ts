import constants from "@lib/constants";
import { getAccessToken } from "@lib/functions";
import axios from "axios";
import useSWR from "swr";
import { PaginationRequestOptions, PageResponse } from "types/pagination";
import { TeamMember } from "types/model";

export const API_VER = "v1";
export const BASE_URL = constants.E360_V1_API_URL;
const URL = "/staffs/paginate/employees";
export let KEY = URL;

const fetcher = (url: string) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    return axios
      .get<PageResponse<TeamMember>>(url, {
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
  const fullUrl = `${BASE_URL}${URL}?showArchivedData=${Boolean(showArchivedData)}&page=${page}&size=${size}`;
  KEY = fullUrl;
  const { data, error } = useSWR(fullUrl, fetcher);

  return { teamMemberPage: data, error, loading: !data && !error };
};

export default useTeamMembers;
