import { FC } from "react";
import Head from "next/head";

interface CommonHeadProp {
  title?: string;
}

export const CommonHead: FC<CommonHeadProp> = ({ children, title = "E360" }) => {
  return (
    <Head>
      <title>{title}</title>
      {children}
    </Head>
  );
};
