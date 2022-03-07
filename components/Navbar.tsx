import { FC, MouseEventHandler, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "@styles/Navbar.module.scss";
import Link from "next/link";
import { NextLinkButton } from ".";
import { menus, manageMenus } from "content/menus";
import { useRouter } from "next/router";

export const Navbar: FC = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "initial";
    }
    return () => {
      document.body.style.position = "initial";
    };
  }, [openMenu]);

  const fadeOutBeforeClose: MouseEventHandler<HTMLButtonElement> = () => {
    const wrapper = document.getElementById("mobileMenuWrapper");
    if (wrapper) {
      wrapper.classList.remove("fadeIn");
      wrapper.classList.add("fadeOut");
      setTimeout(() => {
        wrapper.classList.remove("fadeOut");
        setOpenMenu(false);
      }, 250);
    }
  };

  return (
    <>
      <header className={classNames(styles.Navbar, "d-none d-lg-flex align-items-center justify-content-between")}>
        <Link href="/">
          <a className={classNames(styles.logoWrapper, "d-flex align-items-center text-decoration-none")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.logo} src="/logo@414x414.png" alt="Logo" role="img" />
            <h1 className="mb-0 text-primary">E360</h1>
          </a>
        </Link>
        {router.pathname.startsWith("/manage") ? (
          <div className={classNames(styles.buttonWrapper, "d-flex align-items-center")}>
            <button className={styles.iconBtn}>
              <i className="bi bi-bell"></i>
            </button>
            <button className={styles.profileBtn} style={{ backgroundImage: `url("${"/profile.png"}")` }}></button>
          </div>
        ) : (
          <ul className={classNames(styles.menuWrapper, "mb-0 d-flex align-items-center")}>
            {menus.map((el, i) => (
              <li key={i}>
                <Link href={el.href}>
                  <a className={styles.navLink}>{el.text}</a>
                </Link>
              </li>
            ))}
            <li>
              <NextLinkButton href="/login">Login</NextLinkButton>
            </li>
          </ul>
        )}
      </header>
      <header
        className={classNames(styles.NavbarMobile, "d-flex d-lg-none align-items-center justify-content-between")}
      >
        <Link href="/">
          <a className="d-flex align-items-center text-decoration-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.logoMobile} src="/logo@414x414.png" alt="Logo" role="img" />
            <h1 className="mb-0 ms-3 text-primary">E360</h1>
          </a>
        </Link>
        <button className={styles.menuButton} onClick={() => setOpenMenu(true)}>
          <i className="bi bi-filter"></i>
        </button>
        <div
          id="mobileMenuWrapper"
          className={classNames(
            styles.mobileMenuWrapper,
            openMenu ? "d-flex fadeIn" : "d-none",
            "flex-column align-items-stretch justify-content-between position-fixed top-0 bottom-0 start-0 end-0"
          )}
        >
          <div className="d-flex justify-content-end p-4 p-sm-5">
            <button className={styles.menuButton} onClick={fadeOutBeforeClose}>
              <i className="bi bi-x-lg text-white"></i>
            </button>
          </div>
          <ul className="flex-grow-1 m-0 p-0 d-flex flex-column align-items-center">
            {menus.map((el, i) => (
              <li key={i} className="my-2">
                <Link href={el.href}>
                  <a className={styles.navLinkMobile}>{el.text}</a>
                </Link>
              </li>
            ))}
            {router.pathname.startsWith("/manage") ? (
              <li key={menus.length} className="my-2 p-3 pb-2 bg-blue-700 opacity-75">
                <span className={classNames(styles.navLinkMobile, "d-block text-center")}>
                  Manage <i className="bi bi-caret-down-fill"></i>
                </span>
                <hr className="mx-auto mt-3 mb-1" style={{ width: "90%" }} />
                <ul className="px-3 py-2">
                  {manageMenus.map((el, i) => (
                    <li key={i} className="my-2">
                      <Link href={el.href}>
                        <a className={classNames(styles.navLinkMobile, "text-center fs-13")}>{el.text}</a>
                      </Link>
                    </li>
                  ))}
                  <li key={manageMenus.length} className="my-2">
                    <Link href="/">
                      <a className={classNames(styles.navLinkMobile, "text-center fs-13")}>
                        Logout <i className="bi bi-arrow-right"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li key={menus.length} className="my-2">
                <Link href="/login">
                  <a className={styles.navLinkMobile}>
                    Login <i className="bi bi-arrow-right"></i>
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </header>
    </>
  );
};
