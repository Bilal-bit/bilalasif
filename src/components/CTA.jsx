import { useRef, useState } from 'react'
import useTextReveal from '../hooks/useTextReveal'
import useSectionReveal from '../hooks/useSectionReveal'
import styles from './CTA.module.css'

const projectTypes = [
  'Website / Landing page',
  'Web app / Dashboard',
  'E-commerce',
  'Portfolio',
  'Something else',
]

const MY_EMAIL = 'ba123212gol@gmail.com'

export default function CTA() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  useSectionReveal(sectionRef)
  useTextReveal(headingRef)

  const [form, setForm] = useState({
    name: '',
    email: '',
    type: projectTypes[0],
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Required'
    if (!form.email.trim()) next.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Invalid email'
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = 'Tell me a bit more (min 10 chars)'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    const subject = `New project inquiry — ${form.type}`
    const body =
      `Hi Bilal,\n\n` +
      `My name is ${form.name}.\n` +
      `Project type: ${form.type}\n\n` +
      `${form.message}\n\n` +
      `— Reach me at: ${form.email}`

    const mailto = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setSent(true)
  }

  return (
    <section className={`${styles.section} stack-section`} id="contact" ref={sectionRef}>
      <div className={styles.container}>
        <span className={styles.label}>WORK WITH ME</span>
        <div ref={headingRef}>
          <h2 className={styles.heading}>
            <span className="line-reveal">
              <span className="line-reveal-inner">Got a project?</span>
            </span>
            <span className="line-reveal">
              <span className="line-reveal-inner">Let&apos;s talk.</span>
            </span>
          </h2>
        </div>

        <p className={styles.lede}>
          Tell me a bit about what you&apos;re building and I&apos;ll get back
          to you within 24 hours.
        </p>

        {sent ? (
          <div className={styles.success} role="status">
            <h3>Hell yes! 🎉</h3>
            <p>
              Your email client should be open now. If not, just write me at{' '}
              <a href={`mailto:${MY_EMAIL}`} className={styles.emailLink}>
                {MY_EMAIL}
              </a>
              .
            </p>
            <button
              type="button"
              className={styles.resetBtn}
              onClick={() => {
                setSent(false)
                setForm({ name: '', email: '', type: projectTypes[0], message: '' })
              }}
            >
              Send another →
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="type">Project type</label>
              <select id="type" name="type" value={form.type} onChange={handleChange}>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Tell me about it</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="A few lines about your project, timeline, and what you need help with..."
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <span className={styles.error}>{errors.message}</span>
              )}
            </div>

            <button type="submit" className={styles.button}>
              Hell yes! Send it →
            </button>

            <p className={styles.email}>
              or just write me at{' '}
              <a href={`mailto:${MY_EMAIL}`} className={styles.emailLink}>
                {MY_EMAIL}
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
