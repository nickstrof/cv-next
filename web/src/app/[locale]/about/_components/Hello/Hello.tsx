import { SectionWrapper } from '@/components'
import { useTranslations } from 'next-intl'

import HelloInfo from './HelloInfo'
import HelloSocial from './HelloSocial';
import ItemList from '../ItemList/ItemList'
import './Hello.css'

import { socials, experience, education } from '@/data'
        
const HelloSection = () => {
  const t = useTranslations('AboutPage');

  const translatedSocials = socials.map(item => ({
      href: t(item.href),
      icon: t(item.icon),
      label: t(item.label)
  }));
  
  const translatedExperience = experience.map(item => ({
    label: t(item.label),
    description: t(item.description)
  }));
  
  const translatedEducation = education.map(item => ({
    label: t(item.label),
    description: t(item.description)
  }));

  return (
    <>
        <SectionWrapper>
            <div className="hello">
                <HelloInfo />
                <HelloSocial links={translatedSocials} />
            </div>
        </SectionWrapper>

        <SectionWrapper
            title={t('experience.title')}
            subtitle={t('experience.subtitle')}
        >
            <ItemList 
                items={translatedExperience}
            />
        </SectionWrapper>

        <SectionWrapper
            title={t('education.title')}
            // subtitle={t('education.subtitle')}
        >
            <ItemList 
                items={translatedEducation}
            />            
        </SectionWrapper>
    </>
  )
}
export default HelloSection