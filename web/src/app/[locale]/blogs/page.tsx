import { MainTemplate, BlogsPage } from '@/components';
export default async function LocaleBlogsPage() {  
  return (
    <MainTemplate hasBannerHeader={false} hasBannerFooter={false}>
      <BlogsPage />
    </MainTemplate>
  );
}