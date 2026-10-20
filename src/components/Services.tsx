import type { Service } from '@/payload-types'
import { SERVICES, SKILL_GROUPS, type ServiceCard } from '@/data/resume'
import SectionHead from './SectionHead'

type ServicesProps = {
  services: Service[]
}

const fromCms = (s: Service): ServiceCard => ({
  icon: s.icon || 'bi-code-slash',
  title: s.title,
  note: s.description ?? undefined,
})

const Services = ({ services }: ServicesProps) => {
  const items = services.length ? services.map(fromCms) : SERVICES

  return (
    <section id="services" className="section-jh route">
      <div className="container">
        <SectionHead
          eyebrow="What I do"
          title="Services"
          lead="From the first wireframe to a deployed, scalable product, I handle the whole stack."
        />

        <div className="row g-4">
          {items.map((item) => (
            <div key={item.title} className="col-md-6 col-xl-4">
              <article className="jh-card venue-jh">
                <header className="venue-jh__head">
                  <span className="jh-medallion">
                    <i className={`bi ${item.icon}`}></i>
                  </span>
                  <div>
                    <h3 className="venue-jh__title">{item.title}</h3>
                    {item.tagline && <p className="venue-jh__tagline">{item.tagline}</p>}
                  </div>
                </header>

                {item.features && item.features.length > 0 && (
                  <div className="venue-jh__features">
                    {item.features.map((f) => (
                      <div key={f.label} className="jh-feature">
                        <span className="jh-medallion jh-medallion--sm">
                          <i className={`bi ${f.icon}`}></i>
                        </span>
                        <span>
                          {f.label}
                          <br />
                          <strong>{f.value}</strong>
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {item.points && item.points.length > 0 && (
                  <ul className="jh-checklist venue-jh__points">
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}

                {item.note && (
                  <div className="venue-jh__foot">
                    <div className="jh-divider">
                      <span></span>
                    </div>
                    <p className="jh-footnote">{item.note}</p>
                  </div>
                )}
              </article>
            </div>
          ))}
        </div>

        <div className="jh-cta-row">
          <a href="#contact" className="jh-btn">
            <i className="bi bi-calendar2-check"></i>
            Start a Project
            <i className="bi bi-chevron-right"></i>
          </a>
        </div>

        <div className="stack-jh">
          <h3 className="stack-jh__title">
            <span className="jh-eyebrow">Tech stack</span>
          </h3>
          <div className="stack-jh__grid">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="stack-jh__group">
                <h4>{group.title}</h4>
                <div className="chips-jh">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
