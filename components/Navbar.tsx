import Image from "next/image";
import { FC } from "react";
import classNames from "classnames";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { Button } from ".";

export const Navbar: FC = () => {
  return (
    <>
      <header className={classNames(styles.Navbar, "d-none d-lg-flex align-items-center justify-content-between")}>
        <div className={classNames(styles.logoWrapper, "d-flex align-items-center")}>
          <Image src="/logo@414x414.png" alt="Logo" role="img" width={52} height={52} />
          <h1 className="mb-0 text-primary">E360</h1>
        </div>
        <ul className={classNames(styles.menuWrapper, "mb-0 d-flex align-items-center")}>
          <li>
            <Link href="/">
              <a className={styles.navLink}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a className={styles.navLink}>Pricing</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={styles.navLink}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={styles.navLink}>Contact</a>
            </Link>
          </li>
          <li>
            <Button component="a" href="/login">
              Login
            </Button>
          </li>
        </ul>
      </header>
      <header
        className={classNames(styles.NavbarMobile, "d-flex d-lg-none align-items-center justify-content-between")}
      >
        <div className="d-flex align-items-center">
          <Image src="/logo@414x414.png" alt="Logo" role="img" width={42} height={42} />
          <h1 className="mb-0 ms-3 text-primary">E360</h1>
        </div>
        <button>
          <i className="bi bi-list"></i>
        </button>
      </header>
    </>
  );
};
