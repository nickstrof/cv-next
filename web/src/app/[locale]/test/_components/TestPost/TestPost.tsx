'use client';
import Image from "next/image";
import { DynamicLink, SectionWrapper } from "@/components";
import { urlFor } from "@/lib/sanity/sanity.image";
import { useLocale } from 'next-intl';
import { imagePaths } from '@/constants/images';
import { PortableTextToPlain } from "@/helpers";
import type { PortableTextBlock } from 'sanity';
import './TestPost.css';
interface TestPostProps {
  post: {
    title: string;
    slug: string;
    excerpt: string;
    coverImage?: { asset: { _ref: string } };
    author?: {
      name: string;
      picture?: { asset: { _ref: string } };
    };
    date: string;
    content: string | unknown[] | null;
    // Υποστήριξη για πολλαπλές κατηγορίες
    articleCategories?: {
      title: string;
      slug?: string;
    }[];
    // Κρατάμε και το παλιό για backward compatibility
    category?: {
      title: string;
      slug?: string;
    };
  };
}
const TestPost = ({ post }: TestPostProps) => {
  const locale = useLocale();
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale === 'el' ? 'el-GR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  const postImageUrl = post?.coverImage ? urlFor(post.coverImage) : null;
  const categories = [
    ...(post.articleCategories || []),
    ...(post.category ? [post.category] : [])
  ];

  
  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <DynamicLink 
            href="/test" 
            className="inline-flex items-center text-primary dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            {/* <svg className="fill-primary" width="20" height="20"><use xlinkHref="#icon-c-arrow-left" /></svg> */}
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
            {locale === 'el' ? 'Πίσω στα Άρθρα ' : 'Back to Blogs'}
          </DynamicLink>
        </div>
        <div className="blog">
          <article>
            <div className="p-2">
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1> 
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <span className="text-sm">{formatDate(post.date)}</span>
                  {post.author && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="text-sm">{post.author.name}</span>
                    </>
                  )}
                </div>
                <div>
                  {categories.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {categories.map((category, index) => (
                            <DynamicLink
                              key={`${category.title}-${index}`}
                              href={`/test?category=${encodeURIComponent(category.title)}`}
                              className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors cursor-pointer"
                            >
                              {category.title}
                            </DynamicLink>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
                {post.excerpt && (
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
              </header>
            </div>
            <div className="w-full h-96 relative blog-image overflow-hidden">
              <Image
                src={postImageUrl || imagePaths.generic.placeholder}
                alt={post.title}
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 blog-info">
              {post.content && Array.isArray(post.content) && (
                <div className="blog-info">
                  <PortableTextToPlain value={post.content as PortableTextBlock[]} />
                </div>
              )}
            </div>
          </article>
          {post.author && (
            <div className="mt-8 bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center">
                {post.author.picture && (
                  <Image
                    src={urlFor(post.author.picture) || ''}
                    alt={post.author.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {post.author.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {locale === 'el' ? 'Συγγραφέας' : 'Author'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};
export default TestPost; 