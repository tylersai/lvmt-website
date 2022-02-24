import classNames from "classnames";
import { ChangeEventHandler, CSSProperties, FC, HTMLInputTypeAttribute, useMemo } from "react";
import styles from "@styles/InputGroup.module.scss";
interface InputGroupProps {
  className?: string | undefined;
  label?: string | undefined;
  placeholder?: string | undefined;
  inputType?: HTMLInputTypeAttribute | undefined;
  value?: string | number | readonly string[] | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  style?: CSSProperties | undefined;
  required?: boolean | undefined;
  disabled?: boolean | undefined;
}

export const InputGroup: FC<InputGroupProps> = ({
  className,
  label,
  placeholder,
  inputType,
  value,
  onChange,
  style,
  required,
  disabled,
}) => {
  const randStr = useMemo(() => `input_id_${Math.random().toString().substring(2, 6)}`, []);

  return (
    <div className={classNames("d-flex flex-column align-items-stretch", styles.InputGroup, className)} style={style}>
      {label && (
        <label htmlFor={randStr}>
          {label}
          {required && " *"}
        </label>
      )}
      <input
        id={randStr}
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};
