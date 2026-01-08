import { FaToilet, FaBox, FaTruck, FaTint, FaWater, FaIndustry, FaArrowRight } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaToilet,
      title: 'Banheiros Químicos',
      description: 'Soluções completas em banheiros químicos para eventos e locais sem saneamento.',
      items: ['Masculino', 'Feminino', 'PCD Acessível'],
      color: 'from-blue-500 to-blue-600',
      image: '/images/servico-banheiro.png'
    },
    {
      icon: FaBox,
      title: 'Containers',
      description: 'Containers adaptados para diversas necessidades do seu projeto ou empresa.',
      items: ['Escritório', 'Almoxarifado', 'Vestiário', 'Personalizado'],
      color: 'from-primary to-primary-dark',
      image: '/images/servico-container.png'
    },
    {
      icon: FaTruck,
      title: 'Caminhão Munck',
      description: 'Transporte e içamento de cargas pesadas com precisão e segurança.',
      items: ['Içamento', 'Transporte', 'Montagem'],
      color: 'from-indigo-500 to-indigo-600',
      image: '/images/servico-munck.png'
    },
    {
      icon: FaTint,
      title: 'Caminhão Pipa',
      description: 'Abastecimento de água potável e técnica para obras e eventos.',
      items: ['Água Potável', 'Água Técnica', 'Limpeza'],
      color: 'from-cyan-500 to-cyan-600',
      image: '/images/servico-pipa.jpg'
    },
    {
      icon: FaWater,
      title: 'Caminhão Hidro',
      description: 'Serviços de hidrojateamento para limpeza pesada e desobstrução.',
      items: ['Hidrojateamento', 'Desobstrução', 'Limpeza Industrial'],
      color: 'from-teal-500 to-teal-600',
      image: '/images/servico-hidro.png'
    },
    {
      icon: FaIndustry,
      title: 'Caminhão Vácuo',
      description: 'Sucção de resíduos líquidos e semi-sólidos com equipamentos modernos.',
      items: ['Sucção', 'Transporte', 'Descarte Legal'],
      color: 'from-slate-600 to-slate-700',
      image: '/images/servico-vacuo.png'
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Soluções completas para <span className="text-primary">seu projeto</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de locação e transporte para 
            atender todas as necessidades da sua obra ou evento.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary/20 hover:-translate-y-2"
            >
              {/* Header with gradient or image */}
              {service.image ? (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`}></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                      <service.icon className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
              ) : (
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {item}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={scrollToContact}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 group/btn"
                >
                  Solicitar Orçamento
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-6 rounded-2xl">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-1">Precisa de uma solução personalizada?</h3>
              <p className="text-blue-100">Entre em contato e receba um orçamento sob medida!</p>
            </div>
            <button 
              onClick={scrollToContact}
              className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
