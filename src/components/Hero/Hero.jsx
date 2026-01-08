import { useState, useEffect } from 'react'
import { FaArrowRight, FaPlay, FaCheck } from 'react-icons/fa'

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  const heroImages = [
    '/images/hero-foto.png',
    '/images/hero-banfem.png',
    '/images/hero-lavatorio.png',
    '/images/hero-munck.png',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    'Mais de 30 anos de experiência',
    'Equipe especializada',
    'Qualidade garantida'
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Líder em soluções de locação
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Soluções completas em 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                locação e serviços
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
              Há mais de 30 anos oferecendo excelência em banheiros químicos, 
              containers e caminhões especializados para sua obra ou evento.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button 
                onClick={scrollToContact}
                className="group inline-flex items-center gap-2 bg-white text-primary px-6 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Solicitar Orçamento
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={scrollToPortfolio}
                className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-xl font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all"
              >
                <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FaPlay className="text-sm ml-0.5" />
                </span>
                Ver Portfólio
              </button>
            </div>

            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-blue-100">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <FaCheck className="text-white text-xs" />
                  </span>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-primary-light/20 rounded-full blur-2xl"></div>
              
              {/* Image container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl transform rotate-3"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 h-[450px]">
                  {heroImages.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`Grupo DDLIMP - Soluções em Locação ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        currentImage === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">30+</span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold">Anos de</p>
                      <p className="text-primary font-semibold">Experiência</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
