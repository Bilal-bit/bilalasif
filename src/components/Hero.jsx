import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useRef(null)
  const eyebrowRef = useRef(null)
  const headingRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const scrollRef = useRef(null)
  const accentRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.2 })

    tl.fromTo(
      eyebrowRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    )
      .fromTo(
        headingRef.current.querySelectorAll('.line-reveal-inner'),
        { y: '105%' },
        { y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08 },
        '-=0.3'
      )
      .fromTo(
        accentRef.current,
        { scale: 0.6, opacity: 0, rotate: -10 },
        { scale: 1, opacity: 1, rotate: -4, duration: 0.6, ease: 'back.out(2)' },
        '-=0.4'
      )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        scrollRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
  }, [])

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.bottomGradient} aria-hidden="true" />

      <div className={styles.stage}>
        <div className={styles.content}>
          <span className={styles.eyebrow} ref={eyebrowRef}>
            <span className={styles.dot} aria-hidden="true" />
            Full-Stack Developer · Available for work
          </span>

          <h1 className={styles.heading} ref={headingRef}>
            <span className={`line-reveal ${styles.line}`}>
              <span className="line-reveal-inner">I build modern websites</span>
            </span>
            <span className={`line-reveal ${styles.line}`}>
              <span className="line-reveal-inner">
                people actually{' '}
                <span className={styles.accent} ref={accentRef}>love.</span>
              </span>
            </span>
          </h1>

          <p className={styles.subtitle} ref={subtitleRef}>
            I&apos;m Bilal — a full-stack developer building modern web apps
            end-to-end. Polished React UIs on the front, robust APIs and
            databases on the back.
          </p>

          <div className={styles.ctaRow} ref={ctaRef}>
            <a href="#projects" className={styles.ctaPrimary}>
              See my work →
            </a>
            <a href="#contact" className={styles.ctaSecondary}>
              Let&apos;s talk
            </a>
          </div>
        </div>

        <div className={styles.scrollIndicator} ref={scrollRef}>
          <span>(SCROLL TO SEE WORK)</span>
        </div>
      </div>
    </section>
  )
}
