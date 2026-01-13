import { Hello } from "@/app/[locale]/about/_components";
import { PageWrapper } from "@/components";

import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");
  return (
    <PageWrapper
      title={t('title')}
      subtitle={t('subtitle')}
      className="wrapper__aboutpage"
    >
      <Hello />
    </PageWrapper>
  );
}