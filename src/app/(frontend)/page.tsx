import { getPayload } from 'payload'

import config from '@/payload.config'
import type { Media } from '@/payload-types'
import { PROFILE, SOCIALS } from '@/data/resume'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Career from '@/components/Career'
import Contact from '@/components/Contact'

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

const mediaUrl = (media: string | Media | null | undefined) =>
  media && typeof media === 'object' ? media.url : null

export default async function HomePage() {
  const payload = await getPayload({ config })
  const [settings, hero, about, services, projects, experience] = await Promise.all([
    payload.findGlobal({ slug: 'site-settings' }),
    payload.findGlobal({ slug: 'hero' }),
    payload.findGlobal({ slug: 'about' }),
    payload.find({ collection: 'services', limit: 50 }),
    payload.find({ collection: 'projects', where: { published: { equals: true } }, limit: 50 }),
    payload.find({ collection: 'experience', limit: 50 }),
  ])

  const navLinks = settings.navLinks?.length ? settings.navLinks : DEFAULT_NAV
  const typedStrings = hero.typedStrings?.length ? hero.typedStrings.map((item) => item.text) : PROFILE.typedRoles

  return (
    <>
      <Header siteName={settings.siteName} logoUrl={mediaUrl(settings.logo)} navLinks={navLinks} />
      <Hero
        title={hero.title}
        typedStrings={typedStrings}
        quote={hero.quote}
        backgroundUrl={mediaUrl(hero.backgroundImage) ?? '/IMG_0087-01.jpeg'}
      />
      <main id="main">
        {/* Hidden until the About global has been saved in the admin */}
        {about.name && <About data={about} photoUrl={mediaUrl(about.photo)} />}
        <Services services={services.docs} />
        <Work projects={projects.docs} />
        <Career experience={experience.docs} />
        <Contact
          email={about.email}
          phone={about.phone}
          socials={settings.socials?.length ? settings.socials : SOCIALS}
        />
      </main>
    </>
  )
}
