import classNames from "classnames";
import { InputGroup, SelectGroup } from "@components";
import { CSSProperties, FC, FormEventHandler } from "react";
import buttonStyles from "@styles/Button.module.scss";
import { useSelector } from "react-redux";
import { CommonSelectorType } from "types/redux";
import { RootState } from "redux/store";

interface TeamMemberFormProps {
  className?: string;
  style?: CSSProperties;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const TeamMemberForm: FC<TeamMemberFormProps> = ({ onSubmit = (e) => e.preventDefault(), className, style }) => {
  const { data: roleTypeListData } = useSelector<RootState, CommonSelectorType>((state) => state.roleTypeList);
  const { data: staffTypeListData } = useSelector<RootState, CommonSelectorType>((state) => state.staffTypeList);
  const { data: salutationListData } = useSelector<RootState, CommonSelectorType>((state) => state.salutationList);

  return (
    <form className={classNames("TeamMemberForm", className)} style={style} onSubmit={onSubmit}>
      <div className="row g-3">
        <div className="col-6 col-lg-2">
          <SelectGroup name="salutation" label="Salutation" options={salutationListData || []} required />
        </div>
        <div className="col col-lg-5">
          <InputGroup name="firstName" defaultValue="" label="First Name" inputType="text" required />
        </div>
        <div className="col col-lg-5">
          <InputGroup name="lastName" defaultValue="" label="Last Name" inputType="text" required />
        </div>
        <div className="col-6 col-lg-2">
          <InputGroup name="initials" defaultValue="" label="Initials" inputType="text" required />
        </div>
        <div className="col-6 col-lg-5">
          <InputGroup name="phone" defaultValue="" label="Phone" inputType="text" />
        </div>
        <div className="col-6 col-lg-5">
          <InputGroup
            name="globalHourlyRate"
            defaultValue={0.0}
            min={0}
            label="Global Hourly Rate"
            inputType="number"
            required
          />
        </div>
        <div className="col col-lg-6">
          <SelectGroup name="roleType" label="Access Role (Role Type)" options={roleTypeListData || []} required />
        </div>
        <div className="col col-lg-6">
          <SelectGroup name="staffType" label="Position (Staff Type)" options={staffTypeListData || []} required />
        </div>
        <div className="col col-lg-6">
          <InputGroup name="email" defaultValue="" label="Email" inputType="email" required />
        </div>
        <div className="col col-lg-6">
          <InputGroup name="password" defaultValue="" label="Password" inputType="password" required />
        </div>
        <div className="col-12 d-flex justify-content-end">
          <input type="submit" value="Create" className={classNames(buttonStyles.Button_primary, "py-2 mt-1")} />
        </div>
      </div>
    </form>
  );
};
