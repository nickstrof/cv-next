import { MainTemplate } from '@/components';
import { StackPage } from '@/components';
export default async function LocaleStackPage() {  
  return (
    <MainTemplate hasBannerHeader={false} hasBannerFooter={false}>
      <StackPage />
    </MainTemplate>
  );
}