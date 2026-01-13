import React, { FC } from "react";
import { Footer, Header, Icons } from "@/components";
interface MainTemplateProps {
  children: React.ReactNode;
  hasBannerHeader: boolean;
  hasBannerFooter: boolean;
}
const MainTemplate: FC<MainTemplateProps> = ({ children, hasBannerHeader, hasBannerFooter }) => {
  return (
    <>
      <Icons />
      <Header hasBannerHeader={hasBannerHeader} />
      {children}
      <Footer hasBannerFooter={hasBannerFooter} />
    </>
  );
};
export default MainTemplate;