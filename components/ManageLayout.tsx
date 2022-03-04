import classNames from "classnames";
import styles from "@styles/ManageLayout.module.scss";
import { FC } from "react";
import { manageMenus } from "content/menus";
import Link from "next/link";
import { useRouter } from "next/router";

export const ManageLayout: FC = ({ children }) => {
  const router = useRouter();

  return (
    <section className={styles.ManageLayout}>
      <div className="row justify-content-center">
        <div className="col-md-4 col-lg-3 d-none d-md-block">
          <ul className={classNames(styles.leftMenu, "m-0 p-0 px-lg-3")}>
            {manageMenus.map((el) => (
              <li key={el.text} className="list-unstyled m-0 p-0">
                <Link href={el.href}>
                  <a
                    className={classNames(
                      styles.link,
                      "d-block m-0 px-2 px-lg-3 py-3 text-decoration-none",
                      router.pathname === el.href && styles.linkSelected
                    )}
                  >
                    {el.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-7 col-lg-8">{children}</div>
      </div>
    </section>
  );
};
