import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'My Process', href: '#whatido' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const desktopLinks = navLinks.slice(1, 4)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    function onKey(e) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  function scrollToTop(e) {
    e.preventDefault()
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleLinkClick() {
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`${styles.navbar} ${
          scrolled && !menuOpen ? styles.scrolled : ''
        } ${menuOpen ? styles.navbarOnOverlay : ''}`}
      >
        <div className={styles.inner}>
          <a href="#" className={styles.logo} onClick={scrollToTop} aria-label="Bilal Asif — home">
            BA
          </a>

          <div className={styles.links}>
            {desktopLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className={styles.pill}>
              <span className={styles.pillAvatar}>
                <img src="/profile-img.png" alt="Bilal" />
              </span>
              Let&apos;s talk
            </a>
          </div>

          <button
            type="button"
            className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={styles.menuLabel}>MENU</span>
            <span className={styles.menuIcon} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.overlayLinks}>
          {navLinks.map((link, i) => (
            <li key={link.label} style={{ transitionDelay: `${0.08 + i * 0.05}s` }}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.overlayFooter}>
          <a href="mailto:ba123212gol@gmail.com">ba123212gol@gmail.com</a>
        </div>
      </div>
    </>
  )
}
