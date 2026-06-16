import { useEffect, useState } from 'react'
import Landing from './components/Landing.jsx'
import TeamSelect from './components/TeamSelect.jsx'
import NameSelect from './components/NameSelect.jsx'
import Quiz from './components/Quiz.jsx'
import Finale from './components/Finale.jsx'
import Stats from './components/Stats.jsx'
import ArcReactorBackdrop from './components/ArcReactorBackdrop.jsx'
import { getQuestionsFor } from './campaignData.js'

/**
 * useHashRoute — tiny hash-based router so /#/stats is a shareable URL
 * (works on static hosts and when opened cold from a Slack link) without
 * pulling in a routing library. Returns the current route + a navigate fn.
 */
function useHashRoute() {
  const read = () => (window.location.hash.replace(/^#\/?/, '') || 'home')
  const [route, setRoute] = useState(read)

  useEffect(() => {
    const onChange = () => setRoute(read())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const navigate = (to) => {
    window.location.hash = to === 'home' ? '' : `/${to}`
    if (to === 'home' || to === '') {
      // ensure we land at the top when returning to the campaign
      window.scrollTo({ top: 0 })
    }
  }

  return [route, navigate]
}

/**
 * App — the single-page state machine.
 * Screens: 'landing' -> 'team' -> 'name' -> 'quiz' -> 'finale'
 *   (the 'quiz' screen opens with the visitor's personal greeting message)
 * A separate hash route (#/stats) renders the Mission Control dashboard.
 * All editable content lives in campaignData.js / statsData.js; this file is flow.
 */
export default function App() {
  const [route, navigate] = useHashRoute()
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
  const onStats = route === 'stats'

  // Scroll to top whenever we switch into the stats dashboard.
  useEffect(() => {
    if (onStats) window.scrollTo({ top: 0 })
  }, [onStats])

  if (onStats) {
    return (
      <div className="app-shell app-shell--stats">
        <ArcReactorBackdrop />
        <Stats onHome={() => navigate('home')} />
        <footer className="app-footer">
          <span>JARVIS is Claude · Code is art · Bugs are abstract art</span>
        </footer>
      </div>
    )
  }

  return (
    <div className="app-shell">
      <ArcReactorBackdrop />

      <main className="screen-stage">
        {screen === 'landing' && (
          <Landing key="landing" onEnter={startCampaign} onStats={() => navigate('stats')} />
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
            onStats={() => navigate('stats')}
          />
        )}
      </main>

      <footer className="app-footer">
        <span>JARVIS is Claude · Code is art · Bugs are abstract art</span>
      </footer>
    </div>
  )
}
