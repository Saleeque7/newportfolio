import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'

import config from '@/payload.config'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './devfolio.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
