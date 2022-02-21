import classNames from "classnames";
import type { NextPage } from "next";
import { FC, useCallback, useState } from "react";
import { Button, CommonHead, LoginSignupWrapper, PageLayout } from "@components";
import styles from "@styles/LoginPage.module.scss";

const LoginPage: NextPage = () => {
  return (
    <PageLayout hideHeader hideFooter CommonHeadComp={<CommonHead title={"E360 \u2022 Login"} />}>
      <LoginSignupWrapper formType="login" desc="See your profile, purchases and payment info.">
        <form>
          <input type="text"></input>
        </form>
      </LoginSignupWrapper>
    </PageLayout>
  );
};

export default LoginPage;
