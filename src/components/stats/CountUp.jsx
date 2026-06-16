import { useEffect, useRef, useState } from 'react'

/**
 * CountUp — animates a number from 0 up to `value` once `active` is true.
 *
 * props:
 *   value    : final number to count up to
 *   active   : start the animation when this flips true (e.g. on scroll-in)
 *   duration : animation length in ms (default 1600)
 *   decimals : decimal places to render (default 0)
 *   prefix   : text before the number (e.g. '₹')
 *   suffix   : text after the number (e.g. '%', '+')
 *
 * Respects prefers-reduced-motion: snaps straight to the final value.
 */
export default function CountUp({
  value,
  active,
  duration = 1600,
  decimals = 0,
  prefix = '',
  suffix = '',
}) {
  const [display, setDisplay] = useState(0)
  const frameRef = useRef(0)

  useEffect(() => {
    if (!active) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setDisplay(value)
      return
    }

    let start = null
    const animate = (timestamp) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      // easeOutCubic for a snappy-then-settle feel
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setDisplay(value)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [active, value, duration])

  const formatted = display.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
