import classNames from "classnames";
import { ChangeEventHandler, CSSProperties, FC, FocusEventHandler, HTMLInputTypeAttribute, useMemo } from "react";
import styles from "@styles/InputGroup.module.scss";
interface InputGroupProps {
  name?: string | undefined;
  className?: string | undefined;
  label?: string | undefined;
  message?: string | undefined;
  placeholder?: string | undefined;
  inputType?: HTMLInputTypeAttribute | undefined;
  defaultValue?: string | number | readonly string[] | undefined;
  value?: string | number | readonly string[] | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus?: FocusEventHandler<HTMLInputElement> | undefined;
  style?: CSSProperties | undefined;
  required?: boolean | undefined;
  disabled?: boolean | undefined;
  labelClassName?: string | undefined;
  inputClassName?: string | undefined;
  messageClassName?: string | undefined;
}

export const InputGroup: FC<InputGroupProps> = ({
  name,
  className,
  label,
  message,
  placeholder,
  inputType,
  value,
  defaultValue,
  onChange,
  onFocus,
  style,
  required,
  disabled,
  labelClassName,
  inputClassName,
  messageClassName,
}) => {
  const randStr = useMemo(() => `input_id_${Math.random().toString().substring(2, 6)}`, []);

  return (
    <div
      className={classNames(
        "d-flex flex-column align-items-stretch position-relative",
        styles.InputGroup,
        className,
        message && styles.InputGroup_error
      )}
      style={style}
    >
      {label && (
        <label htmlFor={randStr} className={labelClassName}>
          {label}
          {required && " *"}
        </label>
      )}
      <input
        className={inputClassName}
        defaultValue={defaultValue}
        name={name}
        id={randStr}
        type={inputType}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        disabled={disabled}
      />
      {message && <small className={classNames("position-absolute fs-10 fw-400", messageClassName)}>{message}</small>}
    </div>
  );
};
