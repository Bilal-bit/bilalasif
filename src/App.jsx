import { useState, useCallback } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import Projects from './components/Projects'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Experience from './components/Experience'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <Projects />
        <About />
        <Testimonials />
        <Experience />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
