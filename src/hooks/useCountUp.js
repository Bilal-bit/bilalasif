import { useState, useEffect, useRef, useCallback } from 'react'

function easeOutQuad(t) {
  return t * (2 - t)
}

export default function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  const animate = useCallback(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    const start = performance.now()

    function step(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuad(progress)
      setCount(Math.round(easedProgress * target))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [target, duration])

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate()
          observer.unobserve(node)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)

    return () => observer.unobserve(node)
  }, [animate])

  return { count, ref }
}
