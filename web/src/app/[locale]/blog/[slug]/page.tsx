import { MainTemplate, PageWrapper } from '@/components';
import { TestPost } from '../_components';

import { getTranslations } from "next-intl/server";
import { getTestPostBySlug } from "@/lib/sanity/sanity.queries";
import { notFound } from 'next/navigation';


interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}
export default async function TestPostPage({ params }: PageProps) {  
  const { locale, slug } = await params;
  const post = await getTestPostBySlug(slug, locale);
  const t = await getTranslations("BlogPage");
  
  // if (!post) {
  //   notFound();
  // }  
  if (!post) return notFound();
  return (
    <MainTemplate hasBannerHeader={false} hasBannerFooter={false}>
      <PageWrapper
        title={t("title")}
        subtitle={t("subtitle")}
        className="wrapper__blogpage"
      >
        <TestPost post={post} />
      </PageWrapper>
  </MainTemplate>
  );
}
