import classNames from "classnames";
import type { NextPage } from "next";
import { PageLayout, ManageLayout, InputGroup } from "@components";
import styles from "@styles/Company.module.scss";
import buttonStyles from "@styles/Button.module.scss";
import { MouseEventHandler, useState } from "react";
import Image from "next/image";

interface Company {
  companyName: string;
  brn: string;
  tax: string;
}

const dummyCompany: Company = {
  companyName: "ABC Law Firm Pte Ltd.",
  brn: "123456789A",
  tax: "123456789A",
};

const CompanyPage: NextPage = () => {
  const [company] = useState<Company | null | undefined>(dummyCompany);

  const goSave: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    alert("Feature coming soon...");
  };

  return (
    <PageLayout>
      <ManageLayout title={company?.companyName}>
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col-lg-6 px-3 px-md-4 px-lg-5">
            <form>
              <InputGroup
                className="pb-4"
                defaultValue={company?.companyName}
                label="Company Name"
                inputType="text"
                required
              />
              <InputGroup
                className="pb-4"
                defaultValue={company?.brn}
                label="Business Registration No."
                inputType="text"
                required
              />
              <InputGroup
                className="pb-4"
                defaultValue={company?.tax}
                label="Tax Registration No."
                inputType="text"
                required
              />
              <button className={classNames(buttonStyles.Button_primary, "py-2")} onClick={goSave}>
                Save
              </button>
            </form>
          </div>
        </div>
      </ManageLayout>
    </PageLayout>
  );
};

export default CompanyPage;
