// components/BlogsPost/BlogPostCardInfo.tsx
import BlogPostDate from "./BlogPostDate";

interface BlogPostCardInfoProps {
  title: string;
  date: string;
  className?: string;
}
const BlogPostCardInfo = ({ title, date, className = "" }: BlogPostCardInfoProps) => {
  return (
    <div className={`info ${className}`}>
      <h3>{title}</h3>
      <BlogPostDate date={date} />
    </div>
  );
};
export default BlogPostCardInfo