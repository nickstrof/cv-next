import { useTranslations } from 'next-intl'
import { DynamicLink } from '@/components'

const HelloInfo = () => {
  const t = useTranslations('AboutPage');
  return (
    <div className="about-me">
        <p className='first'>{t('hello.intro.paragraph1')}</p>
        <p>{t('hello.intro.paragraph2')}</p>
        
        <DynamicLink href="/stack">{t('hello.cta')}</DynamicLink>

        {/* image_url: "https://dummyimage.com/250/543869/000000&text=JavascriptLoad", */}
    </div>    
  )
}
export default HelloInfo