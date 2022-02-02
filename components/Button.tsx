import classNames from "classnames";
import React, { FC } from "react";
import styles from "../styles/Button.module.scss";

type ButtonColor = "primary" | "default" | "secondary";
type ButtonComponent = "button" | "a";

interface ButtonProps {
  component?: ButtonComponent;
  color?: ButtonColor;
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button: FC<ButtonProps> = ({
  component = "button",
  color = "primary",
  className,
  onClick,
  href = "#",
  children,
}) =>
  React.createElement(
    component,
    { className: classNames(styles[`Button_${color}`], className), onClick, href },
    children
  );
