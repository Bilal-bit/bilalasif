import { useRef } from 'react'
import useTextReveal from '../hooks/useTextReveal'
import useSectionReveal from '../hooks/useSectionReveal'
import styles from './About.module.css'

export default function About() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  useSectionReveal(sectionRef)
  useTextReveal(headingRef)

  return (
    <section className={`${styles.section} stack-section`} id="about" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.label}>ABOUT ME</span>
          <div ref={headingRef}>
            <h2 className={styles.heading}>
              <span className="line-reveal">
                <span className="line-reveal-inner">Hi, I&apos;m Bilal</span>
              </span>
            </h2>
          </div>
          <p className={styles.text}>
            I&apos;m a full-stack developer based in Lahore, Pakistan. I build
            modern web applications end-to-end — from polished React.js and
            Next.js front-ends to Node.js back-ends, REST APIs, and database
            integrations.
          </p>
          <p className={styles.text}>
            Over the past 3 years, I&apos;ve shipped 20+ projects — SaaS
            platforms, dashboards, e-commerce sites, dApps, and internal tools.
            I care about clean code, smart architecture, and apps that scale
            without becoming a mess.
          </p>
          <p className={styles.text}>
            I believe great full-stack work is invisible — users don&apos;t
            notice the code, only the experience. That&apos;s what I optimize
            for: speed at every layer, clarity in the architecture, and the
            kind of polish that makes people trust the product.
          </p>
          <a href="#contact" className={styles.link}>
            Learn about me →
          </a>
        </div>

        <div className={styles.right}>
          <div className={styles.polaroid}>
            <div className={styles.polaroidImage}>
              <img src="/profile-img.png" alt="Bilal Asif" />
            </div>
          </div>
          <p className={styles.caption}>From Lahore with ❤️</p>
        </div>
      </div>
    </section>
  )
}
