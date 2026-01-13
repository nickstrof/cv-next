import type { Metadata } from "next";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;  
  return {
    title: 'Blog - Nick Strofyllas',
    description: locale === 'el' 
      ? ''
      : '',
    openGraph: {
      title: locale === 'el' ? '' : '',
      description: locale === 'el' 
        ? ''
        : '',
      url: ``,
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: locale === 'el' ? '' : '',
        },
      ],
    },
    alternates: {
      canonical: ``,
      languages: {
        en: "",
        el: "",
      },
    },
  };
}
export default async function TestLayout({
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