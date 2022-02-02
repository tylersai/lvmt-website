import classNames from "classnames";
import Link from "next/link";
import React, { Fragment } from "react";
import styles from "../styles/Footer.module.scss";

interface LinkGroupProps {
  heading: string;
  links: Array<{ text: string; href?: string }>;
}

const companyLinks: LinkGroupProps = {
  heading: "company",
  links: [
    { text: "About", href: "/about" },
    { text: "Contact Us", href: "/contact" },
  ],
};

const resourcesLinks: LinkGroupProps = {
  heading: "resources",
  links: [
    { text: "Pricing", href: "/pricing" },
    { text: "Partnership", href: "/partnership" },
    { text: "Request Demo", href: "/request-demo" },
  ],
};

const addressLinks: LinkGroupProps = {
  heading: "address",
  links: [
    { text: "160 Robinson Rd #13-02 \nSingapore \n068914" },
    { text: "info@lvmt.co", href: "mailto:info@lvmt.co" },
  ],
};

const LinkGroup: React.FC<LinkGroupProps> = ({ heading, links }) => (
  <div className="LinkGroup pt-3 pb-4 d-flex flex-column" style={{ gap: "12px" }}>
    <h5 className="text-blue-400 text-shadow text-uppercase">{heading}</h5>
    {links &&
      links.map((el, i) =>
        el.href ? (
          <Link key={i} href={el.href}>
            <a>{el.text}</a>
          </Link>
        ) : (
          <p className="my-0" key={i}>
            {el.text.split("\n").map((el) => (
              <Fragment key={el}>
                <span>{el}</span>
                <br />
              </Fragment>
            ))}
          </p>
        )
      )}
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer className={classNames("container-fluid bg-sh-gray-lightest pt-5 pb-4", styles.Footer)}>
      <div className="row justify-content-center">
        <div className="col-md-4 px-5 px-md-3 pb-4">
          <h1 className="text-primary text-shadow mb-4">E360</h1>
          <p>A powerful case management software for individual lawyers and law firms.</p>
        </div>
        <div className="col-md-7 px-5 px-md-3">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-lg-3">
              <LinkGroup {...companyLinks} />
            </div>
            <div className="col-sm-4 col-lg-3">
              <LinkGroup {...resourcesLinks} />
            </div>
            <div className="col-sm-4 col-lg-3">
              <LinkGroup {...addressLinks} />
            </div>
          </div>
        </div>
      </div>
      <small className="d-block mt-5 text-center text-sh-gray">
        &copy; 2021 LVMT Private Ltd. All rights reserved.
      </small>
    </footer>
  );
};
