'use client';
import Error from 'next/error';
export default function NotFoundLayout({ children }: { children: React.ReactNode;}) {
  return (
    <>
      <Error statusCode={404} />
      {children}
    </>
  );
}