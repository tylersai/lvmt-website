import classNames from "classnames";
import type { NextPage } from "next";
import { ChangeEventHandler, FC, FormEventHandler, useCallback, useState } from "react";
import { CommonHead, InputGroup, LoginSignupWrapper, PageLayout } from "@components";
import styles from "@styles/LoginPage.module.scss";
import btnStyles from "@styles/Button.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage: NextPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onEmailChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => setEmail(e.target.value), [setEmail]);
  const onPasswordChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => setPassword(e.target.value),
    [setPassword]
  );

  const goLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // alert("Logging in...");
    router.push("/manage/profile");
  };

  return (
    <PageLayout hideHeader hideFooter CommonHeadComp={<CommonHead title={"E360 \u2022 Login"} />}>
      <LoginSignupWrapper formType="login" desc="See your profile, purchases and payment info.">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-9 col-md-8">
            <form onSubmit={goLogin}>
              <InputGroup
                className="pb-4"
                label="Email"
                placeholder="johndoe@example.com"
                name="email"
                required
                value={email}
                onChange={onEmailChange}
              />
              <InputGroup
                name="password"
                className="pb-4"
                label="Password"
                placeholder="min. 8 characters"
                inputType="password"
                required
                value={password}
                onChange={onPasswordChange}
              />
              <div className="d-flex align-items-center justify-content-between pb-4 px-1">
                <div className="d-flex align-items-center">
                  <input name="rememberMe" id="RmbrMe" type="checkbox" />
                  <label htmlFor="RmbrMe" className="ms-2 fs-12 fw-500">
                    Remember me
                  </label>
                </div>
                <span className="text-primary fs-12 fw-500" role="button">
                  Forget password?
                </span>
              </div>
              <input
                className={classNames(btnStyles.Button_primary, "text-center d-block w-100")}
                type="submit"
                value="Login"
              />
              <p className="mt-3 mb-0 px-1 fs-13">
                Not registered yet?&nbsp;&nbsp;&nbsp;
                <Link href="/signup">
                  <a className="fw-500 text-decoration-none">Create an Account</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </LoginSignupWrapper>
    </PageLayout>
  );
};

export default LoginPage;
