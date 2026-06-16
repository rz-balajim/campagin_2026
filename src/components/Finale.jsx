import { candidate, getPersona } from '../campaignData.js'

/**
 * Finale — a heartfelt thank-you note + campaign hashtags.
 *
 * props:
 *   visitor   : chosen colleague
 *   onRestart : reset back to the landing screen
 */
export default function Finale({ visitor, onRestart, onStats }) {
  const persona = getPersona(visitor.persona)

  return (
    <section className="screen finale fade-in">
      <p className="eyebrow">Mission debrief — {visitor.name}</p>

      {/* Heartfelt closing — replaces the old vote button */}
      <div className="thank-card card-reveal">
        <span className="thank-card__reactor" aria-hidden="true">⚛</span>
        <p className="thank-card__eyebrow">A note from the suit</p>
        <div className="thank-note">
          {candidate.thankNote.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <p className="thank-signoff glow-red">{candidate.thankSignoff}</p>
        <p className="finale-line glow-gold">{candidate.finaleLine}</p>
        <p className="persona-joke">{persona.joke}</p>
      </div>

      <ul className="hashtag-row" aria-label="Campaign hashtags">
        {candidate.hashtags.map((tag) => (
          <li key={tag} className="hashtag">{tag}</li>
        ))}
      </ul>

      <div className="finale-actions">
        {onStats && (
          <button className="btn btn--primary" onClick={onStats}>
            📊 See Mission Control
          </button>
        )}
        <button className="btn btn--ghost" onClick={onRestart}>
          ↺ Run it again
        </button>
      </div>
    </section>
  )
}
