import "../styles/bootstrap-custom.scss";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { TokenServiceComponent, ConfigDataServiceComponent } from "@components";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps: { session, ...otherPageProps } }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <SessionProvider session={session}>
        <TokenServiceComponent />
        <ConfigDataServiceComponent />
        <Component {...otherPageProps} />
      </SessionProvider>
    </ReduxProvider>
  );
}

export default MyApp;
