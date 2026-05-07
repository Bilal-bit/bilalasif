import { useRef } from 'react'
import useTextReveal from '../hooks/useTextReveal'
import useSectionReveal from '../hooks/useSectionReveal'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote:
      'Bilal delivered a pixel-perfect dashboard that exceeded our expectations. His attention to detail and clean code made collaboration effortless.',
    name: 'Muhammad Bilal.',
    role: 'Product Manager, SaaS Startup',
  },
  {
    quote:
      'Working with Bilal was smooth from start to finish. He understood the vision immediately and turned our designs into a fast, responsive web app.',
    name: 'Khizar Imtiaz.',
    role: 'Product Manager, Blockchain',
  },
  {
    quote:
      'The landing page Bilal built for us converted 3x better than our previous one. He knows how to make interfaces that actually work.',
    name: 'Arslan.',
    role: 'Senior Full-Stack Developer, Tech Agency',
  },
  {
    quote:
      'Bilal is the kind of developer every team needs — fast, reliable, and genuinely cares about the end-user experience.',
    name: 'Rashid.',
    role: 'Senior FUll Stack Developer, Metaviz',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  useSectionReveal(sectionRef)
  useTextReveal(headingRef)

  return (
    <section className={`${styles.section} stack-section`} ref={sectionRef}>
      <div className={styles.container}>
        <span className={styles.label}>TESTIMONIALS</span>
        <div ref={headingRef}>
          <h2 className={styles.heading}>
            <span className="line-reveal">
              <span className="line-reveal-inner">Kind words from</span>
            </span>
            <span className="line-reveal">
              <span className="line-reveal-inner">people I&apos;ve worked with</span>
            </span>
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <span className={styles.authorName}>{t.name}</span>
                <span className={styles.authorRole}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
