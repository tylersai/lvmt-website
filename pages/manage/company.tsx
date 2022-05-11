import { InputGroup, ManageLayout, PageLayout } from "@components";
import useCompany from "@hooks/api/useCompany";
import buttonStyles from "@styles/Button.module.scss";
import classNames from "classnames";
import type { NextPage } from "next";
import { MouseEventHandler, useEffect, useState } from "react";

interface Company {
  companySid: string;
  companyName: string;
  taxRegistered: string;
  businessRegistrationNumber: string;
  themeName: string;
  profilePicture?: string;
  active: boolean;
}

const dummyCompany: Company = {
  companySid: "",
  companyName: "ABC Law Firm Pte Ltd.",
  businessRegistrationNumber: "123456789A",
  taxRegistered: "123456789A",
  active: true,
  themeName: "light",
};

const CompanyPage: NextPage = () => {
  const { companyPage, loading, error } = useCompany();
  const [company, setCompany] = useState<Company | null | undefined>(
    companyPage
  );

  useEffect(() => {
    setCompany(companyPage);
  }, [companyPage]);

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
                defaultValue={company?.businessRegistrationNumber}
                label="Business Registration No."
                inputType="text"
                required
              />
              <InputGroup
                className="pb-4"
                defaultValue={company?.taxRegistered}
                label="Tax Registration No."
                inputType="text"
                required
              />
              <button
                className={classNames(buttonStyles.Button_primary, "py-2")}
                onClick={goSave}
              >
                Save
              </button>
            </form>
            <pre>
              {JSON.stringify({ companyPage, loading, error }, null, 4)}
            </pre>
          </div>
        </div>
      </ManageLayout>
    </PageLayout>
  );
};

export default CompanyPage;
