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
const WEB3FORMS_KEY = 'cd7d8b44-c4b6-40d6-ad19-4af845886f5c'

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
    botcheck: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

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

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    if (form.botcheck) return // honeypot — bot detected, silently drop

    setStatus('loading')
    setErrorMsg('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New project inquiry — ${form.type}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          project_type: form.type,
          message: form.message,
          botcheck: form.botcheck,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setForm({
          name: '',
          email: '',
          type: projectTypes[0],
          message: '',
          botcheck: '',
        })
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Try again.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('Network error. Please try again or email me directly.')
    }
  }

  function reset() {
    setStatus('idle')
    setErrorMsg('')
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

        {status === 'success' ? (
          <div className={styles.success} role="status">
            <h3>Hell yes! 🎉</h3>
            <p>
              Thanks — your message landed in my inbox. I&apos;ll get back
              to you within 24 hours at the email you provided.
            </p>
            <button type="button" className={styles.resetBtn} onClick={reset}>
              Send another →
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* honeypot — hidden from users, traps bots */}
            <input
              type="checkbox"
              name="botcheck"
              checked={!!form.botcheck}
              onChange={handleChange}
              className={styles.honeypot}
              tabIndex="-1"
              autoComplete="off"
            />

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
                  disabled={status === 'loading'}
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
                  disabled={status === 'loading'}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="type">Project type</label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={handleChange}
                disabled={status === 'loading'}
              >
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
                disabled={status === 'loading'}
              />
              {errors.message && (
                <span className={styles.error}>{errors.message}</span>
              )}
            </div>

            {status === 'error' && (
              <div className={styles.errorBox} role="alert">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              className={styles.button}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <span className={styles.spinner} aria-hidden="true" />
                  Sending...
                </>
              ) : (
                <>Hell yes! Send it →</>
              )}
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
