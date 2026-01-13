import Image from "next/image";
import { DynamicLink } from "@/components";
import { BlogsListProps } from "@/types/blogs";
import { urlFor } from "@/lib/sanity/sanity.image";
import { useLocale } from 'next-intl';

const HomeBlog = ({ posts }: BlogsListProps)  => {
    const locale = useLocale();
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat(locale === 'el' ? 'el-GR' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        }).format(date);
    };
    return (
        <div className="blogs-list relative">
            {posts.map((blog) => {
                const postImageUrl = blog?.coverImage ? urlFor(blog.coverImage) : null;
                return (
                    <DynamicLink key={blog.slug} href={`/blogs/${blog.slug}`}>
                        <div className="blogs-blog">
                            <div className="media">
                                {postImageUrl && (
                                    <Image
                                        src={postImageUrl}
                                        alt={blog.title}
                                        width={550}
                                        height={310}
                                    />
                                )}
                            </div>
                            <div className="info">
                                <h3>{blog.title}</h3>
                                <span>{formatDate(blog.date)}</span>
                            </div>
                        </div>
                    </DynamicLink>
                );
            })}
        </div>
    )
}
export default HomeBlog