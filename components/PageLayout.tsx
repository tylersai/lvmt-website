import { FC } from "react";
import { CommonHead, Navbar, Footer } from "./";

interface PageLayoutProp {
  CommonHeadComp?: React.ReactElement;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export const PageLayout: FC<PageLayoutProp> = ({
  CommonHeadComp = <CommonHead />,
  children,
  hideHeader,
  hideFooter,
}) => {
  return (
    <div className="PageLayout">
      {CommonHeadComp}
      {!hideHeader && <Navbar />}
      <main className="container-fluid vh-100">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};
