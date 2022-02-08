import classNames from "classnames";
import React, { FC } from "react";
import styles from "../styles/SegmentedButton.module.scss";

export type ValueText<V = string, T = string> = { value: V; text: T };

export type SegmentedButtonHandler = (newValue: ValueText) => void;

export interface SegmentedButton {
  className?: string | undefined;
  options: ValueText[];
  data: ValueText;
  onChange: SegmentedButtonHandler;
}

export const SegmentedButton: FC<SegmentedButton> = ({ className, options, data, onChange }) => {
  return (
    <div className={classNames(styles.SegmentedButton, className, "d-inline-flex align-items-center p-1 bg-blue-700")}>
      {options.map((el) => (
        <button
          key={el.value}
          className={classNames(styles.button, el.value === data.value && styles.buttonActive)}
          onClick={() => onChange(el)}
        >
          {el.text}
        </button>
      ))}
    </div>
  );
};
