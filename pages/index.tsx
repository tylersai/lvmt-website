import classNames from "classnames";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { FC } from "react";
import { Button, PageLayout } from "../components";
import steps, { Step } from "../content/steps";
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

const FeatureBenefitBox: FC<{ imgSrc: string; text: string }> = ({ imgSrc, text }) => (
  <div className="col-5 col-lg-2 p-3 m-3 d-flex flex-column align-items-center">
    <Image src={imgPref + imgSrc} width={110} height={110} alt="benefit icon" />
    <p className="text-sh-gray text-center mt-3 fw-400">{text}</p>
  </div>
);

const Stepper: FC<Step> = ({ step, desc, items }) => (
  <div className="row justify-content-center">
    <div className="d-none d-md-block col-4 bg-white py-3">
      <h3 className={classNames("text-sh-gray text-end text-uppercase", styles.topOffset1)}>Step</h3>
      <h3 className="text-blue-300 text-end text-uppercase ps-5">{desc}</h3>
    </div>
    <div className="col-10 col-md-7 bg-white py-3">
      <div className="d-flex">
        <div className="d-flex flex-column align-items-center align-self-stretch" style={{ gap: "8px" }}>
          <span className={styles.vLine} style={{ height: "24px" }} />
          <div className={classNames("d-flex justify-content-center align-items-center", styles.stepCircle)}>
            <span className="text-sh-gray">{step}</span>
          </div>
          <span className={classNames("flex-grow-1", styles.vLine)} />
          <span className={styles.vLine} style={{ height: "24px" }} />
          <span className={styles.vLine} style={{ height: "6px" }} />
          <span className={styles.vLine} style={{ height: "6px" }} />
          <span className={styles.vLine} style={{ height: "6px" }} />
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <h4
            className={classNames(
              "text-blue-300 text-uppercase ps-4 pe-5 d-block d-md-none",
              desc.length > 20 ? styles.topOffset2Wrapped : styles.topOffset2
            )}
          >
            {desc}
          </h4>
          <ul className={styles.ulPy}>
            {items.map((el, i) => (
              <li key={i} className="my-2 text-sh-gray">
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      steps: steps,
    },
  };
};

const Home: NextPage<{ steps: Step[] }> = ({ steps }) => {
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
        <p className={classNames(styles.featureQuote, "text-center text-sh-gray px-2 py-4 py-md-5 m-0")}>
          Priorties change... but the challenges remain constant!
        </p>
        <div className="row justify-content-evenly">
          <FeatureBenefitBox imgSrc="/planning-img.png" text="Planning for an Uncertain Future" />
          <FeatureBenefitBox imgSrc="/profit-img.png" text="Increasing Project Profitability" />
          <FeatureBenefitBox imgSrc="/expectation-img.png" text="Delivering beyond Client Expectations" />
          <FeatureBenefitBox imgSrc="/model-img.png" text="Driving Business Model Diversification" />
        </div>
      </HomeSection>

      <HomeSection
        sectionTitle="advantages"
        sectionDesc="E360 also serves as a pratice and invoice management platform"
      >
        <div className="row justify-content-evenly">
          <div className="col-md-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="img-fluid" src={imgPref + "/e360-circle.png"} alt="E360 Platform" />
          </div>
          <div className="col-md-4 px-2 pt-4 pt-lg-5">
            <h5>Practice Management Cloud Advantages</h5>
            <ul className="my-4">
              <li className="text-sh-gray mb-3">
                <strong className="text-blue-400">Seamlessly connect</strong> all processes across Practice, HR, Finance
                and Management Teams
              </li>
              <li className="text-sh-gray mb-3">
                <strong className="text-blue-400">Analyze and prioritize</strong> cases, process processes across
                Practice, HR, Finance and Management Teams
              </li>
              <li className="text-sh-gray mb-3">
                <strong className="text-blue-400">Plan and execute</strong> key resources to key cases under E360
                platform
              </li>
              <li className="text-sh-gray mb-3">
                <strong className="text-blue-400">Cashflow visibility</strong> on invoices and receivables management
              </li>
            </ul>
            <Button className="float-end" icon="arrow-right">
              Learn More
            </Button>
          </div>
        </div>
      </HomeSection>

      <HomeSection sectionTitle="how it works" sectionDesc="It is fairly easy to get started with E360 platform">
        {steps && steps.map((el) => <Stepper key={el.step} {...el} />)}
      </HomeSection>

      <HomeSection sectionTitle="reviews" sectionDesc="Hear what our customers are saying about E360">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-9 col-md-8 col-lg-6">
            <div className="d-flex justify-content-between align-items-end">
              <i className={classNames("bi bi-arrow-left-circle text-primary mb-5", styles.arrowBtn)} role="button"></i>
              <div className="d-flex flex-column align-items-center">
                <div
                  className={classNames("my-4 d-flex justify-content-center align-items-center", styles.reviewPhoto)}
                >
                  <Image src={imgPref + "/person.png"} width="160" height="160" alt="Person" />
                </div>
                <h5 className="text-primary my-3">John Doe</h5>
                <span className="text-sh-gray fw-400">Executive Director</span>
                <span className="text-sh-gray fw-400">ABC Co., Ltd.</span>
              </div>
              <i
                className={classNames("bi bi-arrow-right-circle text-primary mb-5", styles.arrowBtn)}
                role="button"
              ></i>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-4">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="bi bi-star-fill text-primary m-1"></i>
              ))}
            </div>
            <p className="text-center fw-400 my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <div className="d-flex justify-content-center align-items-center my-2">
              <span className={classNames(styles.indicator, styles.indicatorActive)} role="button" />
              <span className={classNames(styles.indicator)} role="button" />
              <span className={classNames(styles.indicator)} role="button" />
            </div>
          </div>
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
