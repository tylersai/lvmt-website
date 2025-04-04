import classNames from "classnames";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { FC, useCallback, useState } from "react";
import { Button, PageLayout, PriceModel, PricingCard, SegmentedButton, SegmentedButtonHandler } from "@components";
import steps, { Step } from "../content/steps";
import styles from "@styles/Home.module.scss";

const imgPref = "/home";

interface HomeSectionProps {
  id?: string | undefined;
  className?: string | undefined;
  sectionTitle: string;
  sectionDesc: string;
}

const HomeSection: FC<HomeSectionProps> = ({ id, className, children, sectionTitle, sectionDesc }) => (
  <section id={id} className={classNames(className, "py-4 py-md-5")}>
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
    <div className="col-11 col-sm-10 col-md-7 bg-white py-3">
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
              "text-blue-300 text-uppercase ps-4 pe-4 pe-sm-5 d-block d-md-none",
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
  const [pricing, setPricing] = useState<PriceModel>("monthly");

  const onPricingChange = useCallback<SegmentedButtonHandler>(
    (data) => {
      setPricing(data.value as PriceModel);
    },
    [setPricing]
  );

  return (
    <PageLayout>
      <section className="row flex-row-reverse justify-content-center align-items-stretch">
        <div className="col-11 col-sm-8 col-md-5 py-5 d-flex flex-column justify-content-center align-items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={classNames("mt-5 mt-md-0 mx-4 mx-sm-5 mx-md-0", styles.illustration)}
            src="/design-illustration.svg"
            alt="E360 Illustration"
          />
        </div>
        <div className="col-11 col-sm-8 col-md-5 pb-5 pt-md-5 d-flex flex-column justify-content-center align-items-start">
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

      <HomeSection
        id="features"
        sectionTitle="features"
        sectionDesc="E360 provides a wide range of features and functions"
      >
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
        <div className="row justify-content-center justify-content-lg-evenly">
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
          <div className="col-md-10 col-lg-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="img-fluid" src={imgPref + "/e360-circle-thin.webp"} alt="E360 Platform" />
          </div>
          <div className="col-11 col-sm-9 col-lg-4 px-2 pt-4 pt-lg-5">
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
            <Button className="float-end mb-4" icon="arrow-right">
              Learn More
            </Button>
          </div>
        </div>
      </HomeSection>

      <HomeSection
        id="how-it-works"
        sectionTitle="how it works"
        sectionDesc="It is fairly easy to get started with E360 platform"
      >
        {steps && steps.map((el) => <Stepper key={el.step} {...el} />)}
      </HomeSection>

      <HomeSection
        id="pricing"
        sectionTitle="pricing"
        sectionDesc="Try E360 free for 7 days and level up your daily productivity"
      >
        <div className="row justify-content-center pt-4">
          <div className="col-11 col-sm-10 col-md-12 col-lg-10 py-5 bg-blue-600 d-flex flex-column align-items-center">
            <p className={classNames(styles.pricingDesc, "text-light text-center px-3")}>
              We offer a wide range of pricing options for individual lawyers or law firm. Contact us for customized
              options.
            </p>
            <p className="text-light text-center fw-500">No Credit Card Required</p>
            <SegmentedButton
              options={[
                { value: "annually", text: "Annually" },
                { value: "monthly", text: "Monthly" },
              ]}
              data={{ value: pricing, text: pricing }}
              onChange={onPricingChange}
            />
          </div>
        </div>
        <div className="row justify-content-center align-items-start g-0">
          <div className="col-11 col-sm-10 col-md-4 col-lg-3 mb-4">
            <PricingCard
              cardTitle="Individual"
              cardDesc="For a single lawyer"
              price={{ monthly: 18, annually: 18 * 12 }}
              priceModel={pricing}
              link={{ href: "/signup", text: "Start Free Trial" }}
              benefits={["Record daily time entry", "Manage clients and cases", "Invoice generation"]}
            />
          </div>
          <div className="col-11 col-sm-10 col-md-4 col-lg-3 mb-4">
            <PricingCard
              cardTitle="Team"
              cardDesc="For a law firm with multiple lawyers"
              price={{ monthly: 38, annually: 38 * 12 }}
              priceModel={pricing}
              link={{ href: "/signup", text: "Get Started" }}
              benefits={[
                "All benefits from Individual Plan +",
                "Up to 3 lawyers",
                "Live chat with client",
                "Staff/Lawyer management",
                "Manager, lawyer and secretary access",
              ]}
              active
            />
          </div>
          <div className="col-11 col-sm-10 col-md-4 col-lg-3 mb-4">
            <PricingCard
              cardTitle="Enterprise"
              cardDesc="Need more customizations?"
              price={{ monthly: "$$", annually: "$$" }}
              priceModel={pricing}
              link={{ href: "/signup", text: "Contact Sales" }}
              benefits={["TEAM benefits plus more", "Full customer support", "High-speed servers"]}
            />
          </div>
        </div>
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
    </PageLayout>
  );
};

export default Home;
