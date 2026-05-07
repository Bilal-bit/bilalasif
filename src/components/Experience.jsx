import { useRef } from 'react'
import useTextReveal from '../hooks/useTextReveal'
import useSectionReveal from '../hooks/useSectionReveal'
import styles from './Experience.module.css'

const jobs = [
  {
    role: 'Full-Stack Developer',
    company: 'Metaviz',
    period: 'Jan 2026 – Present',
    badge: 'MV',
    tags: ['Metaviz', 'Lahore, Pakistan', 'Full-time', 'On-site', 'Full-Stack'],
    achievements: [
      'Building modern, production-grade full-stack web applications end-to-end',
      'Architecting scalable Next.js front-ends and Node.js back-ends with clean code',
      'Designing REST APIs, database schemas, and authentication flows',
      'Owning features from idea to deployment — UI, API, database, and DevOps',
      'Shipping with a focus on performance, polish, and developer experience',
    ],
    current: true,
  },
  {
    role: 'Front-End Developer',
    company: 'Vaival Technology',
    period: 'Jan 2023 – Mar 2025',
    badge: 'FE',
    tags: ['Vaival Technology', 'Lahore, Pakistan', 'Full-time', 'On-site'],
    achievements: [
      'Built and shipped 20+ production web apps using React.js and Next.js',
      'Translated Figma designs into pixel-perfect, fully responsive interfaces',
      'Integrated REST APIs to deliver smooth, data-driven user experiences',
      'Optimized Core Web Vitals, reducing LCP by 40% across key product pages',
      'Mentored junior developers on component architecture and clean CSS practices',
    ],
  },
]

export default function Experience() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  useSectionReveal(sectionRef)
  useTextReveal(headingRef)

  return (
    <section className={`${styles.section} stack-section`} id="experience" ref={sectionRef}>
      <div className={styles.container}>
        <span className={styles.label}>EXPERIENCE</span>
        <div ref={headingRef}>
          <h2 className={styles.heading}>
            <span className="line-reveal">
              <span className="line-reveal-inner">Where I&apos;ve worked</span>
            </span>
          </h2>
        </div>

        <div className={styles.cards}>
          {jobs.map((job) => (
            <div key={job.company} className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.role}>
                    {job.role}{' '}
                    <span className={styles.company}>· {job.company}</span>
                  </h3>
                  <p className={styles.period}>
                    {job.period}
                    {job.current && <span className={styles.dot} aria-hidden="true" />}
                  </p>
                </div>
                <div className={styles.badge}>{job.badge}</div>
              </div>

              <div className={styles.tags}>
                {job.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <ul className={styles.list}>
                {job.achievements.map((item) => (
                  <li key={item} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a href="#contact" className={styles.outlineBtn}>
          Get in touch →
        </a>
      </div>
    </section>
  )
}
