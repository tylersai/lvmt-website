import classNames from "classnames";
import React, { FC, ReactHTML } from "react";
import styles from "../styles/Button.module.scss";

type ButtonColor = "primary" | "default" | "secondary";

interface ButtonProps {
  component?: ReactHTML;
  color?: ButtonColor;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button: FC<ButtonProps> = ({ component, color = "primary", className, onClick, children }) =>
  React.createElement("button", { className: classNames(styles[`Button_${color}`], className), onClick }, children);
