import type { SiteSetting } from '@/payload-types'
import { emailHref, whatsappHref } from '@/lib/contact'
import ContactForm from './ContactForm'

type ContactProps = {
  email?: string | null
  phone?: string | null
  socials?: { platform: string; url: string; id?: string | null }[] | SiteSetting['socials']
}

const SOCIAL_ICONS: Record<string, string> = {
  github: 'bi-github',
  linkedin: 'bi-linkedin',
  instagram: 'bi-instagram',
  x: 'bi-twitter-x',
  facebook: 'bi-facebook',
  youtube: 'bi-youtube',
  whatsapp: 'bi-whatsapp',
}

const Contact = ({ email, phone, socials }: ContactProps) => {
  const details = [
    email && { icon: 'bi-envelope', label: 'Email', value: email, href: emailHref(email), external: true },
    phone && { icon: 'bi-telephone', label: 'Phone', value: phone, href: `tel:${phone}` },
    phone && { icon: 'bi-whatsapp', label: 'WhatsApp', value: phone, href: whatsappHref(phone), external: true },
    { icon: 'bi-briefcase', label: 'Currently at', value: 'Auxio Technologies' },
  ].filter(Boolean) as { icon: string; label: string; value: string; href?: string; external?: boolean }[]

  return (
    <section id="contact" className="contact-jh route">
      <div className="container">
        <div className="text-center contact-jh__head">
          <span className="jh-eyebrow">Open for new projects</span>
          <h2 className="jh-display contact-jh__title">Get In Touch</h2>
          <div className="jh-divider">
            <span></span>
          </div>
          <p className="contact-jh__lead">
            Have a website, app or idea in mind? Tell me about it and I&apos;ll reply within a day.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="jh-card contact-jh__info">
              <h3>Contact details</h3>
              <ul>
                {details.map((item) => (
                  <li key={item.label}>
                    <i className={`bi ${item.icon}`}></i>
                    <div>
                      <small>{item.label}</small>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-break"
                          {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {socials && socials.length > 0 && (
                <>
                  <h3 className="mt-4">Follow</h3>
                  <div className="contact-jh__socials">
                    {socials.map((social) => (
                      <a
                        key={social.id ?? social.url}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.platform}
                      >
                        <i className={`bi ${SOCIAL_ICONS[social.platform] ?? 'bi-link-45deg'}`}></i>
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="col-lg-7">
            <div className="jh-card contact-jh__form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
