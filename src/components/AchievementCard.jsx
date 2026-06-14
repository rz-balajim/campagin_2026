import { useEffect, useState } from 'react'

/**
 * AchievementCard — the animated reveal. Stats chips pop in one-by-one.
 *
 * props:
 *   achievement : an achievement object from campaignData.js
 *   note        : optional reactor status line shown above the card
 */
export default function AchievementCard({ achievement, note }) {
  // Track how many stat chips are visible, for the staggered pop-in.
  const [shownStats, setShownStats] = useState(0)

  useEffect(() => {
    setShownStats(0)
    const timers = achievement.stats.map((_, i) =>
      setTimeout(() => setShownStats((n) => Math.max(n, i + 1)), 450 + i * 220),
    )
    return () => timers.forEach(clearTimeout)
  }, [achievement])

  return (
    <div className="achievement-wrap card-reveal">
      {note && <p className="reactor-note">{note}</p>}

      <article className="achievement-card">
        <div className="achievement-card__header">
          <span className="achievement-card__icon" aria-hidden="true">
            {achievement.icon}
          </span>
          <span className="achievement-card__badge">ACHIEVEMENT UNLOCKED</span>
        </div>

        <h3 className="achievement-card__title">{achievement.title}</h3>
        <p className="achievement-card__blurb">{achievement.blurb}</p>

        <div className="stat-grid">
          {achievement.stats.map((s, i) => (
            <div
              key={s.label}
              className={`stat-chip ${i < shownStats ? 'stat-chip--in' : ''}`}
            >
              <span className="stat-chip__value glow-gold">{s.value}</span>
              <span className="stat-chip__label">{s.label}</span>
              {s.note && <span className="stat-chip__note">{s.note}</span>}
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}
