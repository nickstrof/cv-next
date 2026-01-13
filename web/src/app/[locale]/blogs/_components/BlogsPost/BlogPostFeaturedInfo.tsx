// components/BlogsPost/BlogPostFeaturedInfo.tsx
import BlogPostDate from "./BlogPostDate";
import BlogPostReadMoreButton from "./BlogPostReadMoreButton";
interface BlogPostFeaturedInfoProps {
  title: string;
  date: string;
  excerpt?: string;
  className?: string;
}
const BlogPostFeaturedInfo = ({ 
  title, 
  date, 
  excerpt, 
  className = "" 
}: BlogPostFeaturedInfoProps) => {
  return (
    <div className={`info ${className}`}>
      <div className="info-header">
        <h2>{title}</h2>
        <BlogPostDate date={date} />
        {excerpt && <p>{excerpt}</p>}
      </div>
      <BlogPostReadMoreButton />
    </div>
  );
};
export default BlogPostFeaturedInfo