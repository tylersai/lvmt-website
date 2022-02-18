import classNames from "classnames";
import type { NextPage } from "next";
import { FC, useCallback, useState } from "react";
import { Button, PageLayout } from "@components";
import styles from "@styles/LoginPage.module.scss";

const imgPref = "/login";

const LoginPage: NextPage = () => {
  return (
    <PageLayout>
      <section className="row justify-content-center align-items-center">
        <h2 className="text-center">Login Page</h2>
      </section>
    </PageLayout>
  );
};

export default LoginPage;
