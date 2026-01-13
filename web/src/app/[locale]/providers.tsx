'use client';
import { ThemeProvider } from '@/context/ThemeContext';
import { NextIntlClientProvider } from 'next-intl';

import { ErrorBoundary } from '@/components';

type ProvidersProps = {
  children: React.ReactNode;
  messages: Record<string, unknown>;
  locale: string;
};
export function Providers({ children, messages, locale }: ProvidersProps) {
  return (

  <ErrorBoundary>
  
      <NextIntlClientProvider 
        messages={messages} 
        locale={locale} 
        timeZone="Europe/Athens"
        // now={new Date()}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </NextIntlClientProvider>
  
    </ErrorBoundary>
  
  );
}