/**
 * ArcReactorBackdrop — purely decorative animated background.
 * A glowing arc-reactor core + drifting grid. No props.
 */
export default function ArcReactorBackdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop-grid" />
      <div className="reactor-glow reactor-glow--red" />
      <div className="reactor-glow reactor-glow--gold" />
    </div>
  )
}
