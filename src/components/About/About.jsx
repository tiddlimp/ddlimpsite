import { FaCheck, FaAward, FaMedal, FaHandshake, FaPlay } from 'react-icons/fa'

const About = () => {
  const companies = [
    { src: '/images/logoDdlimp.png', name: 'DDLIMP' },
    { src: '/images/logoDdmar.png', name: 'DDMAR' },
    { src: '/images/logoBGlocacoes.png', name: 'BG Locações' },
    { src: '/images/logoGiospace.png', name: 'GIOSPACE' },
  ]

  const values = [
    { icon: FaAward, title: 'Excelência', text: 'Compromisso com a qualidade em tudo que fazemos' },
    { icon: FaMedal, title: 'Qualidade', text: 'Equipamentos e serviços de alto padrão' },
    { icon: FaHandshake, title: 'Confiança', text: 'Relações duradouras baseadas em transparência' },
  ]

  const highlights = [
    'Fundado em 1994 com visão de futuro',
    'Expansão com DDMAR em 2006',
    'BG Locações inaugurada em 2013',
    'Mais de 30 anos de experiência',
    'Equipe altamente qualificada',
    'Atendimento personalizado'
  ]

  return (
    <>
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            NOSSA HISTÓRIA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Conheça o <span className="text-primary">Grupo DDLIMP</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Uma trajetória de sucesso construída com dedicação, inovação e compromisso com nossos clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/images/logoGrupoddlimp.png" 
                  alt="Grupo DDLIMP" 
                  className="h-16 w-auto"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Grupo DDLIMP</h3>
                  <p className="text-primary font-medium">Desde 1994</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                O Grupo DDLIMP nasceu em 1994 com o objetivo de oferecer soluções completas 
                em locação de equipamentos e serviços especializados. Ao longo de três décadas, 
                expandimos nossa atuação e criamos empresas especializadas para atender 
                cada necessidade específica do mercado.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Em 2006, fundamos a DDMAR, ampliando nosso portfólio de serviços. 
                Em 2013, inauguramos a BG Locações, consolidando nossa posição como 
                referência no setor de locações. Hoje, com mais de 30 anos de experiência, 
                continuamos inovando e crescendo.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheck className="text-white text-xs" />
                    </span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div>
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-3xl transform rotate-2"></div>
              
              {/* Video Container */}
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/tX59_EqeusM"
                    title="Vídeo Institucional - Grupo DDLIMP"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-12 right-4 bg-primary text-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaPlay className="text-sm ml-0.5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Vídeo</p>
                    <p className="text-blue-200 text-xs">Institucional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mt-14 grid grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <value.icon className="text-primary text-xl" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">{value.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Companies Bar */}
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-white/20">
            NOSSAS MARCAS
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Empresas do <span className="text-blue-200">Grupo DDLIMP</span>
          </h3>
          <p className="text-blue-100 max-w-xl mx-auto">
            Conheça as empresas que fazem parte do nosso grupo e oferecem soluções completas para seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/10 rounded-2xl transition-all duration-500"></div>
                
                <div className="relative h-24 w-full flex items-center justify-center">
                  <img 
                    src={company.src} 
                    alt={company.name}
                    className="h-20 md:h-24 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                
                {/* Bottom line indicator */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-white group-hover:w-1/2 transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decoration */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/40"></div>
          <span className="text-blue-100 text-sm">Soluções integradas</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/40"></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
