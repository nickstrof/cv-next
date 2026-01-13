import { PageWrapper } from "@/components/templates";
import { Hero, HomeArticles, 
  // HomeBlogSection, 
  HomeStackSection } from "@/app/[locale]/_components";
import { getLatestTestData } from "@/lib/sanity/sanity.queries";

interface HomePageProps {
  locale: string;
}
export default async function HomePage({ locale }: HomePageProps) {
  const latestArticles = await getLatestTestData(locale); 
  return (
    <PageWrapper className='wrapper__homepage pt-10 md:pt-16'>
       <Hero />


       {latestArticles && latestArticles.length > 0 && (
          <HomeArticles posts={latestArticles} />
        )}  

       {/* <HomeBlogSection /> */}
       <HomeStackSection />
    </PageWrapper>
  );
}



// import { PageWrapper } from '@/components';
// import { Hero, HomeBlogSection, HomeStackSection } from '@/app/[locale]/_components';
// export default async function HomePage() {
//   return (
//     <PageWrapper className='wrapper__homepage pt-10 md:pt-16'>
//       <Hero />
//       <HomeBlogSection />
//       <HomeStackSection />
//     </PageWrapper>
//   );
// }