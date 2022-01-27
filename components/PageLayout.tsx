import { FC } from "react";
import { CommonHead } from "./";

interface PageLayoutProp {
  CommonHeadComp?: React.ReactElement;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export const PageLayout: FC<PageLayoutProp> = ({ CommonHeadComp = <CommonHead />, children }) => {
  return (
    <div className="PageLayout">
      {CommonHeadComp}
      {children}
    </div>
  );
};
