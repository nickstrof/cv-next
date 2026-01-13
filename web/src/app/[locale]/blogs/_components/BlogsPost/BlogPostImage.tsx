// components/BlogsPost/BlogImage.tsx
'use client';
import Image from "next/image";
import { urlFor } from "@/lib/sanity/sanity.image";
import { SanityImage } from "@/types/blogs";
interface BlogPostImageProps {
  coverImage?: SanityImage;
  title: string;
  width: number;
  height: number;
  className?: string;
  variant?: 'featured' | 'card';
}
const BlogPostImage = ({ 
  coverImage, 
  title, 
  width, 
  height, 
  className = "", 
  variant = 'card' 
}: BlogPostImageProps) => {
  const imageUrl = coverImage ? urlFor(coverImage) : null;
   
  if (!imageUrl) return null;
  
  return (
    <div className={`media ${className}`}>
      <Image
        src={imageUrl}
        alt={title}
        width={width}
        height={height}
        className={variant === 'featured' ? 'featured-image' : 'card-image'}
      />
    </div>
  );
};
export default BlogPostImage