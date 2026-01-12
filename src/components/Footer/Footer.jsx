import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const companies = [
    { src: '/images/logoDdlimp.png', name: 'DDLIMP' },
    { src: '/images/logoDdmar.png', name: 'DDMAR' },
    { src: '/images/logoBGlocacoes.png', name: 'BG Locações' },
    { src: '/images/logoGiospace.png', name: 'GIOSPACE' },
  ]

  const quickLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contato' },
  ]

  const services = [
    'Banheiros Químicos',
    'Containers',
    'Caminhão Munck',
    'Caminhão Pipa',
    'Caminhão Hidro',
    'Caminhão Vácuo',
  ]

  const socialLinks = [
    { icon: FaFacebook, href: 'https://web.facebook.com/GrupoDDlimpPG', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/grupoddlimp/', label: 'Instagram' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/grupo-ddlimp/', label: 'LinkedIn' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@grupoddlimp', label: 'YouTube' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img 
              src="/images/logoGrupoddlimp.png" 
              alt="Grupo DDLIMP" 
              className="h-12 mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Há mais de 30 anos oferecendo soluções completas em locação de 
              equipamentos e serviços especializados para obras e eventos.
            </p>
            
            {/* Company Logos */}
            <div className="flex flex-wrap gap-3">
              {companies.map((company, index) => (
                <div 
                  key={index}
                  className="w-12 h-12 bg-white/10 rounded-lg p-2 flex items-center justify-center"
                  title={company.name}
                >
                  <img 
                    src={company.src} 
                    alt={company.name}
                    className="max-h-full max-w-full object-contain brightness-0 invert opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-light transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+5513996007426" className="flex items-start gap-3 text-gray-400 hover:text-primary-light transition-colors">
                  <FaPhone className="mt-1" />
                  <span>(13) 99600-7426</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/5513996007426" className="flex items-start gap-3 text-gray-400 hover:text-primary-light transition-colors">
                  <FaWhatsapp className="mt-1" />
                  <span>(13) 99600-7426</span>
                </a>
              </li>
              <li>
                <a href="mailto:orcamento@bgpg.com.br" className="flex items-start gap-3 text-gray-400 hover:text-primary-light transition-colors">
                  <FaEnvelope className="mt-1" />
                  <span>orcamento@bgpg.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="mt-1" />
                <span>Rua São Vicente, 44<br />Boqueirão, Praia Grande/SP</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Grupo DDLIMP. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <Link to="/politica-de-privacidade" className="text-gray-500 hover:text-primary-light transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos-de-uso" className="text-gray-500 hover:text-primary-light transition-colors">
                Termos de Uso
              </Link>
              <Link to="/trabalhe-conosco" className="text-gray-500 hover:text-primary-light transition-colors">
                Trabalhe Conosco
              </Link>
            </div>

            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
              aria-label="Voltar ao topo"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
