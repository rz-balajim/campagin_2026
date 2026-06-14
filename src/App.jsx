import { useState } from 'react'
import Landing from './components/Landing.jsx'
import TeamSelect from './components/TeamSelect.jsx'
import NameSelect from './components/NameSelect.jsx'
import Quiz from './components/Quiz.jsx'
import Finale from './components/Finale.jsx'
import ArcReactorBackdrop from './components/ArcReactorBackdrop.jsx'
import { getQuestionsFor } from './campaignData.js'

/**
 * App — the single-page state machine.
 * Screens: 'landing' -> 'team' -> 'name' -> 'quiz' -> 'finale'
 *   (the 'quiz' screen opens with the visitor's personal greeting message)
 * All editable content lives in campaignData.js; this file is pure flow.
 */
export default function App() {
  const [screen, setScreen] = useState('landing')
  const [team, setTeam] = useState(null) // chosen team object
  const [visitor, setVisitor] = useState(null) // colleague object
  // Achievement ids unlocked during the quiz, in reveal order (for the finale):
  const [unlocked, setUnlocked] = useState([])

  function startCampaign() {
    setScreen('team')
  }

  function chooseTeam(t) {
    setTeam(t)
    setScreen('name')
  }

  function backToTeams() {
    setScreen('team')
  }

  function chooseVisitor(v) {
    setVisitor(v)
    setUnlocked([])
    setScreen('quiz')
  }

  function finishQuiz(revealedIds) {
    setUnlocked(revealedIds)
    setScreen('finale')
  }

  function restart() {
    setTeam(null)
    setVisitor(null)
    setUnlocked([])
    setScreen('landing')
  }

  const questions = visitor ? getQuestionsFor(visitor.persona) : []

  return (
    <div className="app-shell">
      <ArcReactorBackdrop />

      <main className="screen-stage">
        {screen === 'landing' && (
          <Landing key="landing" onEnter={startCampaign} />
        )}

        {screen === 'team' && (
          <TeamSelect key="team" onSelect={chooseTeam} />
        )}

        {screen === 'name' && team && (
          <NameSelect
            key={`name-${team.id}`}
            team={team}
            onSelect={chooseVisitor}
            onBack={backToTeams}
          />
        )}

        {screen === 'quiz' && visitor && (
          <Quiz
            key={`quiz-${visitor.id}`}
            visitor={visitor}
            questions={questions}
            onComplete={finishQuiz}
          />
        )}

        {screen === 'finale' && visitor && (
          <Finale
            key="finale"
            visitor={visitor}
            unlocked={unlocked}
            onRestart={restart}
          />
        )}
      </main>

      <footer className="app-footer">
        <span>JARVIS is Claude · Code is art · Bugs are abstract art</span>
      </footer>
    </div>
  )
}
