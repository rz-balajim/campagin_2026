import useInView from './useInView.js'

/**
 * SkillUnlock — a game-style "achievement unlocked" card. Glows + lifts on
 * hover; the proficiency bar fills in when the card scrolls into view.
 *
 * props:
 *   item  : one entry from statsData.techUnlocks
 *           ({ name, built, proficiency, icon, tag })
 *   index : position in the list (used to stagger the entrance animation)
 */
export default function SkillUnlock({ item, index = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <div
      ref={ref}
      className={`unlock-card ${inView ? 'unlock-card--in' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="unlock-card__top">
        <span className="unlock-card__icon" aria-hidden="true">{item.icon}</span>
        {item.tag && <span className="unlock-card__tag">{item.tag}</span>}
      </div>

      <p className="unlock-card__unlocked">▸ Skill unlocked</p>
      <h4 className="unlock-card__name">{item.name}</h4>
      <p className="unlock-card__built">{item.built}</p>

      <div className="unlock-card__bar" aria-label={`Proficiency ${item.proficiency}%`}>
        <div
          className="unlock-card__bar-fill"
          style={{ width: inView ? `${item.proficiency}%` : '0%' }}
        />
      </div>
      <span className="unlock-card__prof">{item.proficiency}%</span>
    </div>
  )
}
