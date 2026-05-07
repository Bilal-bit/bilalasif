import { useRef, useState } from 'react'
import useTextReveal from '../hooks/useTextReveal'
import useSectionReveal from '../hooks/useSectionReveal'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: 'What technologies do you work with?',
    a: 'On the front-end: React.js, Next.js, Tailwind, TypeScript. On the back-end: Node.js, Express, REST APIs, plus PostgreSQL, MongoDB and SQL for data. Comfortable across the full stack.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Depends on scope. A landing page is usually 1–2 weeks. A full-stack dashboard or web app with custom APIs and a database typically lands in 4–8 weeks.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Absolutely. I\'ve worked with clients across different time zones and communicate fluently in English. Flexible with schedules and always clear in updates.',
  },
  {
    q: 'What\'s your build process?',
    a: 'I start by understanding your goals, then plan architecture (front-end, API, database). After alignment I build in sprints with regular check-ins so you\'re never in the dark.',
  },
  {
    q: 'Can you work with existing codebases?',
    a: 'Yes — I regularly jump into existing React, Next.js, and Node projects. I can refactor, optimize, and extend codebases while keeping the existing architecture intact.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes, I offer post-launch support for bug fixes, performance tuning, and small feature additions. We can discuss a retainer or per-request arrangement.',
  },
  {
    q: 'How do we get started?',
    a: 'Just hit the "Let\'s talk" button or send me an email. Tell me about your project and I\'ll get back to you within 24 hours with next steps.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button className={styles.question} onClick={onToggle}>
        <span>{faq.q}</span>
        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
      </button>
      <div className={styles.answerWrap}>
        <p className={styles.answer}>{faq.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)
  useSectionReveal(sectionRef)
  useTextReveal(headingRef)

  return (
    <section className={`${styles.section} stack-section`} ref={sectionRef}>
      <div className={styles.container}>
        <span className={styles.label}>FAQ</span>
        <div ref={headingRef}>
          <h2 className={styles.heading}>
            <span className="line-reveal">
              <span className="line-reveal-inner">Questions I get</span>
            </span>
            <span className="line-reveal">
              <span className="line-reveal-inner">asked a lot</span>
            </span>
          </h2>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
