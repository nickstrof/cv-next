'use client';
import Image from "next/image";
import { DynamicLink, SectionWrapper } from "@/components";
import { BlogsListProps } from "@/types/blogs";
import { urlFor } from "@/lib/sanity/sanity.image";
import { useLocale } from 'next-intl';
import { imagePaths } from '@/constants/images';

import { useTranslations } from "next-intl";


import './HomeArticles.css'

const HomeArticles = ({ posts }: BlogsListProps) => {
    const locale = useLocale();
    const t = useTranslations('HomePage');
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat(locale === 'el' ? 'el-GR' : 'en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
        }).format(date);
    };

  return (
    <SectionWrapper
        title={t('blog.title')}
        subtitle={t('blog.subtitle')}
        link={"/blogs"}
        textLink={t('blog.textLink')}
        // className={"bg-custom-background-second"}       
    >
      <div className="homepage-articles">        
        <div className="articles-grid">
          {posts?.map((article) => (
            <DynamicLink key={article.slug} href={`/test/${article.slug}`}>
              <div className="article-card">
                <div className="article-image">
                  <Image
                    src={article.coverImage ? urlFor(article.coverImage) || imagePaths.generic.placeholder : imagePaths.generic.placeholder}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="image"
                  />
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <span className="date">{formatDate(article.date)}</span>
                    {article.author && (
                      <span className="author">{article.author.name}</span>
                    )}
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  {article.excerpt && (
                    <p className="article-excerpt">{article.excerpt}</p>
                  )}
                  <div className="read-more">
                    <span>{locale === 'el' ? 'Διαβάστε περισσότερα' : 'Read more'}</span>
                    <svg className="arrow-icon" width="20" height="20">
                      <use xlinkHref="#icon-c-arrow-right" />
                    </svg>
                  </div>
                </div>
              </div>
            </DynamicLink>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HomeArticles;