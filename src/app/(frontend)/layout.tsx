import React from 'react'
import type { Metadata } from 'next'
import { Cinzel, Lora, Playfair_Display } from 'next/font/google'
import { getPayload } from 'payload'

import config from '@/payload.config'
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

  return {
    title: settings.seo?.title || settings.siteName,
    description: settings.seo?.description || undefined,
    icons: favicon ? { icon: favicon } : undefined,
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
