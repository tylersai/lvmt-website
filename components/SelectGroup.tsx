import classNames from "classnames";
import { ChangeEventHandler, CSSProperties, FC, FocusEventHandler, useMemo } from "react";
import styles from "@styles/SelectGroup.module.scss";
import { CommonType } from "types/model";

interface SelectGroupProps {
  name?: string | undefined;
  className?: string | undefined;
  label?: string | undefined;
  message?: string | undefined;
  defaultValue?: string | number | readonly string[] | undefined;
  value?: string | number | readonly string[] | undefined;
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
  onFocus?: FocusEventHandler<HTMLSelectElement> | undefined;
  style?: CSSProperties | undefined;
  required?: boolean | undefined;
  disabled?: boolean | undefined;
  labelClassName?: string | undefined;
  selectClassName?: string | undefined;
  messageClassName?: string | undefined;
  options: CommonType[];
  hideEmptyOption?: boolean;
}

export const SelectGroup: FC<SelectGroupProps> = ({
  name,
  className,
  label,
  message,
  value,
  defaultValue,
  onChange,
  onFocus,
  style,
  required,
  disabled,
  labelClassName,
  selectClassName,
  messageClassName,
  options = [],
  hideEmptyOption,
}) => {
  const randStr = useMemo(() => `select_id_${Math.random().toString().substring(2, 6)}`, []);

  return (
    <div
      className={classNames(
        "d-flex flex-column align-items-stretch position-relative",
        styles.SelectGroup,
        className,
        message && styles.SelectGroup_error
      )}
      style={style}
    >
      {label && (
        <label htmlFor={randStr} className={labelClassName}>
          {label}
          {required && " *"}
        </label>
      )}
      <select
        className={classNames("form-select form-select-sm", selectClassName)}
        defaultValue={defaultValue}
        name={name}
        id={randStr}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        disabled={disabled}
      >
        {!hideEmptyOption && (
          <option key={""} value="">
            Select...
          </option>
        )}
        {options.map((el) => (
          <option key={el.id} value={el.id} disabled={el.active !== undefined && !el.active}>
            {el.value}
          </option>
        ))}
      </select>
      {message && <small className={classNames("position-absolute fs-10 fw-400", messageClassName)}>{message}</small>}
    </div>
  );
};
