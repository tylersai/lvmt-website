import { InputGroup, ManageLayout, PageLayout } from "@components";
import buttonStyles from "@styles/Button.module.scss";
import classNames from "classnames";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { MouseEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editCompanyAction,
  getCompanyAction,
} from "redux/action/companyAction";
import { RootState } from "redux/store";
import { Company } from "types/model";

const CompanyPage: NextPage = () => {
  const dispatch = useDispatch();
  const { data, status } = useSession();
  const { loading, company } = useSelector<RootState, any>(
    (state) => state.company
  );
  const [tempData, setTempData] = useState<Company>(company);

  useEffect(() => {
    dispatch<any>(getCompanyAction(data?.accessToken as string));
    if (!loading) setTempData(company);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.accessToken]);

  const goSave: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    dispatch<any>(editCompanyAction(data?.accessToken as string, tempData));
  };

  function _onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setTempData({ ...tempData, [name]: value });
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
                value={tempData?.companyName}
                label="Company Name"
                inputType="text"
                required
                onChange={_onChange}
              />
              <InputGroup
                name="businessRegistrationNumber"
                className="pb-4"
                value={tempData?.businessRegistrationNumber}
                label="Business Registration No."
                inputType="text"
                required
                onChange={_onChange}
              />
              <InputGroup
                name="taxRegistered"
                className="pb-4"
                value={tempData?.taxRegistered}
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
          </div>
        </div>
      </ManageLayout>
    </PageLayout>
  );
};

export default CompanyPage;
