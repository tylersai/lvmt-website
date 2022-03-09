import classNames from "classnames";
import type { NextPage } from "next";
import { PageLayout, ManageLayout, Button, Pagination } from "@components";
import styles from "@styles/PaymentHistory.module.scss";
import { useState } from "react";

interface Payment {
  sid: string;
  startDate: string;
  endDate: string;
  paymentMethod: "PayPal" | "Debit/Credit";
  invoiceNo?: string;
  status: "completed" | "refunded" | "cancelled";
  initiatedOn?: string;
  paidOn?: string;
}

const paymentHistories: Payment[] = [
  {
    sid: "1",
    startDate: "Jan 23, 2022",
    endDate: "Feb 23, 2022",
    paymentMethod: "Debit/Credit",
    invoiceNo: "INV20220001",
    status: "completed",
  },
  {
    sid: "2",
    startDate: "Dec 15, 2021",
    endDate: "Jan 15, 2022",
    paymentMethod: "PayPal",
    invoiceNo: "INV20210004",
    status: "refunded",
  },
  {
    sid: "3",
    startDate: "Dec 14, 2022",
    endDate: "Jan 14, 2022",
    paymentMethod: "Debit/Credit",
    status: "cancelled",
  },
  {
    sid: "4",
    startDate: "Nov 13, 2021",
    endDate: "Dec 13, 2021",
    paymentMethod: "PayPal",
    invoiceNo: "INV20210002",
    status: "completed",
  },
  {
    sid: "5",
    startDate: "Jul 03, 2021",
    endDate: "Oct 03, 2021",
    paymentMethod: "Debit/Credit",
    invoiceNo: "INV20210001",
    status: "completed",
  },
];

const PaymentHistoryPage: NextPage = () => {
  const [histories, setHistories] = useState<Payment[]>(paymentHistories);
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
            <div className="overflow-auto pb-3">
              <table className="mt-3 mt-md-4">
                <thead>
                  <tr>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Payment Method</th>
                    <th>Invoice No.</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {histories &&
                    histories.length > 0 &&
                    histories.map((el) => (
                      <tr key={el.sid}>
                        <td className="text-nowrap">{el.startDate}</td>
                        <td className="text-nowrap">{el.endDate}</td>
                        <td className="text-nowrap">{el.paymentMethod}</td>
                        <td className="text-nowrap fs-13 fw-500 letter-spacing-1">{el.invoiceNo || "-"}</td>
                        <td
                          className={classNames(
                            "text-nowrap text-capitalize",
                            el.status === "completed"
                              ? "text-primary"
                              : el.status === "cancelled"
                              ? "text-pink-400"
                              : ""
                          )}
                        >
                          {el.status}
                        </td>
                        <td>
                          {el.status !== "cancelled" && (
                            <div className="d-flex align-items-center" style={{ gap: "0.5rem" }}>
                              <button className="p-0 text-primary bg-transparent border-0">
                                <i className="bi bi-download"></i>
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-center pt-1 pb-5">
              <Pagination />
            </div>
            <h4 className="my-0">Renewal</h4>
            <div className="pb-5 pt-3 px-3">
              <p className="fs-14">
                Renewal policies goes here.... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
              <Button className="py-2">Renew Subscription</Button>
            </div>
            <h4 className="my-0">Cancellation</h4>
            <div className="pb-4 pt-3 px-3">
              <p className="fs-14">
                Cancellation policies goes here.... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
              <Button color="secondary" className="py-2">
                Cancel Subscription
              </Button>
            </div>
          </div>
        </div>
      </ManageLayout>
    </PageLayout>
  );
};

export default PaymentHistoryPage;
