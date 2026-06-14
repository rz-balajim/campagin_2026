import { useMemo, useState } from 'react'
import AchievementCard from './AchievementCard.jsx'
import { getPersona, getAchievement } from '../campaignData.js'

/**
 * Quiz — the centerpiece. Personalized greeting, then questions one at a time.
 * Each answered question reveals an achievement card before "Next".
 *
 * props:
 *   visitor   : the chosen colleague object
 *   questions : ordered question list for this visitor (from getQuestionsFor)
 *   onComplete(revealedIds[]) : called when the last question is done
 */
export default function Quiz({ visitor, questions, onComplete }) {
  const persona = useMemo(() => getPersona(visitor.persona), [visitor])

  const [step, setStep] = useState(-1) // -1 = greeting, 0..n-1 = questions
  const [picked, setPicked] = useState(null) // selected option index for current q
  const total = questions.length

  // Track which achievements were revealed, in order, for the finale recap.
  const [revealed, setRevealed] = useState([])

  function beginQuestions() {
    setStep(0)
  }

  function pickOption(i) {
    if (picked !== null) return // lock after first pick
    setPicked(i)
    const q = questions[step]
    setRevealed((prev) => (prev.includes(q.reveal) ? prev : [...prev, q.reveal]))
  }

  function next() {
    if (step + 1 >= total) {
      onComplete(revealed)
      return
    }
    setStep((s) => s + 1)
    setPicked(null)
  }

  // ----- Greeting screen -----
  if (step === -1) {
    return (
      <section className="screen quiz-greeting fade-in">
        <p className="eyebrow">Personalized briefing</p>
        <h2 className="screen-title glow-gold">
          {(visitor.greeting || persona.greeting || 'Welcome, {name}.').replace(
            '{name}',
            visitor.name,
          )}
        </h2>
        <p className="persona-joke">{persona.joke}</p>
        <p className="reactor-note">⚡ {persona.reactor}</p>
        <button className="btn btn--primary" onClick={beginQuestions}>
          Begin the briefing →
        </button>
      </section>
    )
  }

  // ----- Question screen -----
  const q = questions[step]
  const answered = picked !== null
  const achievement = answered ? getAchievement(q.reveal) : null

  return (
    <section className="screen quiz fade-in">
      <div className="quiz-progress">
        <span>
          Question {step + 1} / {total}
        </span>
        <div className="quiz-progress__bar">
          <div
            className="quiz-progress__fill"
            style={{ width: `${((step + (answered ? 1 : 0)) / total) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="quiz-question">
        {q.prompt.replace('{name}', visitor.name)}
      </h2>

      <div className="quiz-options">
        {q.options.map((opt, i) => (
          <button
            key={i}
            className={
              'quiz-option' +
              (picked === i ? ' quiz-option--picked' : '') +
              (answered && picked !== i ? ' quiz-option--dim' : '')
            }
            onClick={() => pickOption(i)}
            disabled={answered}
          >
            {opt.text}
          </button>
        ))}
      </div>

      {answered && (
        <>
          <p className="quiz-reply fade-in">“{q.options[picked].reply}”</p>
          <AchievementCard achievement={achievement} note={q.reactorNote} />
          <button className="btn btn--primary btn--next" onClick={next}>
            {step + 1 >= total ? 'See the verdict →' : 'Next →'}
          </button>
        </>
      )}
    </section>
  )
}
