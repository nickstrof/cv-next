// components/BlogsPost/BlogPostCard.tsx
import { DynamicLink } from "@/components";
import BlogPostImage from "./BlogPostImage";
import BlogPostCardInfo from "./BlogPostCardInfo";
import { SanityImage } from "@/types/blogs";

interface BlogPostCardProps {
  blog: {
    slug: string;
    title: string;
    date: string;
    coverImage?: SanityImage;
  };
  priority?: boolean;
}
const BlogPostCard = ({ blog }: BlogPostCardProps) => {
  return (
    <DynamicLink href={`/blogs/${blog.slug}`}>
      <div className="blogs-blog">
        <BlogPostImage
          coverImage={blog.coverImage}
          title={blog.title}
          width={550}
          height={310}
          variant="card"
        />
        
        <BlogPostCardInfo
          title={blog.title}
          date={blog.date}
        />
      </div>
    </DynamicLink>
  );
};
export default BlogPostCard