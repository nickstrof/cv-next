import { FC } from "react";
import { getSocialsData } from "@/lib/sanity/sanity.queries";
import { getTranslations } from "next-intl/server";
import { BannerFooter, Socials, Copyrights, DynamicLink } from "@/components";
import './Footer.css'
interface FooterProps {
  hasBannerFooter: boolean;
}
const Footer: FC<FooterProps> = async ({ hasBannerFooter }) => {
  const t = await getTranslations("Footer");
  const socialsData = await getSocialsData();
  return (
    <>
      {hasBannerFooter && (<BannerFooter />)}
      <footer className="border-t border-custom-foreground">
        <div className="container max-w-container-lg mx-auto px-4 py-8 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
          <Socials socialsData={socialsData} />
          <DynamicLink className="hover:border-b" href="/terms-of-service">{t('terms')}</DynamicLink>
          <Copyrights />
        </div>
      </footer>
    </>
  );
};
export default Footer;      