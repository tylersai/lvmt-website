import type { NextPage } from "next";
import { Button, PageLayout } from "../components";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <h1 className={styles.title}>Welcome to E360</h1>
        <p className={styles.description}>
          <i className="bi bi-triangle-half"></i> Get started with E360 Case Management System.
        </p>
        <div className="d-flex" style={{ gap: "8px" }}>
          <Button>primary</Button>
          <Button color="secondary">secondary</Button>
          <Button color="default">default</Button>
        </div>
      </section>
      <section>
        <p className="text-center my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perferendis voluptate quas culpa vel hic
          exercitationem accusantium dignissimos dolorem ullam omnis magni, nulla asperiores eum totam voluptatem
          tenetur unde enim!
        </p>
      </section>
    </PageLayout>
  );
};

export default Home;
