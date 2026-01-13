'use client'
import { useState, useEffect, FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { LanguageToggle, BannerHeader, DynamicLink } from "@/components";
import './Header.css'

// Types
interface NavbarProps {
  hasBannerHeader: boolean;
}
interface MenuItem {
  label: string;
  href: string;
}
const Navbar: FC<NavbarProps> = ({ hasBannerHeader }) => {
  // Hooks
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  // Derived state
  const locale = pathname.split("/")[1] || "en";

  // Helper functions
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const MENU_ITEMS: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Stack", href: "/stack" },
    { label: "About", href: "/about" },
  ];

  // Effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`custom-header ${isScrolled ? 'fixed' : ''} ${
        isScrolled
          ? "bg-custom-background/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-[0_0_10px_color-mix(in_srgb,_#000_20%,_transparent)]"
          : "bg-custom-background/90"
      }`}>
        <div className="container max-w-container-lg mx-auto pad-x h-full">
            {/* Desktop manu */}
            <div className="flex items-center justify-between h-10 md:h-16">
              <DynamicLink className="text-xl font-bold text-primary" href="/" ariaLabel="Go to homepage">
                <svg className="fill-custom-foreground" width="150" height="40" aria-hidden="true" focusable="false"><use xlinkHref="#icon-c-logo" /></svg>
              </DynamicLink>
              <div className="hidden md:flex items-center space-x-4">
                {MENU_ITEMS.map((item, index) => {
                  const fullHref = item.href === "/" ? `/${locale}` : `/${locale}${item.href}`;
                  const isActive = pathname === fullHref;
                  return (
                    <Link key={index} href={item.href} className={`menu-item${isActive ? ' is-active' : ''}`}>{item.label}</Link>
                  )
                })}
                <LanguageToggle />
                <button className="p-2 rounded-lg hover:bg-gray-100 text-white hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={theme === 'dark'}>
                  {
                    theme === 'dark' ? (
                      <svg className="fill-custom-foreground" width="30" height="30" aria-hidden="true" focusable="false"><use xlinkHref="#icon-c-sun" /></svg>
                    ) : (
                      <svg className="fill-custom-foreground" width="30" height="30" aria-hidden="true" focusable="false"><use xlinkHref="#icon-c-moon" /></svg>
                    )
                  }
                </button>

              </div>

              {/* Mobile menu buttons */}
                <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer" onClick={toggleMobileMenu} aria-label="Menu" >
                  {
                    isMobileMenuOpen ? (
                      <svg className="fill-custom-foreground" width="30" height="30"><use xlinkHref="#icon-c-close-light" /></svg>
                    ) : (
                      <svg className="fill-custom-foreground" width="30" height="30"><use xlinkHref="#icon-c-menu" /></svg>
                    )
                  }
                </button>
            </div>

            {/* Mobile menu */}
            {
              isMobileMenuOpen && (
                <div className="md:hidden mb-4">
                  <div className="py-4 space-y-4">
                    {MENU_ITEMS.map((item, index) => {
                      const fullHref = item.href === "/" ? `/${locale}` : `/${locale}${item.href}`;
                      const isActive = pathname === fullHref;
                      return (
                        <div key={index} onClick={toggleMobileMenu}>
                          <DynamicLink  href={item.href} className={`block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors${isActive ? ' font-black text-primary' : ''}`}>{item.label}</DynamicLink>
                        </div>
                      )
                    })}
                  </div>
                  <button className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary transition-colors cursor-pointer" onClick={toggleTheme}>
                    {
                      theme === 'dark' ? (
                        <><svg className="mr-3 fill-custom-foreground" width="30" height="30"><use xlinkHref="#icon-c-sun" /></svg> Light Mode</>
                      ) : (
                        <><svg className="mr-3 fill-custom-foreground" width="30" height="30"><use xlinkHref="#icon-c-moon" /></svg> Dark Mode</>
                      )
                    }
                  </button>
                  <LanguageToggle />
                </div>
              )
            }
        </div>
      </nav>
      {hasBannerHeader && (<BannerHeader />)}
    </>
  )
}
export default Navbar
