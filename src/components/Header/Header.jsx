import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaWhatsapp, FaChevronRight } from 'react-icons/fa'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('hero')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
      return
    }
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveItem(sectionId)
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: 'Início', id: 'hero', action: () => scrollToSection('hero') },
    { label: 'Sobre', id: 'sobre', action: () => scrollToSection('sobre') },
    { label: 'Serviços', id: 'servicos', action: () => scrollToSection('servicos') },
    { label: 'Portfólio', id: 'portfolio', action: () => scrollToSection('portfolio') },
    { label: 'Contato', id: 'contato', action: () => scrollToSection('contato') },
    { label: 'Trabalhe conosco', id: 'trabalhe-conosco', action: () => window.location.href = '/trabalhe-conosco' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white shadow-md py-0'}`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center group">
          <img 
            src="/images/logooficial.png" 
            alt="Grupo DD Limp" 
            className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-1 bg-gray-50 rounded-full p-1.5">
            {navItems.map((item, index) => (
              <li key={index}>
                <button 
                  onClick={item.action} 
                  className={`relative px-5 py-2.5 font-medium rounded-full transition-all duration-300 ${
                    activeItem === item.id 
                      ? 'text-white bg-primary shadow-md' 
                      : 'text-gray-600 hover:text-primary hover:bg-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/5513996007426?text=Olá! Gostaria de solicitar um orçamento." 
            className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full font-semibold text-sm hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-lg" />
            Solicitar Orçamento
          </a>

          <button 
            className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${isMobileMenuOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-0'}`}>
              <FaTimes className="text-xl" />
            </span>
            <span className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
              <FaBars className="text-xl" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li 
                key={index}
                className="transform transition-all duration-300"
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
              >
                <button 
                  onClick={item.action} 
                  className={`group w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-300 ${
                    activeItem === item.id 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent hover:text-primary'
                  }`}
                >
                  <span className="font-semibold text-lg">{item.label}</span>
                  <FaChevronRight className={`transition-transform duration-300 ${activeItem === item.id ? 'translate-x-0' : 'group-hover:translate-x-1 opacity-50'}`} />
                </button>
              </li>
            ))}
          </ul>
          
          <div 
            className="mt-6 pt-6 border-t border-gray-200"
            style={{ 
              transitionDelay: isMobileMenuOpen ? '250ms' : '0ms',
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(10px)',
              opacity: isMobileMenuOpen ? 1 : 0,
              transition: 'all 0.3s ease'
            }}
          >
            <a 
              href="https://wa.me/5513996007426?text=Olá! Gostaria de solicitar um orçamento." 
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl" />
              Chamar no WhatsApp
            </a>
          </div>
          
          <p className="text-center text-gray-400 text-sm mt-6">
            Grupo DDLIMP © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
