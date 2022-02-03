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
          <Button component="a" href="/join-now" icon="arrow-right">
            Join Now
          </Button>
        </div>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <h1 className={styles.title2}>Welcome to E360</h1>
        <p className={styles.description2}>
          <i className="bi bi-triangle-half"></i> Get started with E360 Case Management System.
        </p>
        <p className="mb-2">Buttons:</p>
        <div className="d-flex" style={{ gap: "8px" }}>
          <Button>primary</Button>
          <Button color="secondary">secondary</Button>
          <Button color="default">default</Button>
        </div>
        <p className="mt-4 mb-2">Buttons with right icon:</p>
        <div className="d-flex" style={{ gap: "8px" }}>
          <Button icon="bookmark-check">primary</Button>
          <Button color="secondary" icon="box-arrow-in-down">
            secondary
          </Button>
          <Button color="default" icon="bell">
            default
          </Button>
        </div>
        <p className="mt-4 mb-2">Buttons with left icon:</p>
        <div className="d-flex" style={{ gap: "8px" }}>
          <Button icon="chevron-right" iconPlacement="left">
            primary
          </Button>
          <Button color="secondary" icon="chevron-double-right" iconPlacement="left">
            secondary
          </Button>
          <Button color="default" icon="brightness-high" iconPlacement="left">
            default
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
