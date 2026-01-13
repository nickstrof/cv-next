// types/blogs.ts
export type SanityImage = {
  asset: {
    _ref: string;
    _type: 'reference';
    url?: string;
  };
};
export type Author = {
  name: string;
  picture?: SanityImage;
};
export type Category = {
  slug?: string;
  title: string;
};
export type BlogPostData = {
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: SanityImage;
  author?: Author;
  date: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[];           // ή PortableTextBlock[]

  articleCategories?: Category[];
};

export type BlogsListProps = {
  posts: BlogPostData[];
  language?: string;
};
export type BlogPostProps = {
  post: BlogPostData;
};