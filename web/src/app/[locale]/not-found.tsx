import Image from "next/image";
import {useTranslations} from 'next-intl';
import { DynamicLink, MainTemplate, PageWrapper } from "@/components";
import { imagePaths } from '@/constants/images';
export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');
  return (
    <MainTemplate hasBannerHeader={false} hasBannerFooter={false}>
      <PageWrapper>
        <div className="not-found-page">
         <div className="wrapper-img">
              <Image
                  width={300}
                  height={300}
                  src={imagePaths.generic.placeholder}
                  alt="NotFound"
                  priority
                  loading="eager"
                  decoding="async"
                  placeholder="empty"
              />
          </div>  
          <div className="info">
            <h1>{t('title')}</h1>
            <p>{t('description')}</p>
            <DynamicLink className="not-found-link" href="/">{t('link')}</DynamicLink>
          </div>    
        </div>
      </PageWrapper>
    </MainTemplate>
  );
}