import classNames from "classnames";
import type { NextPage } from "next";
import { FC, useCallback, useState } from "react";
import { Button, CommonHead, PageLayout } from "@components";
import styles from "@styles/LoginPage.module.scss";

const imgPref = "/login";

const LoginPage: NextPage = () => {
  return (
    <PageLayout hideHeader hideFooter CommonHeadComp={<CommonHead title={"E360 \u2022 Login"} />}>
      <section className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center text-primary">E360 Login</h2>
        </div>
        <div className="col-md-6 align-self-stretch d-none d-md-flex flex-column justify-content-center align-items-center bg-primary"></div>
      </section>
    </PageLayout>
  );
};

export default LoginPage;
