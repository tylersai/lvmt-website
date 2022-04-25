import "../styles/bootstrap-custom.scss";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...otherPageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...otherPageProps} />
    </SessionProvider>
  );
}

export default MyApp;
