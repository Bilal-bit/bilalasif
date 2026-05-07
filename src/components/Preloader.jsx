import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import styles from './Preloader.module.css'

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0)
  const wrapperRef = useRef(null)
  const counterRef = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    const obj = { val: 0 }

    gsap.to(obj, {
      val: 100,
      duration: 2.4,
      ease: 'power2.inOut',
      onUpdate: () => setCount(Math.round(obj.val)),
      onComplete: () => {
        gsap.to(counterRef.current, {
          opacity: 0,
          y: -30,
          duration: 0.4,
          ease: 'power2.in',
        })
        gsap.to(wrapperRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power3.inOut',
          delay: 0.5,
          onComplete: () => onComplete(),
        })
      },
    })
  }, [onComplete])

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.counter} ref={counterRef}>
        <span className={styles.number}>{count}</span>
        <span className={styles.percent}>%</span>
      </div>
    </div>
  )
}
