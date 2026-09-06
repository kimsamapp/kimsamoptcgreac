import { useEffect, useRef, useState } from 'react'

/**
 * Attach to any element ref: adds `is-visible` once the element
 * scrolls into view, then stops observing (one-shot reveal).
 */
export function useReveal(options = { threshold: 0.18, rootMargin: '0px 0px -60px 0px' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.unobserve(entry.target)
        }
      })
    }, options)

    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, visible]
}

/** Counts a number up from 0 to `to` once it scrolls into view. */
export function useCountUp(to) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        let cur = 0
        const step = Math.max(1, Math.round(to / 40))
        const tick = () => {
          cur = Math.min(to, cur + step)
          setValue(cur)
          if (cur < to) requestAnimationFrame(tick)
        }
        tick()
        io.unobserve(entry.target)
      })
    }, { threshold: 0.4 })

    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to])

  return [ref, value]
}
