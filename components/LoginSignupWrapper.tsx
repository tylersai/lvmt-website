import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "@styles/LoginSignupWrapper.module.scss";
import { useRouter } from "next/router";
import { NextLinkButton } from "./NextLinkButton";
import { ClientSafeProvider, LiteralUnion, signIn } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import { Button } from "./Button";

interface LoginSignupWrapperProps {
  className?: string | undefined;
  formType: "login" | "signup";
  desc: string;
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
}

export const LoginSignupWrapper: FC<LoginSignupWrapperProps> = ({ className, formType, desc, providers, children }) => {
  const router = useRouter();

  return (
    <section className={classNames("row justify-content-center align-items-stretch", className)}>
      <div className="col-12 col-lg-6 pt-5 pb-4">
        <div className="row justify-content-center h-100">
          <div className="col-10 col-md-9 d-flex flex-column justify-content-between align-items-stretch">
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <Link href="/">
                  <a className="d-flex align-items-center text-decoration-none">
                    <Image src="/logo@414x414.png" alt="Logo" role="img" width={36} height={36} />
                    <h4 className="mb-0 ms-2 text-primary fw-600">E360</h4>
                  </a>
                </Link>
                <button
                  className={classNames(
                    styles.closeBtn,
                    "text-pink-300 bg-light border-0 d-flex justify-content-center align-items-center"
                  )}
                  onClick={() => router.back()}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
              <h3 className="text-capitalize mt-4 mb-1">{formType}</h3>
              <p className={classNames(styles.desc, "text-sh-gray")}>{desc}</p>
              <p className="fs-14 mb-2 mt-4">
                <span className="text-capitalize">{formType}</span> with:
              </p>
              <div className={classNames(styles.g25rem, "d-flex align-items-center")}>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <Button
                      key={provider.name}
                      icon="bi bi-google"
                      iconPlacement="left"
                      className={classNames(styles.socialBtn, "bg-transparent text-primary")}
                      textClassName="d-none d-sm-inline"
                      onClick={() => signIn(provider.id)}
                    >
                      {provider.name}
                    </Button>
                  ))}

                <NextLinkButton
                  href="#"
                  icon="bi bi-apple"
                  iconPlacement="left"
                  className={classNames(styles.socialBtn, "bg-transparent text-primary")}
                >
                  <span className="d-none d-sm-inline">Apple</span>
                </NextLinkButton>
                <NextLinkButton
                  href="#"
                  icon="bi bi-facebook"
                  iconPlacement="left"
                  className={classNames(styles.socialBtn, "bg-transparent text-primary")}
                >
                  <span className="d-none d-sm-inline">Facebook</span>
                </NextLinkButton>
                <NextLinkButton
                  href="#"
                  icon="bi bi-twitter"
                  iconPlacement="left"
                  className={classNames(styles.socialBtn, "bg-transparent text-primary")}
                >
                  <span className="d-none d-sm-inline">Twitter</span>
                </NextLinkButton>
              </div>
              <div className="d-flex align-items-center p-3">
                <hr className="flex-grow-1" />
                <span className="text-sh-gray fs-12 fw-300 mx-3">or {formType} with email</span>
                <hr className="flex-grow-1" />
              </div>
              {children}
            </div>
            <small className={classNames(styles.footer, "d-block text-sh-gray fw-200 text-center")}>
              &copy; 2022 LVMT Private Ltd. All rights reserved.
            </small>
          </div>
        </div>
      </div>
      <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center bg-primary"></div>
    </section>
  );
};
