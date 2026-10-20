import type { Experience } from '@/payload-types'
import { EDUCATION, EXPERIENCE, SOFT_SKILLS, type CareerItem } from '@/data/resume'
import SectionHead from './SectionHead'

type CareerProps = {
  experience: Experience[]
}

const monthYear = (date: string) =>
  new Date(date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })

const fromCms = (e: Experience): CareerItem => ({
  role: e.role,
  company: e.company,
  period: `${monthYear(e.startDate)} – ${e.current || !e.endDate ? 'Present' : monthYear(e.endDate)}`,
  // One bullet per line in the admin's description box
  points: (e.description ?? '')
    .split('\n')
    .map((line) => line.replace(/^[-•*]\s*/, '').trim())
    .filter(Boolean),
})

const Career = ({ experience }: CareerProps) => {
  const items = experience.length ? experience.map(fromCms) : EXPERIENCE

  return (
    <section id="mycarrier" className="section-jh route">
      <div className="container">
        <SectionHead eyebrow="The journey so far" title="My Career" />

        <div className="row g-4">
          <div className="col-lg-8">
            <ol className="career-jh">
              {items.map((item) => (
                <li key={`${item.company}-${item.period}`} className="career-jh__item">
                  <div className="jh-card career-jh__card">
                    <div className="career-jh__top">
                      <div>
                        <h3>{item.role}</h3>
                        <p className="career-jh__company">
                          {item.companyUrl ? (
                            <a href={item.companyUrl} target="_blank" rel="noopener noreferrer">
                              {item.companyLogo && <img src={item.companyLogo} alt="" className="link-favicon" />}
                              {item.company}
                              <i className="bi bi-arrow-up-right"></i>
                            </a>
                          ) : (
                            item.company
                          )}
                        </p>
                      </div>
                      <span className="jh-badge">{item.period}</span>
                    </div>
                    {item.about && <p className="career-jh__about">{item.about}</p>}
                    {item.points.length > 0 && (
                      <ul>
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                    {item.links && item.links.length > 0 && (
                      <div className="project-jh__links">
                        {item.links.map((link) => (
                          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.logo ? (
                              <img src={link.logo} alt="" className="link-favicon" loading="lazy" />
                            ) : (
                              <i className={`bi ${link.icon}`}></i>
                            )}
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="col-lg-4">
            <div className="jh-card career-jh__side">
              <h3>
                <i className="bi bi-mortarboard"></i> Education
              </h3>
              <p className="career-jh__degree">{EDUCATION.degree}</p>
              <p>{EDUCATION.school}</p>
              <p className="career-jh__muted">{EDUCATION.university}</p>
              <span className="jh-badge">{EDUCATION.period}</span>
            </div>

            <div className="jh-card career-jh__side">
              <h3>
                <i className="bi bi-people"></i> Soft skills
              </h3>
              <div className="chips-jh">
                {SOFT_SKILLS.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career
