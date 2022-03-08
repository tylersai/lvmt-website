import classNames from "classnames";
import React, { FC } from "react";
import styles from "@styles/Button.module.scss";

type ButtonColor = "primary" | "default" | "secondary";
type ButtonVariant = "default" | "naked";
type ButtonComponent = "button" | "a";
type IconPlacement = "left" | "right";

interface ButtonProps {
  component?: ButtonComponent;
  color?: ButtonColor;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: string;
  iconPlacement?: IconPlacement;
}

export const Button: FC<ButtonProps> = ({
  component = "button",
  color = "primary",
  variant = "default",
  className,
  onClick,
  href = "#",
  icon,
  iconPlacement = "right",
  children,
}) =>
  React.createElement(
    component,
    {
      className: classNames(
        "d-inline-flex align-items-center",
        styles[`Button_${color}${variant === "default" ? "" : `_${variant}`}`],
        className
      ),
      onClick,
      href,
    },
    <>
      {icon && iconPlacement == "left" && <i className={`bi bi-${icon} me-2`}></i>}
      <span>{children}</span>
      {icon && iconPlacement == "right" && <i className={`bi bi-${icon} ms-2`}></i>}
    </>
  );
