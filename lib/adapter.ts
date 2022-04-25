import { Account, Awaitable } from "next-auth";
import type { Adapter, AdapterUser, AdapterSession } from "next-auth/adapters";
import axios from "axios";

export default function E360Adapter(apiUrl: string | undefined | null): Adapter {
  if (!apiUrl || !apiUrl.trim()) {
    console.error("E360_API_URL is missing in env variable");
  }
  const url = `${apiUrl}/website/auth`;

  const adapter: Adapter = {
    createUser: (user: Omit<AdapterUser, "id">): Awaitable<AdapterUser> => {
      console.log({ user, func: "createUser" });
      return axios.post(`${url}/user`, user);
    },
    getUser: (id: string): Awaitable<AdapterUser | null> => {
      console.log({ id, func: "getUser" });
      return axios.get(`${url}/user/${id}`);
    },
    getUserByEmail: function (email: string): Awaitable<AdapterUser | null> {
      console.log({ email, func: "getUserByEmail" });
      return axios.get(`${url}/user/email/${email}`);
    },
    getUserByAccount: (account: Pick<Account, "provider" | "providerAccountId">): Awaitable<AdapterUser | null> => {
      console.log({ account, func: "getUserByAccount" });
      return axios.get(`${url}/user/provider/${account.provider}/account/${account.providerAccountId}`);
    },
    updateUser: (user: Partial<AdapterUser>): Awaitable<AdapterUser> => {
      console.log({ user, func: "updateUser" });
      return axios.put(`${url}/user`, user);
    },
    linkAccount: (account: Account): Promise<Account | null | undefined> | Awaitable<Account | null | undefined> => {
      console.log({ account, func: "linkAccount" });
      return axios.post(`${url}/account`, account);
    },
    createSession: (session: { sessionToken: string; userId: string; expires: Date }): Awaitable<AdapterSession> => {
      console.log({ session, func: "createSession" });
      return axios.post(`${url}/session`, session);
    },
    getSessionAndUser: (sessionToken: string): Awaitable<{ session: AdapterSession; user: AdapterUser } | null> => {
      console.log({ sessionToken, func: "getSessionAndUser" });
      if (sessionToken && sessionToken !== "undefined") return axios.get(`${url}/session/${sessionToken}`);
      else return new Promise((resolve) => resolve(null));
    },
    updateSession: (
      session: Partial<AdapterSession> & Pick<AdapterSession, "sessionToken">
    ): Awaitable<AdapterSession | null | undefined> => {
      console.log({ session, func: "updateSession" });
      return axios.put(`${url}/session`, session);
    },
    deleteSession: function (
      sessionToken: string
    ): Promise<AdapterSession | null | undefined> | Awaitable<AdapterSession | null | undefined> {
      console.log({ sessionToken, func: "deleteSession" });
      return axios.delete(`${url}/session/${sessionToken}`);
    },
  };
  return adapter;
}
