import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;  
  return {
    title: 'Blog',
    description: locale === 'el' 
      ? ''
      : '',
    openGraph: {
      title: locale === 'el' ? '' : '',
      description: locale === 'el' 
        ? ''
        : '',
      url: `https://example.com/${locale}/about`,
      images: [
        {
          url: "https://example.com/images/og.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' ? '' : '',
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@example",
      creator: "@example",
    },
    alternates: {
      canonical: `https://example.com/${locale}/about`,
      languages: {
        en: "https://example.com/en/about",
        el: "https://example.com/el/about",
      },
    },
  };
}
export default async function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}