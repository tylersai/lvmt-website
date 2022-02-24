import classNames from "classnames";
import type { NextPage } from "next";
import { FC, FormEventHandler, useCallback, useState } from "react";
import { CommonHead, InputGroup, LoginSignupWrapper, PageLayout } from "@components";
import btnStyles from "@styles/Button.module.scss";
import Link from "next/link";

const SignupPage: NextPage = () => {
  const goLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alert("Signing up...");
  };

  return (
    <PageLayout hideHeader hideFooter CommonHeadComp={<CommonHead title={"E360 \u2022 Signup"} />}>
      <LoginSignupWrapper formType="signup" desc="Join our E360 today for faster productivity.">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-9 col-md-8">
            <form onSubmit={goLogin}>
              <InputGroup className="pb-4" label="Email" placeholder="johndoe@example.com" name="email" required />
              <InputGroup
                name="password"
                className="pb-4"
                label="Password"
                placeholder="min. 8 characters"
                inputType="password"
                required
              />
              <InputGroup
                name="confirmPassword"
                className="pb-4"
                label="Confirm Password"
                placeholder="min. 8 characters"
                inputType="password"
                required
              />
              <input
                className={classNames(btnStyles.Button_primary, "text-center d-block w-100")}
                type="submit"
                value="Create Account"
              />
              <p className="mt-3 mb-0 px-1 fs-13">
                Already have an account?&nbsp;&nbsp;&nbsp;
                <Link href="/login">
                  <a className="fw-500 text-decoration-none">Login</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </LoginSignupWrapper>
    </PageLayout>
  );
};

export default SignupPage;
