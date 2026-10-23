import React from 'react'
import type { Metadata } from 'next'
import { Cinzel, Lora, Playfair_Display } from 'next/font/google'
import { getPayload } from 'payload'

import config from '@/payload.config'
import { siteUrl } from '@/lib/site'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './devfolio.css'
import './theme.css'

// Theme fonts, exposed as CSS variables for theme.css (see THEME.md)
const display = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })
const label = Cinzel({ subsets: ['latin'], variable: '--font-label' })
const body = Lora({ subsets: ['latin'], variable: '--font-body' })

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings' })
  const favicon = settings.favicon && typeof settings.favicon === 'object' ? settings.favicon.url : null
  const share = settings.seo?.ogImage && typeof settings.seo.ogImage === 'object' ? settings.seo.ogImage : null

  const title = settings.seo?.title || settings.siteName
  const description = settings.seo?.description || undefined
  // Relative media URLs are resolved against metadataBase, as link previews need absolute URLs
  const images = share?.url
    ? [{ url: share.url, width: share.width ?? undefined, height: share.height ?? undefined, alt: share.alt || title }]
    : undefined

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: { canonical: '/' },
    icons: favicon ? { icon: favicon } : undefined,
    // Link previews (WhatsApp, LinkedIn, Facebook, X, Slack...)
    openGraph: { type: 'website', url: '/', siteName: settings.siteName, title, description, images },
    twitter: { card: images ? 'summary_large_image' : 'summary', title, description, images },
  }
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${display.variable} ${label.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  )
}
