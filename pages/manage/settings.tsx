import classNames from "classnames";
import type { NextPage } from "next";
import { PageLayout, ManageLayout, InputGroup } from "@components";
import styles from "@styles/Settings.module.scss";
import buttonStyles from "@styles/Button.module.scss";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";

type Mode = "light" | "dark";

interface Setting {
  formDateFmt: string;
  displayDateFmt: string;
  mode: Mode;
  primaryColor: string;
  secondaryColor: string;
}

const dummySetting: Setting = {
  formDateFmt: "dd-MMM-yyyy",
  displayDateFmt: "MMM dd, yyyy",
  mode: "light",
  primaryColor: "#0dcaf0",
  secondaryColor: "#DE5C9D",
};

const SettingsPage: NextPage = () => {
  const [setting, setSetting] = useState<Setting>(dummySetting);

  const changeRadio: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSetting((prev) => ({ ...prev, mode: e.target.value as Mode }));

  const goSave: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    alert("Feature coming soon...");
  };

  return (
    <PageLayout>
      <ManageLayout title="Settings">
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col-lg-6 px-3 px-md-4 px-lg-5">
            <form>
              <InputGroup
                className="pb-4"
                defaultValue={setting.formDateFmt}
                label="Form Date Format"
                inputType="text"
                placeholder="dd-MMM-yyyy"
                required
              />
              <InputGroup
                className="pb-4"
                defaultValue={setting.displayDateFmt}
                label="Display Date Format"
                inputType="text"
                placeholder="MMM dd, yyyy"
                required
              />
              <div className="pb-4">
                <label className="fs-12 fw-500">Mode *</label>
                <div className="d-flex align-items-center py-2 px-3 px-md-4 g-24">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="mode"
                      id="radioLight"
                      value="light"
                      checked={setting.mode === "light"}
                      onChange={changeRadio}
                    />
                    <label className="form-check-label fs-14 text-sh-gray-dark ms-2" htmlFor="radioLight">
                      Light
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="mode"
                      id="radioDark"
                      value="dark"
                      checked={setting.mode === "dark"}
                      onChange={changeRadio}
                    />
                    <label className="form-check-label fs-14 text-sh-gray-dark ms-2" htmlFor="radioDark">
                      Dark
                    </label>
                  </div>
                </div>
              </div>
              <div className="pb-4">
                <label className="fs-12 fw-500">Theme Color *</label>
                <div className="d-flex align-items-center py-2 px-3 px-md-4 g-24">
                  <div className="d-flex align-items-center">
                    <label className="fs-14 text-sh-gray-dark me-2">Primary :</label>
                    <button
                      className={classNames(styles.themeColorBtn, "d-flex align-items-stretch")}
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="flex-grow-1" style={{ backgroundColor: setting.primaryColor }}></span>
                    </button>
                  </div>
                  <div className="d-flex align-items-center">
                    <label className="fs-14 text-sh-gray-dark me-2">Secondary :</label>
                    <button
                      className={classNames(styles.themeColorBtn, "d-flex align-items-stretch")}
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="flex-grow-1" style={{ backgroundColor: setting.secondaryColor }}></span>
                    </button>
                  </div>
                </div>
              </div>
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

export default SettingsPage;
