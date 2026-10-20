import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import type { About as AboutData } from '@/payload-types'
import { emailHref, whatsappHref } from '@/lib/contact'
import { BIO as DEFAULT_BIO, HIGHLIGHTS, PROFILE } from '@/data/resume'

type AboutProps = {
  data: AboutData
  photoUrl?: string | null
}

// An emptied rich text field is still saved as a document with a blank
// paragraph, so look for actual text before using it.
const hasText = (node: unknown): boolean => {
  if (!node || typeof node !== 'object') return false
  const { text, children, root } = node as { text?: unknown; children?: unknown[]; root?: unknown }
  if (typeof text === 'string' && text.trim()) return true
  if (root) return hasText(root)
  return Array.isArray(children) && children.some(hasText)
}

const About = ({ data, photoUrl }: AboutProps) => {
  const { name, email, phone, bio, skills } = data
  const profile = data.profile || PROFILE.role

  return (
    <section id="about" className={`about-split route ${photoUrl ? '' : 'about-split--no-photo'}`}>
      {photoUrl && (
        <div className="about-split__media">
          <img src={photoUrl} alt={name} />
        </div>
      )}

      <div className="about-split__content">
        <span className="jh-eyebrow">Behind the code</span>
        <h2 className="jh-display about-split__title">About Me</h2>
        <p className="about-split__name">
          {name}
          <span>{profile}</span>
        </p>

        {(email || phone) && (
          <ul className="about-split__contact">
            {email && (
              <li>
                <a href={emailHref(email)} target="_blank" rel="noopener noreferrer" className="text-break">
                  <i className="bi bi-envelope"></i>
                  {email}
                </a>
              </li>
            )}
            {phone && (
              <li>
                <a href={`tel:${phone}`}>
                  <i className="bi bi-telephone"></i>
                  {phone}
                </a>
              </li>
            )}
            {phone && (
              <li>
                <a href={whatsappHref(phone)} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-whatsapp"></i>
                  WhatsApp
                </a>
              </li>
            )}
          </ul>
        )}

        <div className="about-split__bio">
          {bio && hasText(bio) ? (
            <RichText data={bio as unknown as SerializedEditorState} />
          ) : (
            DEFAULT_BIO.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
          )}
        </div>

        {skills && skills.length > 0 && (
          <div className="skill-mf about-split__skills">
            {skills.map((skill) => (
              <div key={skill.id ?? skill.name}>
                <span>{skill.name}</span> <span className="float-end">{skill.percentage}%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.percentage}%` }}
                    aria-valuenow={skill.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="about-split__tiles">
          {HIGHLIGHTS.map((tile) => (
            <div key={tile.label} className="jh-stat">
              <i className={`bi ${tile.icon}`}></i>
              <small>{tile.label}</small>
              <span>{tile.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
