type SectionHeadProps = {
  eyebrow: string
  title: string
  lead?: string
}

// Eyebrow → title → divider → lead, the pattern from THEME.md
const SectionHead = ({ eyebrow, title, lead }: SectionHeadProps) => (
  <div className="section-head text-center">
    <span className="jh-eyebrow">{eyebrow}</span>
    <h2 className="jh-display section-head__title">{title}</h2>
    <div className="jh-divider">
      <span></span>
    </div>
    {lead && <p className="section-head__lead">{lead}</p>}
  </div>
)

export default SectionHead
