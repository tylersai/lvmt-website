import { InputGroup, ManageLayout, PageLayout } from "@components";
import useCompany from "@hooks/api/useCompany";
import buttonStyles from "@styles/Button.module.scss";
import classNames from "classnames";
import type { NextPage } from "next";
import { MouseEventHandler, useEffect, useState } from "react";
import { Company } from "types/model";

const CompanyPage: NextPage = () => {
  const { companyPage, saveCompany } = useCompany();
  const [company, setCompany] = useState<Company>(companyPage);

  useEffect(() => {
    setCompany(companyPage);
  }, [companyPage]);

  const goSave: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log("save company", company);
    saveCompany(company);
  };

  function _onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  }

  return (
    <PageLayout>
      <ManageLayout title={company?.companyName}>
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col-lg-6 px-3 px-md-4 px-lg-5">
            <form>
              <InputGroup
                name="companyName"
                className="pb-4"
                value={company?.companyName}
                label="Company Name"
                inputType="text"
                required
                onChange={_onChange}
              />
              <InputGroup
                name="businessRegistrationNumber"
                className="pb-4"
                value={company?.businessRegistrationNumber}
                label="Business Registration No."
                inputType="text"
                required
                onChange={_onChange}
              />
              <InputGroup
                name="taxRegistered"
                className="pb-4"
                value={company?.taxRegistered}
                label="Tax Registration No."
                inputType="text"
                required
                onChange={_onChange}
              />
              <button
                className={classNames(buttonStyles.Button_primary, "py-2")}
                onClick={goSave}
              >
                Save
              </button>
            </form>
            {/* <pre>{JSON.stringify({ company }, null, 4)}</pre> */}
          </div>
        </div>
      </ManageLayout>
    </PageLayout>
  );
};

export default CompanyPage;
