import styles from './Footer.module.css'

const menuLinks = [
  { label: 'Portfolio', href: '#projects' },
  { label: 'Process', href: '#whatido' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bilal-asif-941720206/' },
  { label: 'GitHub', href: 'https://github.com/Bilal-bit' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Menu</h4>
            {menuLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </div>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Socials</h4>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Say Hello</h4>
            <a href="mailto:ba123212gol@gmail.com" className={styles.link}>
              ba123212gol@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>&copy; {new Date().getFullYear()} Bilal Asif. All rights reserved.</span>
          <span>From Lahore with ❤️</span>
        </div>
      </div>
    </footer>
  )
}
