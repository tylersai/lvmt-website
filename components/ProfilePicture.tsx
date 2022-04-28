/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import React, { FC } from "react";
import styles from "@styles/ProfilePicture.module.scss";
import { getInitialsFromFullName } from "@lib/functions";

interface ProfilePictureProps {
  className?: string;
  profileUrl?: string | null;
  name?: string | null;
}

export const ProfilePicture: FC<ProfilePictureProps> = ({ className, profileUrl, name }) => {
  const initials = getInitialsFromFullName(name);
  return (
    <div
      className={classNames(
        className,
        styles.ProfilePicture,
        "d-inline-flex justify-content-center align-items-center text-light fs-12 fw-400"
      )}
    >
      {profileUrl ? <img src={profileUrl} alt={initials || ""} /> : <span>{initials}</span>}
    </div>
  );
};
