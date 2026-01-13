import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;  
  return {
    title: `${slug} - Nick Strofyllas`,
    description: locale === 'el' 
      ? `${slug}`
      : `${slug}`,
    openGraph: {
      title: locale === 'el' ? `${slug}` : `post: ${slug}`,
      description: locale === 'el' 
        ? `${slug}`
        : `${slug}`,
      url: ``,
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: locale === 'el' ? `Δοκιμή άρθρου: ${slug}` : `Test post: ${slug}`,
        },
      ],
    },
    alternates: {
      canonical: ``,
      languages: {
        en: ``,
        el: ``,
      },
    },
  };
}

export default async function TestPostLayout({
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