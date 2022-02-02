import type { NextPage } from "next";
import { PageLayout } from "../components";
import styles from "../styles/NotFound.module.scss";

const NotFound: NextPage = () => {
  return (
    <PageLayout>
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className={styles.title}>404</h1>
        <h1 className={styles.title}>Not Found</h1>
      </div>
    </PageLayout>
  );
};

export default NotFound;
