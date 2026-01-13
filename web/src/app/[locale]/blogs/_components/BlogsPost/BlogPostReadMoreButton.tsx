// components/BlogsPost/BlogsPostReadMoreButton.tsx
interface BlogPostReadMoreButtonProps {
    className?: string;
}  
const BlogPostReadMoreButton = ({ className = "" }: BlogPostReadMoreButtonProps) => {
    return (
      <div className={`read-more-wrapper ${className}`}>
        <div>Read full article</div>
        <div className="read-more-svg">
          <svg className="fill-custom-foreground" width="35" height="35">
            <use xlinkHref="#icon-c-arrow-right" />
          </svg>
        </div>
      </div>
    );
};
export default BlogPostReadMoreButton