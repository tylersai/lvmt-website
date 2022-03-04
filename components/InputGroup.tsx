import classNames from "classnames";
import { ChangeEventHandler, CSSProperties, FC, HTMLInputTypeAttribute, useMemo } from "react";
import styles from "@styles/InputGroup.module.scss";
interface InputGroupProps {
  name?: string | undefined;
  className?: string | undefined;
  label?: string | undefined;
  placeholder?: string | undefined;
  inputType?: HTMLInputTypeAttribute | undefined;
  defaultValue?: string | number | readonly string[] | undefined;
  value?: string | number | readonly string[] | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
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
  placeholder,
  inputType,
  value,
  defaultValue,
  onChange,
  style,
  required,
  disabled,
  labelClassName,
  inputClassName,
  messageClassName,
}) => {
  const randStr = useMemo(() => `input_id_${Math.random().toString().substring(2, 6)}`, []);

  return (
    <div className={classNames("d-flex flex-column align-items-stretch", styles.InputGroup, className)} style={style}>
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
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};
