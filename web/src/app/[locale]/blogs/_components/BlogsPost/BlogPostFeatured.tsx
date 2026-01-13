
// components/BlogsPost/BlogPostFeatured.tsx
import { DynamicLink } from "@/components";
import BlogPostImage from "./BlogPostImage";
import BlogPostFeaturedInfo from "./BlogPostFeaturedInfo";
import { SanityImage } from "@/types/blogs";

interface BlogPostFeaturedProps {
  post: {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
    coverImage?: SanityImage;
  };
}
const BlogPostFeatured = ({ post }: BlogPostFeaturedProps) => {
  return (
    <div className="featured-wrapper">
      <div className="featured-inner">
        <DynamicLink className="featured-post-link" href={`/blogs/${post.slug}`}>
          <div className="featured-post">
            <BlogPostImage
              coverImage={post.coverImage}
              title={post.title}
              width={500}
              height={300}
              variant="featured"
            />
            
            <BlogPostFeaturedInfo
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
            />
          </div>
        </DynamicLink>
      </div>
    </div>
  );
};

export default BlogPostFeatured