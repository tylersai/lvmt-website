import classNames from "classnames";
import type { NextPage } from "next";
import Image from "next/image";
import { FC } from "react";
import { Button, PageLayout } from "../components";
import styles from "../styles/Home.module.scss";

const imgPref = "/home";

interface HomeSectionProps {
  className?: string | undefined;
  sectionTitle: string;
  sectionDesc: string;
}

const HomeSection: FC<HomeSectionProps> = ({ className, children, sectionTitle, sectionDesc }) => (
  <section className={classNames(className, "py-4 py-md-5")}>
    <h3 className={classNames(styles.sectionTitle, "d-block text-center text-primary")}>{sectionTitle}</h3>
    <p className={classNames(styles.sectionDesc, "d-block text-center text-sh-dark")}>{sectionDesc}</p>
    {children}
  </section>
);

interface FeatureCardProps {
  className?: string | undefined;
  titleClassName?: string | undefined;
  descClassName?: string | undefined;
  cardImgSrc: string;
  cardTitle: string;
  cardDesc: string;
}

const FeatureCard: FC<FeatureCardProps> = ({
  className,
  titleClassName,
  descClassName,
  cardImgSrc,
  cardTitle,
  cardDesc,
}) => (
  <div
    className={classNames(
      styles.featureCard,
      className,
      "col-10 col-sm-8 col-md-4 col-lg-3 p-4 pt-5 mx-3 my-4 d-flex flex-column align-items-center"
    )}
  >
    <Image src={imgPref + cardImgSrc} width={150} height={150} alt="feature icon" />
    <h4 className={classNames(titleClassName || "text-sh-dark", "text-center")}>{cardTitle}</h4>
    <p className={classNames(descClassName || "text-sh-gray", "text-center")}>{cardDesc}</p>
  </div>
);

const Home: NextPage = () => {
  return (
    <PageLayout>
      <section className="row flex-row-reverse justify-content-center align-items-stretch">
        <div className="col-md-5 py-5 d-flex flex-column justify-content-center align-items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.illustration} src="/design-illustration.svg" alt="E360 Illustration" />
        </div>
        <div className="col-md-5 py-5 d-flex flex-column justify-content-center align-items-start">
          <h1 className={classNames("text-primary", styles.heroTitle)}>
            Case Management <br />
            made easier.
          </h1>
          <p className={classNames("text-sh-gray", styles.heroDesc)}>
            Introducing <strong>E360</strong>, a case management software system for faster productivity and better
            managed legal records for professional lawyers and law firms.
          </p>
          <Button component="a" href="/join-now" icon="arrow-right">
            Join Now
          </Button>
        </div>
      </section>
      <HomeSection sectionTitle="features" sectionDesc="E360 provides a wide range of features and functions">
        <div className="row justify-content-evenly align-items-stretch">
          <FeatureCard
            cardImgSrc="/feat-client-img.png"
            cardTitle="Client"
            titleClassName="text-cyan-500"
            cardDesc="Create and manage your clients. Record client information either as a person or a company to contact, send
              out invoices."
          />
          <FeatureCard
            cardImgSrc="/feat-case-img.png"
            cardTitle="Case"
            titleClassName="text-indigo-400"
            cardDesc="Create and manage your client’s legal cases. Key-in your work as time entry and keep track of expenses under each case."
          />
          <FeatureCard
            cardImgSrc="/feat-lawyer-img.png"
            cardTitle="Lawyer"
            titleClassName="text-pink-400"
            cardDesc="Create lawyer profiles with your team and manage all your lawyers in a single place. Assign different roles to each lawyer."
          />
        </div>
      </HomeSection>
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
