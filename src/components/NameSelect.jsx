import { defaultVisitor, getColleaguesForTeam } from '../campaignData.js'

/**
 * NameSelect — shown AFTER a team is picked. Lists only that team's members.
 *
 * props:
 *   team     : the selected team object (from TeamSelect)
 *   onSelect : called with the chosen colleague (drives personalization)
 *   onBack   : go back to the team selection screen
 */
export default function NameSelect({ team, onSelect, onBack }) {
  const members = getColleaguesForTeam(team.id)

  return (
    <section className="screen name-select fade-in">
      <p className="eyebrow">
        {team.icon} {team.name} · Identity scan
      </p>
      <h2 className="screen-title">Who goes there?</h2>
      <p className="screen-sub">
        Pick your name so JARVIS can tailor the briefing.
      </p>

      <div className="name-grid">
        {members.map((c) => (
          <button
            key={c.id}
            className="name-card"
            onClick={() => onSelect(c)}
          >
            <span className="name-card__name">{c.name}</span>
            <span className="name-card__role">{c.role}</span>
          </button>
        ))}

        <button
          className="name-card name-card--ghost"
          onClick={() => onSelect(defaultVisitor)}
        >
          <span className="name-card__name">Someone else</span>
          <span className="name-card__role">{defaultVisitor.role}</span>
        </button>
      </div>

      <button className="btn btn--ghost" onClick={onBack}>
        ← Wrong squad? Pick a different team
      </button>
    </section>
  )
}
