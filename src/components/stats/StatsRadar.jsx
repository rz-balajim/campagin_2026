import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import useInView from './useInView.js'

/**
 * StatsRadar — a themed Recharts radar that "draws in" when scrolled into view.
 *
 * The draw-in works by rendering every axis at 0 until the section is on
 * screen, then swapping to the real values — Recharts animates the transition,
 * so the confident shape grows out from the center.
 *
 * props:
 *   data    : the radar config object from statsData.js
 *             ({ title, subtitle, max, axes:[{axis,value}], caption, footnote })
 *   color   : accent hex (defaults to gold). The fill/stroke of the shape.
 */
export default function StatsRadar({ data, color = '#f5c542' }) {
  const [ref, inView] = useInView({ threshold: 0.25 })

  // Until in view, plot zeros so the shape can animate outward.
  const chartData = data.axes.map((a) => ({
    axis: a.axis,
    value: inView ? a.value : 0,
  }))

  return (
    <div className="stats-radar" ref={ref}>
      <div className="stats-radar__head">
        <h3 className="stats-radar__title arc-head">{data.title}</h3>
        {data.subtitle && <p className="stats-radar__sub">{data.subtitle}</p>}
      </div>

      <div className="stats-radar__chart">
        <ResponsiveContainer width="100%" height={320}>
          <RadarChart data={chartData} outerRadius="72%">
            <PolarGrid stroke="rgba(111, 227, 255, 0.22)" />
            <PolarAngleAxis
              dataKey="axis"
              tick={{ fill: '#9fb0c3', fontSize: 12, fontFamily: 'Rajdhani, sans-serif' }}
            />
            <PolarRadiusAxis
              domain={[0, data.max || 100]}
              tick={false}
              axisLine={false}
            />
            <Radar
              dataKey="value"
              stroke={color}
              fill={color}
              fillOpacity={0.35}
              strokeWidth={2}
              isAnimationActive
              animationDuration={1200}
              animationEasing="ease-out"
              dot={{ r: 3, fill: color, strokeWidth: 0 }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {data.caption && <p className="stats-radar__caption">{data.caption}</p>}
      {data.footnote && <p className="stats-radar__footnote">{data.footnote}</p>}
    </div>
  )
}
