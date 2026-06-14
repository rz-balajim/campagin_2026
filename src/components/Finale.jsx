import { candidate, getAchievement, getPersona } from '../campaignData.js'

/**
 * Finale — recap of everything unlocked + the big "Vote Balaji" CTA.
 *
 * props:
 *   visitor   : chosen colleague
 *   unlocked  : achievement ids revealed during the quiz (in order)
 *   onRestart : reset back to the landing screen
 */
export default function Finale({ visitor, unlocked, onRestart }) {
  const persona = getPersona(visitor.persona)
  const items = unlocked.map(getAchievement).filter(Boolean)

  return (
    <section className="screen finale fade-in">
      <p className="eyebrow">Mission debrief — {visitor.name}</p>
      <h2 className="screen-title glow-gold">The Case for {candidate.name}</h2>

      <ul className="recap-list">
        {items.map((a) => (
          <li key={a.id} className="recap-item">
            <span className="recap-item__icon" aria-hidden="true">{a.icon}</span>
            <div>
              <span className="recap-item__title">{a.title}</span>
              <span className="recap-item__stats">
                {a.stats.slice(0, 2).map((s) => `${s.value} ${s.label}`).join(' · ')}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="vote-block">
        <button className="btn btn--vote" onClick={() => alert('💛 Vote recorded in spirit. Tell the committee. — Balaji')}>
          ⚡ {candidate.voteCta} ⚡
        </button>
        <p className="finale-line glow-red">{candidate.finaleLine}</p>
        <p className="persona-joke">{persona.joke}</p>
      </div>

      <button className="btn btn--ghost" onClick={onRestart}>
        ↺ Run it again
      </button>
    </section>
  )
}
