import { getAccessToken } from "@lib/functions";
import axios from "axios";
import useSWR, { mutate } from "swr";
import { Company } from "types/model";

const API_VER = "v2";
const BASE_URL = String(process.env.NEXT_PUBLIC_E360_API_URL).replace("v1", API_VER);
const URL = "/website/companies";
const KEY = `${BASE_URL}${URL}`;


async function fetcher(url: string) {
  const accessToken = getAccessToken();
  if (accessToken) {
    const res = await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    return res.data;
  } else {
    throw new Error("You're not logged in.");
  }
}


const useCompany = () => {
  const { data, error } = useSWR(KEY, fetcher);

  const saveCompany = async (company: Company) => {
    mutate(KEY, company, false);

    try {
      const res = await axios.put(KEY, company, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return { companyPage: data, error, loading: !data && !error, saveCompany };

}

export default useCompany;
