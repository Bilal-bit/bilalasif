import { useEffect } from 'react'

export default function useScrollReveal(ref, delay = 0) {
  useEffect(() => {
    const node = ref.current
    if (!node) return

    let elements = node.querySelectorAll('.reveal')
    if (elements.length === 0 && node.classList.contains('reveal')) {
      elements = [node]
    }

    const targets = elements.length > 0 ? Array.from(elements) : [node]

    targets.forEach((el, i) => {
      el.style.transitionDelay = `${delay + i * 0.1}s`
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    targets.forEach((el) => observer.observe(el))

    return () => {
      targets.forEach((el) => observer.unobserve(el))
    }
  }, [ref, delay])
}
