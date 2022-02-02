import classNames from "classnames";
import type { NextPage } from "next";
import { Button, PageLayout } from "../components";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <section className="row flex-row-reverse justify-content-center align-items-stretch">
        <div className="col-md-5 py-5 d-flex flex-column justify-content-center align-items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.illustration} src="/design-illustration.svg" alt="E360 Illustration" />
        </div>
        <div className="col-md-5 py-5 d-flex flex-column justify-content-center align-items-start">
          <h1 className={classNames("text-primary", styles.title)}>
            Case Management <br />
            made easier.
          </h1>
          <p className={classNames("text-sh-gray", styles.desc)}>
            Introducing <strong>E360</strong>, a case management software system for faster productivity and better
            managed legal records for professional lawyers and law firms.
          </p>
          <Button component="a" href="/join-now">
            Join Now <i className="bi bi-arrow-right"></i>
          </Button>
        </div>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <h1 className={styles.title2}>Welcome to E360</h1>
        <p className={styles.description2}>
          <i className="bi bi-triangle-half"></i> Get started with E360 Case Management System.
        </p>
        <div className="d-flex" style={{ gap: "8px" }}>
          <Button>primary</Button>
          <Button color="secondary">secondary</Button>
          <Button color="default">default</Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
