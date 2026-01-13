import HomeBlog from "./HomeBlog";
import { getLatestBlogData } from "@/lib/sanity/sanity.queries";
import { getTranslations } from "next-intl/server";
import { SectionWrapper } from "@/components";

  const BlogSection = async () => {
  // const postsData = await getLatestBlogData();
  // const t = await getTranslations("HomePage");
  // Fetch data and translations in parallel
  const [postsData, t] = await Promise.all([
    getLatestBlogData(),
    getTranslations("HomePage")
  ]);
  return (
    <div id="latest-blog">
      <SectionWrapper
        title={t('blog.title')}
        subtitle={t('blog.subtitle')}
        link={"/blogs"}
        textLink={t('blog.textLink')}
        // className={"bg-custom-background-second"}
      >
        <HomeBlog posts={postsData} />
      </SectionWrapper>
    </div>
  );
};
export default BlogSection;
