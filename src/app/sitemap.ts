import type { MetadataRoute } from 'next'

import { siteUrl } from '@/lib/site'

// Single-page site: the home page is the only public URL
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }]
}
