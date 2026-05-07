import { useRef } from 'react'
import useTextReveal from '../hooks/useTextReveal'
import useSectionReveal from '../hooks/useSectionReveal'
import styles from './Projects.module.css'
import petsinImg from '../assets/petsin.png'
import trashmycodeImg from '../assets/trashmycode.png'
import aabdarImg from '../assets/aabdar.png'
import agoraImg from '../assets/agora.png'

const projects = [
  {
    num: '01',
    title: 'Petsin.pk',
    desc: 'A full-stack Pakistani pet platform for buying, adopting, and connecting with pets. Built end-to-end with a smooth browsing UI, listing management, and a back-end powering search, filters, and user accounts.',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    url: 'https://petsin.pk',
    image: petsinImg,
  },
  {
    num: '02',
    title: 'TrashMyCode',
    desc: 'A developer-facing SaaS that cleans and refactors messy codebases. Built with a snappy React UI, a Node.js processing back-end, and an API designed to handle complex transformations with ease.',
    tags: ['React', 'Node.js', 'REST API'],
    url: 'https://trashmycode.site',
    image: trashmycodeImg,
  },
  {
    num: '03',
    title: 'Aabdar',
    desc: 'A modern, content-rich web platform with a custom CMS-driven back-end and a polished, fully responsive front-end. Smooth navigation, dynamic content, and pixel-perfect detail across every breakpoint.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    url: 'https://aabdar.com',
    image: aabdarImg,
  },
  {
    num: '04',
    title: 'Agora — Elysium Chain',
    desc: 'A Web3 governance and voting dApp built for the Elysium blockchain ecosystem. Real-time on-chain data, wallet integration, smart-contract calls, and a polished interface — front-end to chain.',
    tags: ['React', 'Web3', 'Solidity'],
    url: 'https://agora.elysiumchain.tech/',
    image: agoraImg,
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  useSectionReveal(sectionRef)
  useTextReveal(headingRef)

  return (
    <section className={`${styles.section} stack-section`} id="projects" ref={sectionRef}>
      <div className={styles.container}>
        <span className={styles.label}>WHAT I&apos;VE BUILT</span>
        <div ref={headingRef}>
          <h2 className={styles.heading}>
            <span className="line-reveal">
              <span className="line-reveal-inner">What saying &ldquo;Yes!&rdquo;</span>
            </span>
            <span className="line-reveal">
              <span className="line-reveal-inner">looks like</span>
            </span>
          </h2>
        </div>

        <div className={styles.list}>
          {projects.map((project) => (
            <div key={project.num} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.cardLeft}>
                  <span className={styles.cardNum}>({project.num})</span>
                  <div>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardDesc}>{project.desc}</p>
                    <div className={styles.cardTags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.cardTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      Visit live site <span className={styles.arrow}>→</span>
                    </a>
                  </div>
                </div>
                <div className={styles.cardRight}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.imgPlaceholder}
                    aria-label={`Open ${project.title}`}
                  >
                    {project.image ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      <span>{project.title}</span>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.seeAll}>
          <a
            href="https://github.com/Bilal-bit/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.outlineBtn}
          >
            More on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
