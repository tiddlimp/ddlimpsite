import { useEffect, useState, useRef } from 'react'
import { FaCalendarAlt, FaBuilding, FaUsers, FaTruck } from 'react-icons/fa'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { icon: FaCalendarAlt, value: 30, suffix: '+', label: 'Anos de Experiência' },
    { icon: FaBuilding, value: 5, suffix: '', label: 'Empresas no Grupo' },
    { icon: FaUsers, value: 1000, suffix: '+', label: 'Clientes Atendidos' },
    { icon: FaTruck, value: 50, suffix: '+', label: 'Equipamentos' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const AnimatedNumber = ({ value, suffix }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [isVisible, value])

    return (
      <span>
        {count.toLocaleString()}{suffix}
      </span>
    )
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-primary via-primary-dark to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                <stat.icon className="text-white text-3xl" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-blue-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
