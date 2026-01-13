// import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/sanity.image";
import type { BlogPostProps } from "@/types/blogs";
import { PortableTextToPlain } from "@/helpers";
import { DynamicLink } from "@/components";
import "./BlogPost.css";

export default async function BlogPost({ post }: BlogPostProps) {
  const postImageUrl = post.coverImage ? urlFor(post.coverImage) : null;
  const postAuthorUrl = post.author?.picture ? urlFor(post.author?.picture) : null;
  return (
    <div className="max-w-container-xs mx-auto min-h-screen p-8 flex flex-col gap-4">
      <div>
        <DynamicLink href="/blogs" className="hover:border-b">← Back to posts</DynamicLink>
      </div>
      <div className="blog">
        <div className="blog-header">
          <h1 className="blog-title">{post.title}</h1>
          <div className="blog-author">
            {post.author?.picture && postAuthorUrl && (
              <div className="blog-author-image">
                <Image
                  src={postAuthorUrl}
                  alt={post.author?.name}
                  width={40}
                  height={40}
                />
              </div>
            )}
            <span className="blog-author-name">{post.author?.name}</span>
          </div>
          <p className="blog-date">
            {/* {new Date(post.date).toLocaleDateString()} */}

            {new Intl.DateTimeFormat('el-GR', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        }).format(new Date(post.date))}  
          </p>
        </div>

        {postImageUrl && (
          <Image
            className="blog-image"
            src={postImageUrl}
            alt={post.title}
            width={550}
            height={310}
          />
        )}

        <div className="blog-info">
          {post.content && <PortableTextToPlain value={post.content} />}
        </div>
      </div>
    </div>
  );
}
