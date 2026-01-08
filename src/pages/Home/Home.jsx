import { useEffect, useRef } from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Differentials from '../../components/Differentials/Differentials'
import Portfolio from '../../components/Portfolio/Portfolio'
import Stats from '../../components/Stats/Stats'
import Testimonials from '../../components/Testimonials/Testimonials'
import CTA from '../../components/CTA/CTA'
import FAQ from '../../components/FAQ/FAQ'
import Contact from '../../components/Contact/Contact'

// Custom hook for scroll animations
const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          // Add stagger effect to children if needed
          const staggerChildren = entry.target.querySelectorAll('[data-stagger]')
          staggerChildren.forEach((child, index) => {
            child.style.transitionDelay = `${index * 100}ms`
            child.classList.add('is-visible')
          })
        }
      })
    }, observerOptions)

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      '.section-reveal, .slide-left, .slide-right, .scale-reveal, .blur-reveal, .stagger-children'
    )
    
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

// Animated Section Wrapper
const AnimatedSection = ({ children, animation = 'section-reveal', delay = 0, className = '' }) => {
  return (
    <div 
      className={`${animation} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const Home = () => {
  useScrollReveal()

  return (
    <main>
      {/* Hero doesn't need animation - it's the first thing users see */}
      <Hero />
      
      <AnimatedSection animation="section-reveal">
        <About />
      </AnimatedSection>
      
      <AnimatedSection animation="blur-reveal">
        <Services />
      </AnimatedSection>
      
      <AnimatedSection animation="section-reveal">
        <Differentials />
      </AnimatedSection>
      
      <AnimatedSection animation="scale-reveal">
        <Portfolio />
      </AnimatedSection>
      
      <AnimatedSection animation="blur-reveal">
        <Stats />
      </AnimatedSection>
      
      <AnimatedSection animation="section-reveal">
        <Testimonials />
      </AnimatedSection>
      
      <AnimatedSection animation="scale-reveal">
        <CTA />
      </AnimatedSection>
      
      <AnimatedSection animation="section-reveal">
        <FAQ />
      </AnimatedSection>
      
      <AnimatedSection animation="blur-reveal">
        <Contact />
      </AnimatedSection>
    </main>
  )
}

export default Home
