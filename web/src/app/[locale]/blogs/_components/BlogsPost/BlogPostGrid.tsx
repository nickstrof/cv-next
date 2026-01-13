// components/BlogsPost/BlogPostGrid.tsx
import BlogPostCard from "./BlogPostCard";
import { SanityImage } from "@/types/blogs";

interface BlogPostGridProps {
  posts: Array<{
    slug: string;
    title: string;
    date: string;
    coverImage?: SanityImage;
  }>;
  className?: string;
}
const BlogPostGrid = ({ posts, className = "" }: BlogPostGridProps) => {
  if (posts.length === 0) return null;
  
  return (
    <div className={`blogs-list ${className}`}>
      {posts.map((blog) => (
        <BlogPostCard 
          key={blog.slug} 
          blog={blog} 
        />
      ))}
    </div>
  );
};
export default BlogPostGrid