import { MainTemplate, TestPage } from "@/components";
interface PageProps {
  params: Promise<{ locale: string }>;
}
export default async function LocaleTest({ params }: PageProps) {  
  const { locale } = await params;
  return (
    <MainTemplate hasBannerHeader={false} hasBannerFooter={false}>
      <TestPage params={{ lang: locale }} />
    </MainTemplate>
  );
}