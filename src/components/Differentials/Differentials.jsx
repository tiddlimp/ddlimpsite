import { FaClock, FaShieldAlt, FaTruck, FaHeadset, FaAward, FaLeaf } from 'react-icons/fa'

const Differentials = () => {
  const differentials = [
    {
      icon: FaClock,
      title: 'Agilidade',
      description: 'Atendimento rápido e eficiente para suas demandas com prazos que cabem no seu projeto.',
    },
    {
      icon: FaShieldAlt,
      title: 'Segurança Garantida',
      description: ' certificados e manutenção rigorosa para sua total segurança.',
    },
    {
      icon: FaTruck,
      title: 'Entrega Rápida',
      description: 'Logística eficiente para garantir que seus equipamentos cheguem no prazo.',
    },
    {
      icon: FaHeadset,
      title: 'Suporte Técnico',
      description: 'Equipe especializada pronta para resolver qualquer questão técnica.',
    },
    {
      icon: FaAward,
      title: 'Qualidade Premium',
      description: 'Equipamentos de primeira linha com manutenção preventiva constante.',
    },
    {
      icon: FaLeaf,
      title: 'Sustentabilidade',
      description: 'Práticas ambientalmente responsáveis em todos os nossos processos.',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/20 text-primary-light px-4 py-2 rounded-full text-sm font-semibold mb-4">
            DIFERENCIAIS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por que escolher o <span className="text-primary-light">Grupo DDLIMP</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nossa experiência de mais de 30 anos nos permite oferecer um serviço diferenciado e de alta qualidade.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((diff, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-primary/30">
                <diff.icon className="text-white text-2xl" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{diff.title}</h3>
              <p className="text-gray-400 leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          {[
            { value: '30+', label: 'Anos de Experiência' },
            { value: '5', label: 'Empresas no Grupo' },
            { value: '1000+', label: 'Clientes Satisfeitos' },
            { value: '100%', label: 'Comprometimento' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-light mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentials
