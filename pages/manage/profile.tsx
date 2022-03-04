import classNames from "classnames";
import type { NextPage } from "next";
import { PageLayout, ManageLayout } from "@components";
import styles from "@styles/Profile.module.scss";

const ProfilePage: NextPage = () => {
  return (
    <PageLayout>
      <ManageLayout></ManageLayout>
    </PageLayout>
  );
};

export default ProfilePage;
