
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
interface DynamicLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  ariaLabel?: string;
}
  export const DynamicLink = ({ 
    href, 
    children, 
    className, 
    target,
    ariaLabel
  }: DynamicLinkProps) => {
    const pathname = usePathname();
    const locale = pathname.split("/")[1] || "en";
    const fullHref = href.startsWith('/') ? `/${locale}${href}` : `/${locale}/${href}`;

  if (!href) return null;
  return (
    <Link className={className} href={fullHref} aria-label={ariaLabel} target={target}>
      {children}
    </Link>
  );
};