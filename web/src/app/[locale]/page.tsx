
import { MainTemplate } from "@/components";
import HomePage from "@/components/pages/HomePage/HomePage";
import { getLocale } from 'next-intl/server';
export default async function RootPage() {
  const locale = await getLocale();
  return (
     <MainTemplate hasBannerHeader={false} hasBannerFooter={true}>
      <HomePage locale={locale} />
     </MainTemplate>
  );
}