import { notFound } from 'next/navigation';
import { getTranslations } from "next-intl/server";
import { getBlogPostBySlug } from '@/lib/sanity/sanity.queries';
import { MainTemplate, PageWrapper } from '@/components';
import { BlogPost } from './_components';

type Props = {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
};

export default async function LocaleBlogPage({ params }: Props) {
  const { slug } = await params;
  const t = await getTranslations("BlogPage");
  const post = await getBlogPostBySlug(slug);
  if (!post) return notFound();
  return (
    <MainTemplate hasBannerHeader={false} hasBannerFooter={false}>
      <PageWrapper
        title={t("title")}
        subtitle={t("subtitle")}
        className="wrapper__blogpage"
      >
        <BlogPost post={post} />
      </PageWrapper>
    </MainTemplate>
  );
}
