import classNames from "classnames";
import type { NextPage } from "next";
import { PageLayout, ManageLayout, Button, Pagination, ModalWrapper } from "@components";
import { formatMoney, getInitials } from "@lib/functions";
import styles from "@styles/TeamMembers.module.scss";
import { MouseEventHandler, useCallback, useState } from "react";
import useTeamMembers from "@hooks/api/useTeamMembers";
import { TeamMemberForm } from "components/forms";
import { RootState } from "redux/store";
import { CommonSelectorType } from "types/redux";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";

interface Member {
  sid: string;
  firstName: string;
  lastName: string;
  email: string;
  initials: string;
  position: string;
  accessRole: "Manager" | "Lawyer" | "Staff" | "Admin" | "Manager/Admin";
  rate: number;
  profile?: string | null;
}

const dummyMembers: Member[] = [
  {
    sid: "1",
    firstName: "John",
    lastName: "Doe (You)",
    email: "johndoe@lvmt.co",
    initials: "JD",
    position: "Product Owner",
    accessRole: "Manager/Admin",
    rate: 1200,
    profile: "/members/johndoe.png",
  },
  {
    sid: "2",
    firstName: "James",
    lastName: "Taylor",
    email: "jamestaylor@lvmt.co",
    initials: "JT",
    position: "Associate",
    accessRole: "Lawyer",
    rate: 600,
    profile: "/members/jamestaylor.png",
  },
  {
    sid: "3",
    firstName: "Lily",
    lastName: "Brynn",
    email: "lilybrynn@lvmt.co",
    initials: "LB",
    position: "Of Counsel",
    accessRole: "Staff",
    rate: 100,
    profile: "/members/lilybrynn.png",
  },
  {
    sid: "4",
    firstName: "Amy",
    lastName: "Jane",
    email: "amyjane@lvmt.co",
    initials: "AJ",
    position: "Secretary",
    accessRole: "Lawyer",
    rate: 150,
    // profile: "/members/amyjane.png",
    profile: null,
  },
  {
    sid: "5",
    firstName: "Joe",
    lastName: "Tan",
    email: "joetan@lvmt.co",
    initials: "JT",
    position: "Associate",
    accessRole: "Lawyer",
    rate: 200,
    profile: "/members/joetan.png",
  },
  {
    sid: "6",
    firstName: "Jake",
    lastName: "Combs",
    email: "jakecombs@lvmt.co",
    initials: "JC",
    position: "Senior Associate",
    accessRole: "Lawyer",
    rate: 400,
    // profile: "/members/jakecombs.png",
  },
  {
    sid: "7",
    firstName: "Winddy",
    lastName: "Sane",
    email: "winddy@lvmt.co",
    initials: "WS",
    position: "Director",
    accessRole: "Manager",
    rate: 1300,
    profile: "/members/winddy.png",
  },
];

const TeamMembersPage: NextPage = () => {
  const { data: session } = useSession();
  const { data: roleTypeList } = useSelector<RootState, CommonSelectorType>((state) => state.roleTypeList);
  const { data: staffTypeList } = useSelector<RootState, CommonSelectorType>((state) => state.staffTypeList);

  const { teamMemberPage, loading, error } = useTeamMembers();
  const [teamMembers] = useState<Member[]>(dummyMembers);
  const [openNewMember, setOpenNewMember] = useState<boolean>(false);

  const openNewMemberModal = useCallback<MouseEventHandler<HTMLButtonElement>>(
    () => setOpenNewMember(true),
    [setOpenNewMember]
  );

  const closeNewMemberModal = () => setOpenNewMember(false);

  return (
    <PageLayout>
      <ManageLayout title="Manage Team Members">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-end">
              <Button className="py-2" icon="plus-lg" iconPlacement="left" variant="naked" onClick={openNewMemberModal}>
                New Member
              </Button>
            </div>
            <div className="overflow-auto pb-3">
              <table className="mt-3 mt-md-4">
                <thead>
                  <tr>
                    <th></th>
                    <th>Full Name</th>
                    <th>Initials</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Access Role</th>
                    <th className="text-end">Rate ($/hr)</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {teamMemberPage &&
                    teamMemberPage.content &&
                    teamMemberPage.content.length > 0 &&
                    teamMemberPage.content.map((el) => (
                      <tr key={el.personSid}>
                        <td>
                          <div
                            className={classNames(
                              "d-flex justify-content-center align-items-center text-center text-sh-gray-light",
                              styles.profileWrapper,
                              !el.profile && "bg-secondary"
                            )}
                          >
                            {el.profile ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={el.profile} alt={el.initials || getInitials(el.firstName, el?.lastName)} />
                            ) : (
                              <span className="text-light fs-10">
                                {el.initials || getInitials(el.firstName, el?.lastName)}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="text-nowrap">
                          {el.firstName} {el.lastName}
                          {session?.user?.email === el.email && " (You)"}
                        </td>
                        <td>{el.initials || getInitials(el.firstName, el?.lastName)}</td>
                        <td className="text-nowrap">{el.email}</td>
                        <td className="text-nowrap">
                          {session?.user?.email === el.email
                            ? "Owner"
                            : staffTypeList?.find((st) => st.id === el.staffType)?.value}
                        </td>
                        <td className="text-nowrap">{roleTypeList?.find((rt) => rt.id === el.roleType)?.value}</td>
                        <td className="text-end text-nowrap">{formatMoney(el.globalHourlyRate || 0)}</td>
                        <td>
                          <div className="d-flex align-items-center" style={{ gap: "0.5rem" }}>
                            <button className="p-0 text-primary bg-transparent border-0">
                              <i className="bi bi-pencil-fill"></i>
                            </button>
                            <button className="p-0 text-danger bg-transparent border-0">
                              <i className="bi bi-trash-fill"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-center pt-1 pb-4">
              <Pagination />
            </div>
            {/* <hr />
            <pre>{JSON.stringify({ teamMemberPage, loading, error }, null, 4)}</pre> */}
          </div>
        </div>
      </ManageLayout>
      <ModalWrapper open={openNewMember} setOpen={setOpenNewMember} title="Add New Member">
        <TeamMemberForm onSubmitSuccess={closeNewMemberModal} />
      </ModalWrapper>
    </PageLayout>
  );
};

export default TeamMembersPage;
