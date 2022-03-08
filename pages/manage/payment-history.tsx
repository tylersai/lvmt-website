import classNames from "classnames";
import type { NextPage } from "next";
import { PageLayout, ManageLayout, Button, Pagination } from "@components";
import styles from "@styles/PaymentHistory.module.scss";

const PaymentHistoryPage: NextPage = () => {
  return (
    <PageLayout>
      <ManageLayout title="Payment History">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center px-3">
              <p className="my-0 fs-14 fw-500 me-3 text-sh-gray">Subscription Status :</p>
              <span className={classNames(styles.status, "text-light text-center bg-primary py-1 px-2 d-inline-block")}>
                Active
              </span>
            </div>
            <div className="d-flex align-items-center mt-3 px-3">
              <p className="my-0 fs-14 fw-500 me-3 text-sh-gray">Next Billing Date :</p>
              <span className="fs-14 fw-600 text-sh-gray">Feb 23, 2022</span>
            </div>
          </div>
        </div>
      </ManageLayout>
    </PageLayout>
  );
};

export default PaymentHistoryPage;
