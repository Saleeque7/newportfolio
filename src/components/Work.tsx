import type { Project } from '@/payload-types'
import { PROJECTS, type ProjectCard } from '@/data/resume'
import SectionHead from './SectionHead'

type WorkProps = {
  projects: Project[]
}

const fromCms = (p: Project): ProjectCard => ({
  title: p.title,
  tag: 'Project',
  description: p.description ?? '',
  tech: p.techStack?.map((t) => t.name) ?? [],
  coverUrl: typeof p.cover === 'object' ? p.cover?.url : null,
  links: [
    p.liveUrl && { label: 'Live', url: p.liveUrl, icon: 'bi-box-arrow-up-right' },
    p.repoUrl && { label: 'Code', url: p.repoUrl, icon: 'bi-github' },
  ].filter(Boolean) as ProjectCard['links'],
})

const Work = ({ projects }: WorkProps) => {
  const items = projects.length ? projects.map(fromCms) : PROJECTS

  return (
    <section id="work" className="section-jh section-jh--alt route">
      <div className="container">
        <SectionHead
          eyebrow="Selected work"
          title="Projects"
          lead="Products I've designed, built and deployed end to end."
        />

        <div className="row g-4">
          {items.map((project) => (
            <div key={project.title} className="col-md-6 col-lg-4">
              <article className="jh-card project-jh">
                <div className="jh-card__media">
                  <div className="jh-card__img">
                    {project.coverUrl ? (
                      <img src={project.coverUrl} alt={`${project.title} screenshot`} loading="lazy" />
                    ) : (
                      <span className="project-jh__monogram" aria-hidden="true">
                        {project.title.charAt(0)}
                      </span>
                    )}
                  </div>
                  <span className="jh-badge project-jh__tag">{project.tag}</span>
                </div>

                <div className="project-jh__body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-jh__tech">{project.tech.join(' · ')}</p>
                  {project.links.length > 0 && (
                    <div className="project-jh__links">
                      {project.links.map((link) => (
                        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                          <i className={`bi ${link.icon}`}></i>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
