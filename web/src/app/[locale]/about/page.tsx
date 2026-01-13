import { MainTemplate } from '@/components';
import { AboutPage } from '@/components';
export default async function LocaleAboutPage() {  
  return (
    <MainTemplate hasBannerHeader={false} hasBannerFooter={false}>
      <AboutPage />
    </MainTemplate>
  );
}