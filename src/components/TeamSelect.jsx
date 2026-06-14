import { teams } from '../campaignData.js'

/**
 * TeamSelect — the FIRST identity step. Visitor picks their team;
 * the next screen then shows only that team's members.
 */
export default function TeamSelect({ onSelect }) {
  return (
    <section className="screen team-select fade-in">
      <p className="eyebrow">Squad assignment</p>
      <h2 className="screen-title">Which team are you on?</h2>
      <p className="screen-sub">
        Pick your squad so JARVIS can pull up the right roster. (JARVIS is Claude. Long story.)
      </p>

      <div className="name-grid">
        {teams.map((t) => (
          <button
            key={t.id}
            className="name-card"
            onClick={() => onSelect(t)}
          >
            <span className="name-card__icon" aria-hidden="true">{t.icon}</span>
            <span className="name-card__name">{t.name}</span>
            <span className="name-card__role">{t.blurb}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
