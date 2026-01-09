import { useState, useEffect, useCallback } from 'react'
import { FaQuoteRight, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const testimonials = [
    {
      name: 'Cesar Visini',
      role: '',
      company: 'Cliente',
      text: 'A DDlimp possui um serviço excelente com bastante respeito ao cliente. Recomendo muito!',
      rating: 5,
      image: '/images/Cesar Visini-depoimento.png',
    },
    {
      name: 'Larissa Giugliodori',
      role: '',
      company: 'Cliente',
      text: 'Excelente atendimento com profissionais capacitados e entrega do serviço prometido com qualidade.',
      rating: 5,
      image: '/images/Larissa Giugliodori-depoimento.png',
    },
    {
      name: 'Moises do Nascimento',
      role: '',
      company: 'Cliente',
      text: 'Atendimento ótimo, sempre que preciso eu chamo. Atendimento e qualidade, banheiros maravilhosos e limpos.',
      rating: 5,
      image: '/images/Moises do Nascimento-depoimento.png',
    },
    {
      name: 'Patricía Evaristo Cunha Neukan',
      role: '',
      company: 'Cliente',
      text: 'Empresa excelente! Atendimento nota 1.000. Profissionais maravilhosos. Recomendo a DDlimp de olhos fechados!',
      rating: 5,
      image: '/images/Patricía Evaristo Cunha Neukan-depoimento.png',
    },
  ]

  const goToSlide = useCallback((index) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setTimeout(() => setIsAnimating(false), 50)
    }, 200)
  }, [isAnimating, currentIndex])

  const nextTestimonial = useCallback(() => {
    const newIndex = (currentIndex + 1) % testimonials.length
    goToSlide(newIndex)
  }, [currentIndex, testimonials.length, goToSlide])

  const prevTestimonial = useCallback(() => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
    goToSlide(newIndex)
  }, [currentIndex, testimonials.length, goToSlide])

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [nextTestimonial])

  const current = testimonials[currentIndex]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
            ⭐ DEPOIMENTOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que nossos clientes{' '}
            <span className="text-primary">dizem</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior conquista.
          </p>
        </div>

        {/* Main Content - Grid Layout */}
        <div className="grid lg:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Side - Cards Stack */}
          <div className="lg:col-span-3">
            <div className="relative h-[380px]">
              {testimonials.map((t, index) => {
                const isActive = index === currentIndex
                const isPrev = index === (currentIndex - 1 + testimonials.length) % testimonials.length
                const isNext = index === (currentIndex + 1) % testimonials.length
                
                let position = 'opacity-0 scale-90 pointer-events-none'
                let zIndex = 0
                
                if (isActive) {
                  position = 'opacity-100 scale-100 translate-x-0 translate-y-0 rotate-0'
                  zIndex = 30
                } else if (isPrev) {
                  position = 'opacity-50 scale-[0.92] -translate-x-6 translate-y-4 -rotate-2'
                  zIndex = 20
                } else if (isNext) {
                  position = 'opacity-50 scale-[0.92] translate-x-6 translate-y-4 rotate-2'
                  zIndex = 10
                }
                
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 transition-all duration-500 ease-out cursor-pointer hover:shadow-2xl ${position}`}
                    style={{ zIndex }}
                    onClick={() => goToSlide(index)}
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <FaQuoteRight className="text-primary text-lg" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-lg" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      "{t.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img 
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover ring-4 ring-primary/20"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{t.name}</h4>
                        <p className="text-primary text-sm font-medium">{t.role}</p>
                        <p className="text-gray-400 text-xs">{t.company}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button 
                onClick={prevTestimonial}
                disabled={isAnimating}
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                <FaChevronLeft />
              </button>
              
              {/* Progress Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      index === currentIndex 
                        ? 'w-10 bg-primary' 
                        : 'w-2.5 bg-gray-200 hover:bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                disabled={isAnimating}
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Right Side - Mascot */}
          <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center">
            {/* Speech Bubble */}
            <div className="relative mb-4">
              <div className="bg-gradient-to-br from-primary to-blue-600 text-white px-6 py-4 rounded-2xl shadow-xl max-w-[280px]">
                <p className="text-lg font-semibold text-center leading-snug">
                  Veja o que nossos clientes falam sobre nós! 
                </p>
                <p className="text-blue-100 text-sm text-center mt-2">
                  São mais de <span className="font-bold text-white">500 empresas</span> satisfeitas!
                </p>
              </div>
              {/* Speech bubble arrow */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[14px] border-t-primary"></div>
            </div>

            {/* Mascot Image */}
            <div className="relative">
              {/* Glow effect behind mascot */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75"></div>
              
              {/* Mascot */}
              <img 
                src="/images/banheiro-depoimentos.png" 
                alt="Mascote Grupo DD Limp"
                className="relative w-64 h-auto drop-shadow-2xl animate-bounce-slow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS for bounce animation */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Testimonials
