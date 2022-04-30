/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import React, { FC, MouseEventHandler, useState } from "react";
import styles from "@styles/ProfilePicture.module.scss";
import { getInitialsFromFullName } from "@lib/functions";
import { manageMenus } from "content/menus";
import Link from "next/link";
import { useRouter } from "next/router";

interface ProfilePictureProps {
  className?: string;
  popupClassName?: string;
  profileUrl?: string | null;
  name?: string | null;
  hidePopup?: boolean;
}

export const ProfilePicture: FC<ProfilePictureProps> = ({ className, profileUrl, name, hidePopup, popupClassName }) => {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);

  const togglePopup: MouseEventHandler<HTMLDivElement> = () => setOpen((prev) => !prev);

  // const preventPopup: MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation();

  const initials = getInitialsFromFullName(name);
  return (
    <div className="d-flex position-relative">
      <div
        className={classNames(
          className,
          styles.ProfilePicture,
          "d-inline-flex justify-content-center align-items-center text-light fs-12 fw-400"
        )}
        onClick={togglePopup}
      >
        {profileUrl ? <img src={profileUrl} alt={initials || ""} /> : <span>{initials}</span>}
      </div>
      {!hidePopup && open && (
        <ul
          className={classNames(
            "position-absolute overflow-hidden bg-white m-0 px-0 py-2",
            styles.popupWrapper,
            popupClassName
          )}
        >
          {[
            ...manageMenus,
            { href: `/logout?redirect=${encodeURIComponent(window.location.href)}`, text: "Logout" },
          ].map((el) => (
            <li key={el.text} className="list-unstyled m-0 p-0" onClick={() => setOpen(false)}>
              <Link href={el.href}>
                <a
                  className={classNames(
                    styles.link,
                    "d-block px-3 py-2 text-decoration-none text-nowrap fw-500 fs-14",
                    router.pathname === el.href && styles.linkSelected
                  )}
                >
                  {el.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
