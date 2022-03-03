import { FC } from "react";
import classNames from "classnames";
import styles from "@styles/NavbarAlt.module.scss";
import Link from "next/link";

export const NavbarAlt: FC = () => {
  return (
    <header className={classNames(styles.NavbarAlt, "d-none d-lg-flex align-items-center justify-content-between")}>
      <Link href="/">
        <a className={classNames(styles.logoWrapper, "d-flex align-items-center text-decoration-none")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.logo} src="/logo@414x414.png" alt="Logo" role="img" />
          <h1 className="mb-0 text-primary">E360</h1>
        </a>
      </Link>
      <div className={classNames(styles.buttonWrapper, "d-flex align-items-center")}>
        <button className={styles.iconBtn}>
          <i className="bi bi-bell"></i>
        </button>
        <button className={styles.profileBtn} style={{ backgroundImage: `url("${"/profile.png"}")` }}></button>
      </div>
    </header>
  );
};
