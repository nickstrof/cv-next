export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000';
  const locales = ['en', 'el'];
  const routes = ['', '/about', '/stack', '/blog'];

  const urls = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      urls.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  return urls;
}
