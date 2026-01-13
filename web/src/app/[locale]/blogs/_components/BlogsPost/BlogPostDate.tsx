// components/BlogsPost/BlogDate.tsx
interface BlogPostDateProps {
    date: string;
    className?: string;
}
const BlogPostDate = ({ date, className = "" }: BlogPostDateProps) => {
  const formattedDate = new Intl.DateTimeFormat('el-GR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date(date));

  return <span className={className}>{formattedDate}</span>;
};
export default BlogPostDate