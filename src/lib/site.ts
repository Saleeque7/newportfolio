// Public origin of the site, used for absolute URLs in share tags, sitemap and robots.
// NEXT_PUBLIC_SITE_URL wins (set it for a custom domain); on Vercel the production domain is provided automatically.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
