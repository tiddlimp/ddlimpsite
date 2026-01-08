import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once animated, stop observing
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options.threshold, options.rootMargin])

  return { ref, isVisible }
}

// Animated Section Wrapper Component
export const AnimatedSection = ({ 
  children, 
  animation = 'fadeUp', 
  delay = 0,
  className = '',
  ...props 
}) => {
  const { ref, isVisible } = useScrollAnimation()

  const animations = {
    fadeUp: 'animate-fadeUp',
    fadeDown: 'animate-fadeDown',
    fadeLeft: 'animate-fadeLeft',
    fadeRight: 'animate-fadeRight',
    fadeIn: 'animate-fadeIn',
    scaleUp: 'animate-scaleUp',
    blur: 'animate-blur',
  }

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animations[animation] : 'opacity-0'}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default useScrollAnimation
