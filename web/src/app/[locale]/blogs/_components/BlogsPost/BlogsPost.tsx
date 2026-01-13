'use client';
import { BlogsListProps } from "@/types/blogs";
import { SectionWrapper } from "@/components";
import BlogPostContainer from "./BlogPostContainer";
import BlogPostFeatured from "./BlogPostFeatured";
import BlogPostGrid from "./BlogPostGrid";
import "./BlogsPost.css";
const BlogsPost = ({ posts }: BlogsListProps) => {
  const [featuredPost, ...otherPosts] = posts;

  return (
    <SectionWrapper>
      <BlogPostContainer>
        {featuredPost && <BlogPostFeatured post={featuredPost} />}
        <BlogPostGrid posts={otherPosts} />
      </BlogPostContainer>
    </SectionWrapper>
  );
};
export default BlogsPost;