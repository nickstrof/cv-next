import { PageWrapper, Stack } from "@/components";

import { getTranslations } from "next-intl/server";
import { getAllStacksData } from "@/lib/sanity/sanity.queries";
export default async function StackPage() {
  const t = await getTranslations("StackPage");
  const StackData = await getAllStacksData();
  return (
    <PageWrapper
      title={t('title')}
      subtitle={t('subtitle')}
      className="wrapper__stackpage relative"
    >
      <Stack title="Development & Productivity" stackData={StackData} showSearch={true} />
    </PageWrapper>
  );
}