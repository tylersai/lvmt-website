import Image from "next/image";
import { FC } from "react";
import classNames from "classnames";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { Button } from ".";

export interface Menu {
  href: string;
  text: string;
}

export const menus: Menu[] = [
  {
    href: "#how-it-works",
    text: "Get Started",
  },
  {
    href: "#features",
    text: "Features",
  },
  {
    href: "#pricing",
    text: "Pricing",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/contact",
    text: "Contact",
  },
];

export const Navbar: FC = () => {
  return (
    <>
      <header className={classNames(styles.Navbar, "d-none d-lg-flex align-items-center justify-content-between")}>
        <div className={classNames(styles.logoWrapper, "d-flex align-items-center")}>
          <Image src="/logo@414x414.png" alt="Logo" role="img" width={52} height={52} />
          <h1 className="mb-0 text-primary">E360</h1>
        </div>
        <ul className={classNames(styles.menuWrapper, "mb-0 d-flex align-items-center")}>
          {menus.map((el, i) => (
            <li key={i}>
              <Link href={el.href}>
                <a className={styles.navLink}>{el.text}</a>
              </Link>
            </li>
          ))}
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
        <button className={styles.menuButton}>
          <i className="bi bi-filter"></i>
        </button>
      </header>
    </>
  );
};
