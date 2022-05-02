import { removeAccessToken, setAccessToken } from "@lib/functions";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const TokenServiceComponent = () => {
  const { data } = useSession();
  useEffect(() => {
    const accessToken = data?.accessToken;
    if (accessToken) {
      setAccessToken(accessToken as string);
    } else {
      removeAccessToken();
    }
  }, [data]);
  return null;
};
