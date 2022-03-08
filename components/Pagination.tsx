import classNames from "classnames";
import { Dispatch, FC, SetStateAction, useState } from "react";
import styles from "@styles/Pagination.module.scss";

interface PaginationProps {
  className?: string | undefined;
  totalPage?: number;
  pageSize?: number;
  currentPage?: number;
  setCurrentPage?: Dispatch<SetStateAction<number>>;
}

export const Pagination: FC<PaginationProps> = ({
  className,
  totalPage = 1,
  pageSize = 10,
  currentPage = 1,
  setCurrentPage,
}) => {
  return (
    <div className={classNames("d-flex align-items-center px-3 py-2 g-12", className)}>
      <button className={classNames("p-0 text-primary", styles.button)}>
        <i className="bi bi-chevron-bar-left"></i>
      </button>
      <button className={classNames("p-0 text-primary", styles.button)}>
        <i className="bi bi-chevron-left"></i>
      </button>
      <span
        className={classNames(
          "p-1 text-light bg-primary d-flex align-items-center justify-content-center text-center fs-12 fw-500",
          styles.number
        )}
      >
        {currentPage}
      </span>
      <span className="fs-14 text-sh-gray">of</span>
      <span
        className={classNames(
          "p-1 text-light bg-primary d-flex align-items-center justify-content-center text-center fs-12 fw-500",
          styles.number
        )}
      >
        {totalPage}
      </span>
      <button className={classNames("p-0 text-primary", styles.button)}>
        <i className="bi bi-chevron-right"></i>
      </button>
      <button className={classNames("p-0 text-primary", styles.button)}>
        <i className="bi bi-chevron-bar-right"></i>
      </button>
    </div>
  );
};
