'use client';
import Image from "next/image";
import { DynamicLink, SectionWrapper } from "@/components";
import { BlogsListProps } from "@/types/blogs";
import { urlFor } from "@/lib/sanity/sanity.image";
import { useLocale } from 'next-intl';
import { imagePaths } from '@/constants/images';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import './Test.css';
const Test = ({ posts }: BlogsListProps) => {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryFromUrl);

  // Sync με URL parameters
  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);


  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale === 'el' ? 'el-GR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const allCategories = Array.from(
    new Set(
      posts.flatMap(post =>
        Array.isArray(post.articleCategories)
          ? post.articleCategories.map(cat => cat.title).filter(Boolean)
          : []
      )
    )
  );

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts;
    
    return posts.filter(post => 
      Array.isArray(post.articleCategories) && 
      post.articleCategories.some(cat => cat.title === selectedCategory)
    );
  }, [posts, selectedCategory]);

  const [featuredPost, ...otherPosts] = filteredPosts || [];

  const handleCategoryClick = (category: string) => {
    const newCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newCategory);
    
    // Update URL without page reload
    const url = new URL(window.location.href);
    if (newCategory) {
      url.searchParams.set('category', newCategory);
    } else {
      url.searchParams.delete('category');
    }
    window.history.pushState({}, '', url.toString());
  };

  return (
    <SectionWrapper>
      <div className="blogs">
        <div className="categories">
            <span className={`category-pill ${!selectedCategory ? 'active' : ''}`} onClick={() => handleCategoryClick('')} style={{ cursor: 'pointer' }}>{locale === 'el' ? 'Όλα' : 'All'}</span>
          
            {allCategories.map(category => (
              <span key={category} className={`category-pill ${selectedCategory === category ? 'active' : ''}`} onClick={() => handleCategoryClick(category)} style={{ cursor: 'pointer' }}>{category}</span>
            ))}
        </div>

        {filteredPosts.length === 0 && selectedCategory && (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              {locale === 'el' 
                ? `Δεν βρέθηκαν άρθρα για την κατηγορία "${selectedCategory}"` 
                : `No articles found for category "${selectedCategory}"`
              }
            </p>
          </div>
        )}

        {featuredPost && (
          <div className="featured-wrapper">
            <div className="featured-inner">
              <DynamicLink className="featured-post-link" href={`/test/${featuredPost.slug}`}>
                <div className="featured-post" key={featuredPost.slug}>
                  <div className="media">
                    <Image
                      src={featuredPost.coverImage ? urlFor(featuredPost.coverImage) || imagePaths.generic.placeholder : imagePaths.generic.placeholder}
                      alt={featuredPost.title}
                      width={800}
                      height={400}
                    />
                  </div>
                  
                  <div className="info">
                    <div className="info-header">
                      <h2>{featuredPost.title}</h2>
                      <span>{formatDate(featuredPost.date)}</span>
                      <p>{featuredPost.excerpt}</p>
                    </div>
                    <div className={'read-more-wrapper'}>
                      <div>Read full article</div>
                      <div className="read-more-svg">
                        <svg className="fill-custom-foreground" width="35" height="35"><use xlinkHref="#icon-c-arrow-right" /></svg>
                      </div>
                    </div>            
                  </div>
                </div>
              </DynamicLink>
            </div>
          </div>
        )}

        <div className="blogs-list">
          {otherPosts.map((blog) => {
            return (
              <DynamicLink key={blog.slug} href={`/test/${blog.slug}`}>
                <div className="blogs-blog">
                  <div className="media">
                    <Image
                      src={blog.coverImage ? urlFor(blog.coverImage) || imagePaths.generic.placeholder : imagePaths.generic.placeholder}
                      alt={blog.title}
                      width={400}
                      height={250}
                    />
                  </div>
                  <div className="info">
                    <h3>{blog.title}</h3>
                    <span>{formatDate(blog.date)}</span>
                  </div>
                </div>
              </DynamicLink>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
export default Test;