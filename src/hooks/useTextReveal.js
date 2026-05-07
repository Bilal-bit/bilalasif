import { useEffect } from 'react'
import gsap from 'gsap'

export default function useTextReveal(ref, options = {}) {
  const { delay = 0, stagger = 0.08, duration = 1, trigger = 'viewport' } = options

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const inners = node.querySelectorAll('.line-reveal-inner')
    if (inners.length === 0) return

    if (trigger === 'immediate') {
      gsap.to(inners, {
        y: 0,
        duration,
        ease: 'power3.out',
        stagger,
        delay,
      })
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(inners, {
            y: 0,
            duration,
            ease: 'power3.out',
            stagger,
            delay,
          })
          observer.unobserve(node)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)

    return () => observer.unobserve(node)
  }, [ref, delay, stagger, duration, trigger])
}
