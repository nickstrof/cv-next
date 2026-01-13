'use client'

import React, { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
const LanguageToggle = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Navigation');
  const locale = useLocale();

  const handleLocaleChange = () => {
    const newLocale = locale === 'en' ? 'el' : 'en';
    const currentPath = pathname || '/';
    const pathWithoutLocale = currentPath.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale || ''}`;
    
    startTransition(() => {
      router.push(newPath);
    });
  };
  
  return (
    <button
      onClick={handleLocaleChange}
      disabled={isPending}
      className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer p-2 rounded-lg"
      aria-label={t('language')}
    >
      {/* {locale === 'en' ? 'ΕΛ' : 'EN'} */}
      <div className='flex items-center hover:text-primary transition-colors'><svg className="md:mr-0 mr-3 fill-custom-foreground" width="30" height="30"><use xlinkHref="#icon-c-earth" /></svg> <span className='md:hidden'>{t('language')}</span></div>
    </button>
  )
}
export default LanguageToggle 