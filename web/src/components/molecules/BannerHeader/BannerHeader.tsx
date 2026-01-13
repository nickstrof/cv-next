'use client'
import React, { FC } from "react";
import { useTranslations } from "next-intl";
import './BannerHeader.css'
const HeaderFooter: FC = () => {
  const t = useTranslations("BannerHeader");
  return (
    <div className="banner-container banner-bg py-27">
        <h1 className="banner-title">{t("title")}</h1>
    </div>
  );
};
export default HeaderFooter;