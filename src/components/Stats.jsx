import {
  hero,
  bookingEngineRadar,
  skillsRadar,
  techUnlocks,
  byTheNumbers,
  closing,
  page,
} from '../statsData.js'
import CountUp from './stats/CountUp.jsx'
import StatsRadar from './stats/StatsRadar.jsx'
import SkillUnlock from './stats/SkillUnlock.jsx'
import useInView from './stats/useInView.js'

/**
 * Section — a thin wrapper that fades/slides its children in on scroll.
 * Keeps each "Mission Control" block visually distinct.
 */
function Section({ children, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.12 })
  return (
    <section
      ref={ref}
      className={`stats-section ${inView ? 'stats-section--in' : ''} ${className}`}
    >
      {children}
    </section>
  )
}

/**
 * Stats — the "Mission Control" dashboard at #/stats.
 *
 * props:
 *   onHome : navigate back to the main campaign (landing screen)
 *
 * All numbers/labels/captions come from statsData.js — this file is layout
 * only, so editing content never requires touching component code.
 */
export default function Stats({ onHome }) {
  return (
    <div className="stats-page fade-in">
      {/* --- Top nav / page header --- */}
      <header className="stats-topbar">
        <button className="btn btn--ghost stats-back" onClick={onHome}>
          ← Back to campaign
        </button>
      </header>

      <div className="stats-inner">
        <div className="stats-header">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="stats-title arc-head">{page.title}</h1>
          <p className="screen-sub">{page.subtitle}</p>
        </div>

        {/* --- 1. HERO STRIP: All Systems Operational + count-up numbers --- */}
        <Section className="stats-hero">
          <div className="status-banner">
            <span className="status-banner__dot" aria-hidden="true" />
            <span className="status-banner__text">{hero.status}</span>
          </div>
          <p className="status-banner__sub">{hero.subtitle}</p>

          <div className="hero-counters">
            {hero.counters.map((c, i) => (
              <HeroCounter key={c.label} counter={c} />
            ))}
          </div>
        </Section>

        {/* --- 2 & 3. RADAR CHARTS --- */}
        <Section>
          <div className="radar-row">
            <StatsRadar data={bookingEngineRadar} color="#6fe3ff" />
            <StatsRadar data={skillsRadar} color="#f5c542" />
          </div>
        </Section>

        {/* --- 4. NEW TECH I LEARNED: skill-unlock cards --- */}
        <Section>
          <h2 className="stats-section__title arc-head">New Tech I Learned</h2>
          <p className="stats-section__sub">
            Achievements unlocked this cycle. Hover to inspect.
          </p>
          <div className="unlock-grid">
            {techUnlocks.map((item, i) => (
              <SkillUnlock key={item.name} item={item} index={i} />
            ))}
          </div>
        </Section>

        {/* --- 5. BY THE NUMBERS: stat grid --- */}
        <Section>
          <h2 className="stats-section__title arc-head">By The Numbers</h2>
          <p className="stats-section__sub">The receipts, for the record.</p>
          <div className="numbers-grid">
            {byTheNumbers.map((n) => (
              <div className="number-card" key={n.label}>
                <span className="number-card__icon" aria-hidden="true">{n.icon}</span>
                <span className="number-card__value">{n.value}</span>
                <span className="number-card__label">{n.label}</span>
                {n.note && <span className="number-card__note">{n.note}</span>}
              </div>
            ))}
          </div>
        </Section>

        {/* --- 6. CLOSING CTA --- */}
        <Section className="stats-cta">
          <p className="stats-cta__line glow-gold">{closing.line}</p>
          <button className="btn btn--primary btn--enter" onClick={onHome}>
            {closing.ctaLabel}
            <span className="btn__pulse" aria-hidden="true" />
          </button>
        </Section>
      </div>
    </div>
  )
}

/**
 * HeroCounter — one big animated count-up tile. Each watches its own viewport
 * entry so the numbers tick up as the hero strip appears.
 */
function HeroCounter({ counter }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  return (
    <div className="hero-counter" ref={ref}>
      <span className="hero-counter__icon" aria-hidden="true">{counter.icon}</span>
      <span className="hero-counter__value">
        <CountUp
          value={counter.value}
          active={inView}
          decimals={counter.decimals || 0}
          prefix={counter.prefix || ''}
          suffix={counter.suffix || ''}
        />
      </span>
      <span className="hero-counter__label">{counter.label}</span>
    </div>
  )
}
