import classNames from "classnames";
import React, { FC } from "react";
import styles from "@styles/Button.module.scss";
import Link from "next/link";

type ButtonColor = "primary" | "default" | "secondary";
type IconPlacement = "left" | "right";

interface NextLinkButtonProps {
  color?: ButtonColor;
  className?: string;
  href?: string;
  icon?: string;
  iconPlacement?: IconPlacement;
}

export const NextLinkButton: FC<NextLinkButtonProps> = ({
  color = "primary",
  className,
  href = "#",
  icon,
  iconPlacement = "right",
  children,
}) => (
  <Link href={href}>
    <a className={classNames("d-inline-flex align-items-center", styles[`Button_${color}`], styles.g25rem, className)}>
      <>
        {icon && iconPlacement == "left" && <i className={`bi bi-${icon}`}></i>}
        {children}
        {icon && iconPlacement == "right" && <i className={`bi bi-${icon}`}></i>}
      </>
    </a>
  </Link>
);
