import { FC } from "react";
import { CommonHead, Navbar, Footer } from "./";

interface PageLayoutProp {
  CommonHeadComp?: React.ReactElement;
  hideHeader?: boolean;
  hideFooter?: boolean;
  children?: React.ReactNode;
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
      <main className="container-fluid d-flex flex-column align-items-stretch">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};
