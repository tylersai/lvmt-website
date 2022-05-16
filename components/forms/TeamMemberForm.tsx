import classNames from "classnames";
import { InputGroup, SelectGroup } from "@components";
import { ChangeEventHandler, CSSProperties, FC, FormEventHandler, useMemo } from "react";
import buttonStyles from "@styles/Button.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { CommonSelectorType } from "types/redux";
import { RootState } from "redux/store";
import { TeamMemberForm as TeamMemberFormType } from "types/model";
import { TeamMemberFormAT } from "redux/actionTypes";

interface TeamMemberFormProps {
  className?: string;
  style?: CSSProperties;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const TeamMemberForm: FC<TeamMemberFormProps> = ({ onSubmit = (e) => e.preventDefault(), className, style }) => {
  const dispatch = useDispatch();
  const { data: roleTypeListData } = useSelector<RootState, CommonSelectorType>((state) => state.roleTypeList);
  const { data: staffTypeListData } = useSelector<RootState, CommonSelectorType>((state) => state.staffTypeList);
  const { data: salutationListData } = useSelector<RootState, CommonSelectorType>((state) => state.salutationList);

  const teamMember = useSelector<RootState, TeamMemberFormType>((state) => state.teamMemberForm);

  const filteredRoleTypes = useMemo(
    () =>
      roleTypeListData && roleTypeListData.length > 0
        ? roleTypeListData.filter(
            (el) => el.value !== "Company Admin" && el.value !== "Admin/Manager" && el.value !== "Portal Admin"
          )
        : [],
    [roleTypeListData]
  );

  const changeHandler: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (e) =>
    dispatch({ type: TeamMemberFormAT.CHANGE, payload: { [e.target.name]: e.target.value } });

  return (
    <form className={classNames("TeamMemberForm", className)} style={style} onSubmit={onSubmit}>
      <div className="row g-3">
        <div className="col-6 col-lg-2">
          <SelectGroup
            name="salutation"
            label="Salutation"
            options={salutationListData || []}
            required
            value={teamMember.salutation}
            onChange={changeHandler}
          />
        </div>
        <div className="col col-lg-5">
          <InputGroup
            name="firstName"
            label="First Name"
            inputType="text"
            required
            value={teamMember.firstName}
            onChange={changeHandler}
          />
        </div>
        <div className="col col-lg-5">
          <InputGroup
            name="lastName"
            label="Last Name"
            inputType="text"
            required
            value={teamMember.lastName}
            onChange={changeHandler}
          />
        </div>
        <div className="col-6 col-lg-2">
          <InputGroup
            name="initials"
            label="Initials"
            inputType="text"
            required
            value={teamMember.initials}
            onChange={changeHandler}
          />
        </div>
        <div className="col-6 col-lg-5">
          <InputGroup
            name="phone"
            label="Phone"
            inputType="text"
            value={teamMember.phone || ""}
            onChange={changeHandler}
          />
        </div>
        <div className="col-6 col-lg-5">
          <InputGroup
            name="globalHourlyRate"
            min={0}
            label="Global Hourly Rate"
            inputType="number"
            required
            value={teamMember.globalHourlyRate}
            onChange={changeHandler}
          />
        </div>
        <div className="col col-lg-6">
          <SelectGroup
            name="roleType"
            label="Access Role (Role Type)"
            options={filteredRoleTypes}
            required
            value={teamMember.roleType}
            onChange={changeHandler}
          />
        </div>
        <div className="col col-lg-6">
          <SelectGroup
            name="staffType"
            label="Position (Staff Type)"
            options={staffTypeListData || []}
            required
            value={teamMember.staffType}
            onChange={changeHandler}
          />
        </div>
        <div className="col col-lg-6">
          <InputGroup
            name="email"
            label="Email"
            inputType="email"
            required
            value={teamMember.email}
            onChange={changeHandler}
          />
        </div>
        <div className="col col-lg-6">
          <InputGroup
            name="password"
            label="Password"
            inputType="password"
            required
            value={teamMember.password}
            onChange={changeHandler}
          />
        </div>
        <div className="col-12 d-flex justify-content-end">
          <input type="submit" value="Create" className={classNames(buttonStyles.Button_primary, "py-2 mt-1")} />
        </div>
      </div>
    </form>
  );
};
