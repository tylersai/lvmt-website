import classNames from "classnames";
import type { NextPage } from "next";
import { ChangeEventHandler, FocusEventHandler, FormEventHandler, useCallback, useState } from "react";
import { CommonHead, InputGroup, LoginSignupWrapper, PageLayout } from "@components";
import btnStyles from "@styles/Button.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const SignupPage: NextPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [emailMsg, setEmailMsg] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordMsg, setPasswordMsg] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [passwordConfirmMsg, setPasswordConfirmMsg] = useState<string>("");

  const onEmailChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => setEmail(e.target.value), [setEmail]);
  const clearEmailMsgOnFocus = useCallback<FocusEventHandler<HTMLInputElement>>(() => setEmailMsg(""), [setEmailMsg]);

  const onPasswordChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => setPassword(e.target.value),
    [setPassword]
  );
  const clearPasswordMsgOnFocus = useCallback<FocusEventHandler<HTMLInputElement>>(
    () => setPasswordMsg(""),
    [setPasswordMsg]
  );

  const onPasswordConfirmChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => setPasswordConfirm(e.target.value),
    [setPasswordConfirm]
  );
  const clearPasswordConfirmMsgOnFocus = useCallback<FocusEventHandler<HTMLInputElement>>(
    () => setPasswordConfirmMsg(""),
    [setPasswordConfirmMsg]
  );

  const goSignup: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (email && email.trim() && password && password === passwordConfirm) {
      router.push("/manage/profile");
    } else {
      if (!email || !email.trim()) {
        setEmailMsg("Email is required");
      }
      if (!password) {
        setPasswordMsg("Password is required");
      }
      if (!passwordConfirm) {
        setPasswordConfirmMsg("Please confirm your password");
      } else if (password !== passwordConfirm) {
        setPasswordConfirmMsg("Passwords mis-matched");
      }
    }
  };

  return (
    <PageLayout hideHeader hideFooter CommonHeadComp={<CommonHead title={"E360 \u2022 Signup"} />}>
      <LoginSignupWrapper formType="signup" desc="Join our E360 today for faster productivity.">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-9 col-md-8">
            <form onSubmit={goSignup}>
              <InputGroup
                className="pb-4"
                label="Email"
                placeholder="johndoe@example.com"
                name="email"
                required
                value={email}
                onChange={onEmailChange}
                message={emailMsg}
                onFocus={clearEmailMsgOnFocus}
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
                message={passwordMsg}
                onFocus={clearPasswordMsgOnFocus}
              />
              <InputGroup
                name="confirmPassword"
                // className="pb-4"
                style={{ paddingBottom: "2rem" }}
                label="Confirm Password"
                placeholder="min. 8 characters"
                inputType="password"
                required
                value={passwordConfirm}
                onChange={onPasswordConfirmChange}
                message={passwordConfirmMsg}
                onFocus={clearPasswordConfirmMsgOnFocus}
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
