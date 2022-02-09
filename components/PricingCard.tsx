import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";
import styles from "../styles/PricingCard.module.scss";

export type PriceModel = "annually" | "monthly";

interface PricingCardProps {
  cardTitle: string;
  cardDesc: string;
  price: { annually: number | string; monthly: number | string };
  priceModel?: PriceModel;
  link: { href: string; text: string };
  benefits: string[];
  className?: string | undefined;
  active?: boolean;
}

export const PricingCard: FC<PricingCardProps> = ({
  className,
  active,
  cardTitle,
  cardDesc,
  price,
  priceModel = "monthly",
  link,
  benefits = [],
}) => {
  return (
    <div
      className={classNames(
        "px-4 py-3 d-flex flex-column align-items-stretch",
        styles.PricingCard,
        className,
        active && styles.active
      )}
    >
      <h5 className="text-uppercase mt-2">{cardTitle}</h5>
      <p className="mb-0">{cardDesc}</p>
      <div className="px-3 py-4 letter-spacing-2">
        <strong>
          <span className="text-sh-dark">${price[priceModel]}</span>
          <span className="text-sh-gray-light">/{priceModel === "monthly" ? "mo" : "yr"}</span>
        </strong>
      </div>
      <Link href={link.href}>
        <a>{link.text}</a>
      </Link>
      <ul className="mt-3 mb-2">
        {benefits.map((el, i) => (
          <li key={i} className="my-3">
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
