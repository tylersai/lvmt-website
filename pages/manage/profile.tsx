import classNames from "classnames";
import type { NextPage } from "next";
import { PageLayout, ManageLayout, InputGroup } from "@components";
import styles from "@styles/Profile.module.scss";
import buttonStyles from "@styles/Button.module.scss";
import { MouseEventHandler, useState } from "react";
import Image from "next/image";

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  initials: string;
  profileUrl: string;
}

const dummyUser: Profile = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com",
  initials: "JD",
  profileUrl: "/profile.png",
};

const ProfilePage: NextPage = () => {
  const [currentUser] = useState<Profile | null | undefined>(dummyUser);

  const goSave: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    alert("Feature coming soon...");
  };

  return (
    <PageLayout>
      <ManageLayout>
        <h2 className="mb-4 mb-md-5">Welcome, {currentUser?.firstName}!</h2>
        <div className="row justify-content-center flex-row-reverse">
          <div className="col-lg-6 d-flex flex-column align-items-center pb-4">
            <div className={classNames(styles.profileFrame, "d-flex p-2 p-md-3")}>
              <Image src={currentUser?.profileUrl || "/profile.png"} alt="Profile" width={152} height={152} />
            </div>
            <button className={classNames(styles.changeBtn, "p-0 mt-2 mt-md-3 fs-14 fw-500")}>
              <i className="bi bi-camera-fill me-2"></i>Change Profile
            </button>
          </div>
          <div className="col-lg-6 px-3 px-md-4 px-lg-5">
            <form>
              <InputGroup
                className="pb-4"
                inputClassName="bg-sh-gray-lightest"
                defaultValue={currentUser?.email}
                label="Email"
                inputType="email"
                required
                disabled
              />
              <InputGroup
                className="pb-4"
                defaultValue={currentUser?.firstName}
                label="First Name"
                inputType="text"
                required
              />
              <InputGroup
                className="pb-4"
                defaultValue={currentUser?.lastName}
                label="Last Name"
                inputType="text"
                required
              />
              <InputGroup
                className="pb-4"
                defaultValue={currentUser?.initials}
                label="Initials"
                inputType="text"
                required
              />
              <button className={classNames(buttonStyles.Button_primary, "py-2")} onClick={goSave}>
                Save
              </button>
            </form>
          </div>
        </div>
      </ManageLayout>
    </PageLayout>
  );
};

export default ProfilePage;
