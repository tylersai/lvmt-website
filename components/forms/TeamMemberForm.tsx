import classNames from "classnames";
import { InputGroup } from "@components";
import { CSSProperties, FC, FormEventHandler } from "react";
import buttonStyles from "@styles/Button.module.scss";
import { useSelector } from "react-redux";
import { CommonSelectorType } from "types/redux";

interface TeamMemberFormProps {
  className?: string;
  style?: CSSProperties;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const TeamMemberForm: FC<TeamMemberFormProps> = ({ onSubmit, className, style }) => {
  const {
    loading: roleTypeListLoading,
    data: roleTypeListData,
    error: roleTypeListError,
  } = useSelector<any, CommonSelectorType>((state) => state.roleTypeList);
  const {
    loading: staffTypeListLoading,
    data: staffTypeListData,
    error: staffTypeListError,
  } = useSelector<any, CommonSelectorType>((state) => state.staffTypeList);
  return (
    <form className={classNames("TeamMemberForm", className)} style={style} onSubmit={onSubmit}>
      <div className="row g-3">
        <div className="col-6 col-lg-2">
          <InputGroup defaultValue="" label="Salutation" inputType="text" required />
        </div>
        <div className="col col-lg-5">
          <InputGroup defaultValue="" label="First Name" inputType="text" required />
        </div>
        <div className="col col-lg-5">
          <InputGroup defaultValue="" label="Last Name" inputType="text" required />
        </div>
        <div className="col-6 col-lg-2">
          <InputGroup defaultValue="" label="Initials" inputType="text" required />
        </div>
        <div className="col-6 col-lg-5">
          <InputGroup defaultValue="" label="Phone" inputType="text" />
        </div>
        <div className="col-6 col-lg-5">
          <InputGroup defaultValue={0.0} min={0} label="Global Hourly Rate" inputType="number" required />
        </div>
        <div className="col col-lg-6">
          <label htmlFor="accessRole">Access Role (Role Type)</label>
          <select className="form-select form-select-sm" id="accessRole">
            {!roleTypeListLoading &&
              !roleTypeListError &&
              roleTypeListData &&
              roleTypeListData.map((el) => (
                <option key={el.id} value={el.id} disabled={el.active !== undefined && !el.active}>
                  {el.value}
                </option>
              ))}
          </select>
        </div>
        <div className="col col-lg-6">
          <label htmlFor="position">Position (Staff Type)</label>
          <select className="form-select form-select-sm" id="position">
            {!staffTypeListLoading &&
              !staffTypeListError &&
              staffTypeListData &&
              staffTypeListData.map((el) => (
                <option key={el.id} value={el.id} disabled={el.active !== undefined && !el.active}>
                  {el.value}
                </option>
              ))}
          </select>
        </div>
        <div className="col col-lg-6">
          <InputGroup defaultValue="" label="Email" inputType="email" required />
        </div>
        <div className="col col-lg-6">
          <InputGroup defaultValue="" label="Password" inputType="password" required />
        </div>
        <div className="col-12 d-flex justify-content-end">
          <input type="submit" value="Create" className={classNames(buttonStyles.Button_primary, "py-2 mt-1")} />
        </div>
      </div>
    </form>
  );
};
