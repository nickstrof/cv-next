'use client';
import Image from "next/image";
import { DynamicLink, SectionWrapper } from "@/components";
import { BlogsListProps } from "@/types/blogs";
import { urlFor } from "@/lib/sanity/sanity.image";
// import { useLocale } from 'next-intl';
import { imagePaths } from '@/constants/images';
import { useTranslations } from "next-intl";

const HomeArticles = ({ posts }: BlogsListProps) => {
    // const locale = useLocale();
    const t = useTranslations('HomePage');
    // const formatDate = (dateString: string) => {
    //     const date = new Date(dateString);
    //     return new Intl.DateTimeFormat(locale === 'el' ? 'el-GR' : 'en-US', {
    //         year: 'numeric',
    //         month: 'long',
    //         day: 'numeric'
    //     }).format(date);
    // };
  return (
    <div id="latest-blog">
        <SectionWrapper
            title={t('blog.title')}
            subtitle={t('blog.subtitle')}
            link={"/blog"}
            textLink={t('blog.textLink')}
            // className={"bg-custom-background-second"}   
        >
            <div className="blogs-list relative">
                {posts?.map((article) => {
                    // const postImageUrl = article?.coverImage ? urlFor(article.coverImage) : null;
                    return (
                        <DynamicLink key={article.slug} href={`/blog/${article.slug}`}>
                            <div className="blogs-blog">
                                <div className="media">
                                    {/* {postImageUrl && ( */}
                                        <Image
                                            src={article.coverImage ? urlFor(article.coverImage) || imagePaths.generic.placeholder : imagePaths.generic.placeholder}

                                            // src={postImageUrl}
                                            alt={article.title}
                                            width={550}
                                            height={310}
                                        />
                                    {/* )} */}
                                </div>
                                <div className="info">
                                    <h3>{article.title}</h3>
                                    {/* <span>{formatDate(article.date)}</span> */}
                                </div>
                            </div>
                        </DynamicLink>
                    );
                })}
            </div>
        </SectionWrapper>
    </div>
  );
};
export default HomeArticles;