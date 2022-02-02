import Image from "next/image";
import { FC } from "react";
import classNames from "classnames";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { Button } from ".";

export const Navbar: FC = () => {
  return (
    <header className={classNames(styles.Navbar, "d-flex align-items-center justify-content-between")}>
      <div className={classNames(styles.logoWrapper, "d-flex align-items-center")}>
        <Image src="/logo@128x128.png" alt="Logo" role="img" width={52} height={52} />
        <h1 className={classNames(styles.brand, "mb-0 text-primary")}>E360</h1>
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
  );
};
