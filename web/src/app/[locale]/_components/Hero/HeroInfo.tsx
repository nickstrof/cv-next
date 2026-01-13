'use client';
import { useTranslations } from 'next-intl'
import { DynamicLink, 
    ComponentErrorBoundary 
} from "@/components";
const HeroInfo = () => {
const t = useTranslations('HomePage');
  return (

    <ComponentErrorBoundary componentName="HeroInfo">

      <div className="wrapper-info">
          <div className="inner-info">
              {/* <h2 className="title">{t('hero.intro')}</h2> */}
              <div className="my-wrapper">
                <h2 className="name">{t('hero.name')}</h2>
                <h3 className="title">{t('hero.title')}</h3>
              </div>

              <div className="cta-wrapper">
                  <div className="cta-buttons">
                      <DynamicLink className="cta-button primary" href="/blogs" ariaLabel='Blog'>{t('hero.cta.blog')}</DynamicLink>
                      <DynamicLink className="cta-button secondary" href="/stack" ariaLabel='Stack'>{t('hero.cta.stack')}</DynamicLink>
                  </div>
              </div>
          </div>

          <div className="read-more-wrapper">
              <DynamicLink className="read-more" href="/#latest-blog">
                  <div className="read-more-icon">
                      <span className="wrapper-svg">
                          <svg className="fill-custom-foreground transform rotate-0" width="32" height="32"><use xlinkHref="#icon-c-arrow-r" /></svg>                    
                      </span>
                  </div>
                  <span className="read-more-text">{t('hero.about')}</span>
              </DynamicLink>
          </div>
      </div>

    </ComponentErrorBoundary>
  
    )
}
export default HeroInfo