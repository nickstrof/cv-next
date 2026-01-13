// components/BlogsPost/BlogPostContainer.tsx
interface BlogPostContainerProps {
    children: React.ReactNode;
    className?: string;
}  
const BlogPostContainer = ({ children, className = "" }: BlogPostContainerProps) => {
    return (
      <div className={`blogs ${className}`}>
        {children}
      </div>
    );
};
export default BlogPostContainer