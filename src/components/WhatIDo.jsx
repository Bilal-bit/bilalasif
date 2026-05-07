import { useRef } from 'react'
import useCountUp from '../hooks/useCountUp'
import useTextReveal from '../hooks/useTextReveal'
import useSectionReveal from '../hooks/useSectionReveal'
import styles from './WhatIDo.module.css'

function StatBox({ target, label }) {
  const { count, ref } = useCountUp(target, 2000)
  return (
    <div className={styles.stat} ref={ref}>
      <span className={styles.statNumber}>{count}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

export default function WhatIDo() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  useSectionReveal(sectionRef)
  useTextReveal(headingRef)

  return (
    <section className={`${styles.section} stack-section`} id="whatido" ref={sectionRef}>
      <div className={styles.container}>
        <span className={styles.label}>FULL-STACK DEVELOPER</span>
        <div ref={headingRef}>
          <h2 className={styles.heading}>
            <span className="line-reveal">
              <span className="line-reveal-inner">I build modern web apps</span>
            </span>
            <span className="line-reveal">
              <span className="line-reveal-inner">end-to-end — from polished UIs</span>
            </span>
            <span className="line-reveal">
              <span className="line-reveal-inner">to scalable APIs and databases.</span>
            </span>
          </h2>
        </div>
        <div className={styles.stats}>
          <StatBox target={3} label="Years Experience" />
          <StatBox target={20} label="Projects" />
          <StatBox target={10} label="Technologies" />
        </div>
      </div>
    </section>
  )
}
