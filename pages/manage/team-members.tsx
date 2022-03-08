import classNames from "classnames";
import type { NextPage } from "next";
import { PageLayout, ManageLayout, Button } from "@components";
import { formatMoney } from "@lib/functions";
import styles from "@styles/TeamMembers.module.scss";
import buttonStyles from "@styles/Button.module.scss";
import { MouseEventHandler, useState } from "react";

interface Member {
  sid: string;
  firstName: string;
  lastName: string;
  email: string;
  initials: string;
  position: string;
  accessRole: "Manager" | "Lawyer" | "Staff" | "Admin" | "Manager/Admin";
  rate: number;
  profile: string;
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
    profile: "/profile.png",
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
    profile: "/members/amyjane.png",
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
    profile: "/members/jakecombs.png",
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
  const [teamMembers] = useState<Member[]>(dummyMembers);

  const goSave: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    alert("Feature coming soon...");
  };

  return (
    <PageLayout>
      <ManageLayout title="Manage Team Members">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-end">
              <Button className="py-2" icon="plus-lg" iconPlacement="left">
                New Member
              </Button>
            </div>
            <table className="mt-3 mt-md-4">
              <thead>
                <tr>
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
                {teamMembers &&
                  teamMembers.length > 0 &&
                  teamMembers.map((el) => (
                    <tr key={el.sid}>
                      <td>
                        {el.firstName} {el.lastName}
                      </td>
                      <td>{el.initials}</td>
                      <td>{el.email}</td>
                      <td>{el.position}</td>
                      <td>{el.accessRole}</td>
                      <td className="text-end">{formatMoney(el.rate)}</td>
                      <td></td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </ManageLayout>
    </PageLayout>
  );
};

export default TeamMembersPage;
