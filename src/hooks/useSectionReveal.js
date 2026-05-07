import { useEffect } from 'react'
import gsap from 'gsap'

export default function useSectionReveal(ref, delay = 0) {
  useEffect(() => {
    const node = ref.current
    if (!node) return

    gsap.set(node, { y: 80, opacity: 0 })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(node, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            delay,
          })
          observer.unobserve(node)
        }
      },
      { threshold: 0.05 }
    )

    observer.observe(node)

    return () => observer.unobserve(node)
  }, [ref, delay])
}
