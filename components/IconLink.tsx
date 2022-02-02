import classNames from "classnames";
import Link from "next/link";
import React from "react";
import styles from "../styles/IconLink.module.scss";

interface IconLink {
  className?: string;
  href: string;
  icon: string;
}
export const IconLink: React.FC<IconLink> = ({ className, href, icon }) => {
  return (
    <Link href={href}>
      <a
        className={classNames(className, "d-flex align-items-center justify-content-center", styles.IconLink)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`bi bi-${icon}`}></i>
      </a>
    </Link>
  );
};
