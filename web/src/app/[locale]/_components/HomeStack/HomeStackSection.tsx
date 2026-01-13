import { getTranslations } from "next-intl/server";
import { getLatestStacksData } from "@/lib/sanity/sanity.queries";
import { SectionWrapper } from "@/components/templates";
import { Stack } from "@/components/molecules";

const StackSection = async () => {
  // Fetch data and translations in parallel
  const [t, stackData] = await Promise.all([
    getTranslations("HomePage"),
    getLatestStacksData()
  ]);
  
  return (
    <div className="">
      <SectionWrapper
        title={t('stack.title')}
        subtitle={t('stack.subtitle')}
        link={"/stack"}
        textLink={t('stack.textLink')}
        className={"relative"}
      >
        <Stack title="Development & Productivity" stackData={stackData} showSearch={false} />
      </SectionWrapper>
    </div>
  );
};
export default StackSection;