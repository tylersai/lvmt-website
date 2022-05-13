import classNames from "classnames";
import { InputGroup, SelectGroup } from "@components";
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
  const { data: roleTypeListData } = useSelector<any, CommonSelectorType>((state) => state.roleTypeList);
  const { data: staffTypeListData } = useSelector<any, CommonSelectorType>((state) => state.staffTypeList);
  const { data: salutationListData } = useSelector<any, CommonSelectorType>((state) => state.salutationList);

  return (
    <form className={classNames("TeamMemberForm", className)} style={style} onSubmit={onSubmit}>
      <div className="row g-3">
        <div className="col-6 col-lg-2">
          <SelectGroup label="Salutation" options={salutationListData || []} required />
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
          <SelectGroup label="Access Role (Role Type)" options={roleTypeListData || []} required />
        </div>
        <div className="col col-lg-6">
          <SelectGroup label="Position (Staff Type)" options={staffTypeListData || []} required />
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
