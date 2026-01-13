import { PageWrapper } from "@/components";
import { BlogsPost } from "@/app/[locale]/blogs/_components";

import { getTranslations } from "next-intl/server";
import { getBlogData } from "@/lib/sanity/sanity.queries";

export default async function BlogsPage() {
  const postsData = await getBlogData();
  const t = await getTranslations("BlogsPage");
  return (
    <PageWrapper
      title={t('title')}
      subtitle={t('subtitle')}
      className="wrapper__blogspage"
    >
      <BlogsPost posts={postsData}  />
    </PageWrapper>
  );
}