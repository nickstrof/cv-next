import type { Metadata } from "next";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;  
  return {
    title: 'Test Page - Nick Strofyllas',
    description: locale === 'el' 
      ? 'Σελίδα δοκιμής για λειτουργικότητα πολλαπλών γλωσσών'
      : 'Test page for multilingual functionality',
    openGraph: {
      title: locale === 'el' ? 'Σελίδα Δοκιμής' : 'Test Page',
      description: locale === 'el' 
        ? 'Σελίδα δοκιμής για λειτουργικότητα πολλαπλών γλωσσών'
        : 'Test page for multilingual functionality',
      url: `https://example.com/${locale}/test`,
      images: [
        {
          url: "https://example.com/images/og.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' ? 'Σελίδα Δοκιμής' : 'Test Page',
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@example",
      creator: "@example",
    },
    alternates: {
      canonical: `https://example.com/${locale}/test`,
      languages: {
        en: "https://example.com/en/test",
        el: "https://example.com/el/test",
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