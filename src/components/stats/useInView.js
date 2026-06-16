import { useEffect, useRef, useState } from 'react'

/**
 * useInView — fires once when an element scrolls into view.
 * Used to trigger count-ups and chart-draw animations on the Stats page.
 *
 * returns [ref, inView]
 *   ref    : attach to the element you want to watch
 *   inView : false until the element is ~20% on screen, then true (stays true)
 */
export default function useInView({ threshold = 0.2, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // No IntersectionObserver (or reduced-motion users) -> just show it.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect() // fire once, then stop watching
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}
