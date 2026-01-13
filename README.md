# cv-next

**Framework:** Next.js  
**CMS:** Sanity  
**Styling:** Tailwind CSS v4, Styled Components  
**I18n:** next-intl  
**Language:** TypeScript  
**Architecture:** Atomic Design  

## Overview

**web/** - The Next.js frontend application.
- `src/app/[locale]/*` - Internationalized pages and layouts supporting English (en) and Greek (el).
- `src/components/*` - Component library organized using Atomic Design principles (atoms, molecules, organisms, pages, templates).
- `src/lib/*` - Utility libraries including Sanity client configuration and performance monitoring.
- `src/i18n/*` - Internationalization routing and configuration.
- `src/types/*` - TypeScript type definitions for blogs and stack data.
- `src/data/*` - Static data files for about page (education, experience, socials).
- `src/helpers/*` - Helper utilities like PortableText conversion.
- `src/context/*` - React context providers (ThemeContext).
- `src/styles/*` - Global CSS styles.
- `public/*` - Static assets including images, favicons, and manifest files.
- `messages/*` - Translation files for en and el locales.

**studio/** - Sanity CMS studio for content management.
- `schemaTypes/*` - Sanity schema definitions for blog posts, authors, categories, and stack pages.
- `sanity.config.ts` - Sanity configuration.

**Root** - Monorepo configuration running both web and studio concurrently.

## Running Locally

This application requires Node.js v16.13+.

```bash
git clone https://github.com/nickstrof/cv-next
cd cv-next
npm install
npm run dev
```

This will start both the Next.js development server (web) and Sanity Studio concurrently.

### Individual Commands

**Web (Next.js):**
```bash
cd web
npm install
npm run dev
```

**Studio (Sanity):**
```bash
cd studio
npm install
npm run dev
```

## Cloning / Forking

Please review the [license](LICENSE.txt) and remove all personal information (resume, images, personal data, etc.) before using this project as a template.
