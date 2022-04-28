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
        "d-inline-flex justify-content-center align-items-center"
      )}
    >
      {profileUrl ? (
        <img src={profileUrl} alt={initials || ""} />
      ) : (
        <span className="text-light fs-12 fw-400">{initials}</span>
      )}
    </div>
  );
};
