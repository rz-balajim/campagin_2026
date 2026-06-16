import { candidate } from '../campaignData.js'

/**
 * Landing — punchy hero. Iron Man vibe + the "Enter" button.
 */
export default function Landing({ onEnter, onStats }) {
  return (
    <section className="screen landing fade-in">
      <div className="arc-emblem" aria-hidden="true">
        <div className="arc-emblem__ring" />
        <div className="arc-emblem__ring arc-emblem__ring--2" />
        <div className="arc-emblem__core" />
      </div>

      <p className="eyebrow">{candidate.company} · {candidate.award}</p>

      <h1 className="hero-title">
        VOTE <span className="glow-gold">{candidate.name.toUpperCase()}</span>
      </h1>

      <p className="hero-tagline glow-red">{candidate.tagline}</p>
      <p className="hero-sub">{candidate.subTagline}</p>

      <button className="btn btn--primary btn--enter" onClick={onEnter}>
        {candidate.enterLabel}
        <span className="btn__pulse" aria-hidden="true" />
      </button>

      {onStats && (
        <button className="btn btn--ghost landing-stats-link" onClick={onStats}>
          📊 View Mission Control →
        </button>
      )}

      <p className="hint">▾ proof of genius inside</p>
    </section>
  )
}
