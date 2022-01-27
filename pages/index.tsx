import type { NextPage } from "next";
import { PageLayout } from "../components";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to E360</h1>
          <p className={styles.description}>
            <i className="bi bi-triangle-half"></i> Get started with E360 Case Management System.
          </p>
        </main>
      </div>
    </PageLayout>
  );
};

export default Home;
