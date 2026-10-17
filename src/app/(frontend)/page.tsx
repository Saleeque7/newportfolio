import { getPayload } from 'payload'

import config from '@/payload.config'
import type { Media } from '@/payload-types'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

// Re-render on every request so admin edits show up immediately.
export const dynamic = 'force-dynamic'

const DEFAULT_NAV = [
  { label: 'Home', anchor: 'hero' },
  { label: 'About', anchor: 'about' },
  { label: 'Services', anchor: 'services' },
  { label: 'Work', anchor: 'work' },
  { label: 'My Career', anchor: 'mycarrier' },
  { label: 'Contact', anchor: 'contact' },
]

const mediaUrl = (media: number | Media | null | undefined) =>
  media && typeof media === 'object' ? media.url : null

export default async function HomePage() {
  const payload = await getPayload({ config })
  const [settings, hero] = await Promise.all([
    payload.findGlobal({ slug: 'site-settings' }),
    payload.findGlobal({ slug: 'hero' }),
  ])

  const navLinks = settings.navLinks?.length ? settings.navLinks : DEFAULT_NAV

  return (
    <>
      <Header siteName={settings.siteName} logoUrl={mediaUrl(settings.logo)} navLinks={navLinks} />
      <Hero
        title={hero.title}
        typedStrings={hero.typedStrings?.map((item) => item.text) ?? []}
        quote={hero.quote}
        backgroundUrl={mediaUrl(hero.backgroundImage) ?? '/IMG_0087-01.jpeg'}
      />
      <main id="main">{/* About, Services, Work, My Career, Contact come next */}</main>
    </>
  )
}
