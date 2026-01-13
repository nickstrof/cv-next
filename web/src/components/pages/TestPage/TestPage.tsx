import { Test } from "@/app/[locale]/blog/_components";
import { PageWrapper } from "@/components";
import { getTranslations } from "next-intl/server";
import { getTestData } from "@/lib/sanity/sanity.queries";
interface PageProps {
  params: { lang: string };
}
export default async function TestPage({ params }: PageProps) {  
  const testData = await getTestData(params.lang)
  const t = await getTranslations("BlogsPage");
  return (
    <PageWrapper
      title={t('title')}
      subtitle={t('subtitle')}
      className="wrapper__blogspage"
    >      
      <Test posts={testData} />
    </PageWrapper>
  );
}