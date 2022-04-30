import { NextPage } from "next";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import qs from "query-string";
import { useEffect } from "react";

const Logout: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { redirect } = qs.parse(window.location.search);

    let url: any = null;
    if (typeof redirect === "object" && redirect && redirect.length > 0) {
      url = redirect[0];
    } else {
      url = redirect;
    }

    const decodedURL = url ? decodeURIComponent(url) : "/";

    signOut({ redirect: false, callbackUrl: decodedURL })
      .then(() => {
        router.push(new URL(decodedURL).pathname);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <p>Redirecting...</p>;
};

export default Logout;
