import type { NextPage } from "next";
import { Button, PageLayout } from "../components";
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
          <div className="d-flex" style={{ gap: "8px" }}>
            <Button>primary</Button>
            <Button color="secondary">secondary</Button>
            <Button color="default">default</Button>
          </div>
        </main>
      </div>
    </PageLayout>
  );
};

export default Home;
