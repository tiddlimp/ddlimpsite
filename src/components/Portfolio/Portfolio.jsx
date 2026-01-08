import { useState, useEffect, useRef } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight, FaPlay, FaMapMarkerAlt, FaCalendarAlt, FaCube, FaArrowRight } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('todos')
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const scrollRef = useRef(null)

  const categories = [
    { id: 'todos', label: 'Todos os Projetos', count: 9 },
    { id: 'banheiros', label: 'Banheiros Químicos', count: 3 },
    { id: 'containers', label: 'Containers', count: 4 },
    { id: 'caminhoes', label: 'Caminhões Munck', count: 1 },
    { id: 'hidrojateamento', label: 'Hidrojateamento', count: 1 },
  ]

  const projects = [
    {
      id: 2,
      category: 'containers',
      title: 'Container Pia',
      subtitle: 'Higienização Prática',
      description: 'Container equipado com pias e lavatórios para higienização das mãos. Ideal para eventos e áreas de alimentação, garantindo higiene e praticidade.',
      image: '/images/container-pia-portfolio.png',
      location: 'Praia Grande, SP',
      date: 'Novembro 2024',
      stats: { value: '', label: 'Locação' },
      color: 'from-sky-500 to-indigo-500',
    },
    {
      id: 3,
      category: 'containers',
      title: 'Container Escritório',
      subtitle: 'Ambiente Corporativo',
      description: 'Container adaptado como escritório completo com ar-condicionado, iluminação, tomadas e acabamento de alto padrão. Ideal para canteiros de obras e bases operacionais.',
      image: '/images/container-escritorio-portfolio.jpeg',
      location: 'Praia Grande, SP',
      date: 'Outubro 2024',
      stats: { value: '', label: 'Locação' },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 4,
      category: 'containers',
      title: 'Container Vestiário',
      subtitle: 'Conforto para Equipes',
      description: 'Container vestiário equipado com bancos, espelhos e área para troca de uniformes. Solução prática para obras e eventos.',
      image: '/images/container-vestiario-portfolio.png',
      location: 'Santos, SP',
      date: 'Junho 2024',
      stats: { value: '', label: 'Locação' },
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 5,
      category: 'containers',
      title: 'Container Almoxarifado',
      subtitle: 'Armazenamento Seguro',
      description: 'Container almoxarifado com prateleiras, iluminação e elétrica pronta para uso. Perfeito para armazenar ferramentas, materiais e equipamentos em obras.',
      image: '/images/container-almoxarifado-portfolio.jpeg',
      location: 'Praia Grande, SP',
      date: 'Janeiro 2025',
      stats: { value: '', label: 'Locação' },
      color: 'from-amber-500 to-orange-500',
    },
    {
      id: 6,
      category: 'caminhoes',
      title: 'Movimentação de Container e Cargas Pesadas',
      subtitle: 'Içamento Industrial',
      description: 'Operação de içamento e posicionamento de containers e equipamentos industriais pesados utilizando caminhão munck de alta capacidade.',
      image: '/images/servico-munck-portfolio.png',
      location: 'Praia Grande, SP',
      date: 'Janeiro 2025',
      stats: { value: '', label: 'Munck' },
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 7,
      category: 'banheiros',
      title: 'Réveillon de Cubatão SP',
      subtitle: 'Evento de Final de Ano',
      description: 'Fornecimento de mais de 170 banheiros químicos para a celebração de final de ano em Cubatão, garantindo conforto e higiene para milhares de participantes.',
      image: '/images/banheiros-evento-portfolio.png',
      location: 'Cubatão, SP',
      date: 'Dezembro 2024',
      stats: { value: '170+', label: 'Sanitários Locados' },
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 8,
      category: 'banheiros',
      title: 'Evento Estação Verão Show',
      subtitle: 'Estação Verão Show',
      description: 'Fornecimento de containers sanitários equipados com ar condicionado e banheiros químicos para o evento Estação Verão Show, garantindo conforto e higiene para todos os participantes.',
      image: '/images/container-sanitario-portfolio.png',
      location: 'Praia Grande, SP',
      date: 'Janeiro 2025',
      stats: { value: '280+', label: 'Sanitários Locados' },
      color: 'from-teal-500 to-green-500',
    },
    {
      id: 10,
      category: 'banheiros',
      title: 'Show Henrique e Juliano',
      subtitle: 'Vila Belmiro',
      description: 'Fornecimento de 180 banheiros químicos para o show de Henrique e Juliano na Vila Belmiro, Santos. Estrutura completa para garantir conforto e higiene aos milhares de fãs presentes.',
      image: '/images/banheiro-vilabelmiro-portfolio.png',
      location: 'Santos, SP',
      date: 'Dezembro 2025',
      stats: { value: '180', label: 'Sanitários Locados' },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 9,
      category: 'hidrojateamento',
      title: 'Vestcasa',
      subtitle: 'Limpeza de Estacionamento',
      description: 'Serviço de hidrojateamento profissional realizado no estacionamento da Vestcasa. Limpeza completa com equipamentos de alta pressão para remoção de sujeiras, manchas de óleo e resíduos acumulados.',
      image: '/images/hidrojateamento-portfolio.jpg',
      location: 'Praia Grande, SP',
      date: 'Janeiro 2025',
      stats: { value: '', label: 'Hidrojateamento' },
      color: 'from-cyan-500 to-blue-500',
    },
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  // Auto-rotate featured project
  useEffect(() => {
    if (isHovering) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.min(filteredProjects.length, 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [filteredProjects.length, isHovering])

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return
      const currentIdx = filteredProjects.findIndex(p => p.id === selectedProject.id)
      if (e.key === 'ArrowLeft' && currentIdx > 0) {
        setSelectedProject(filteredProjects[currentIdx - 1])
      }
      if (e.key === 'ArrowRight' && currentIdx < filteredProjects.length - 1) {
        setSelectedProject(filteredProjects[currentIdx + 1])
      }
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject, filteredProjects])

  const featuredProjects = filteredProjects.slice(0, 3)
  const activeProject = featuredProjects[activeIndex] || featuredProjects[0]

  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4">
              <HiSparkles className="text-lg" />
              <span>PORTFÓLIO DE SUCESSO</span>
              <div className="w-12 h-px bg-primary"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Projetos que
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">
                fazem a diferença
              </span>
            </h2>
          </div>
          
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="/images/logoGrupoddlimp.png" 
              alt="Grupo DD Limp" 
              className="h-24 md:h-32 w-auto object-contain"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 overflow-x-auto scrollbar-hide -mx-5 px-5">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveFilter(cat.id); setActiveIndex(0); }}
                className={`group relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                  activeFilter === cat.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  {cat.label}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    activeFilter === cat.id 
                      ? 'bg-primary text-gray-900' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {cat.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Showcase */}
        {activeProject && (
          <div 
            className="relative mb-12 rounded-3xl overflow-hidden bg-gray-900 group cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setSelectedProject(activeProject)}
          >
            <div className="grid lg:grid-cols-2 min-h-[500px]">
              {/* Image Side */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${activeProject.color} mix-blend-multiply opacity-40`}></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <FaPlay className="text-white text-xl ml-1" />
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-6 left-6 flex gap-2">
                  {featuredProjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? 'w-8 bg-white' : 'w-4 bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${activeProject.color}`}>
                    {activeProject.subtitle}
                  </span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {activeProject.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {activeProject.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaMapMarkerAlt className="text-primary" />
                    <span>{activeProject.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaCalendarAlt className="text-primary" />
                    <span>{activeProject.date}</span>
                  </div>
                </div>

                {/* Stats Box */}
                <div className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div>
                    <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${activeProject.color}`}>
                      {activeProject.stats.value}
                    </div>
                    <div className="text-gray-500 text-sm">{activeProject.stats.label}</div>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-primary transition-colors group/btn">
                    Ver Projeto
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60`}></div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                
                {/* Centered Content on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <FaCube className="text-xl" />
                    </div>
                    <span className="font-semibold">Ver Detalhes</span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full">
                    {project.stats.value} {project.stats.label.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                  <FaMapMarkerAlt className="text-primary text-[10px]" />
                  <span>{project.location}</span>
                  <span className="text-gray-300">•</span>
                  <span>{project.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Bottom Gradient Line */}
              <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${project.color} transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-14">
          <a 
            href="#contato"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-primary hover:text-gray-900 transition-all duration-300 group"
          >
            <span>Solicite um orçamento</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <FaTimes className="text-xl" />
          </button>

          {/* Navigation Arrows */}
          {filteredProjects.findIndex(p => p.id === selectedProject.id) > 0 && (
            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 z-50"
              onClick={(e) => { 
                e.stopPropagation()
                const idx = filteredProjects.findIndex(p => p.id === selectedProject.id)
                setSelectedProject(filteredProjects[idx - 1])
              }}
            >
              <FaChevronLeft />
            </button>
          )}

          {filteredProjects.findIndex(p => p.id === selectedProject.id) < filteredProjects.length - 1 && (
            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 z-50"
              onClick={(e) => { 
                e.stopPropagation()
                const idx = filteredProjects.findIndex(p => p.id === selectedProject.id)
                setSelectedProject(filteredProjects[idx + 1])
              }}
            >
              <FaChevronRight />
            </button>
          )}

          {/* Modal Content */}
          <div 
            className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hero Image */}
            <div className="relative h-64 md:h-96">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent`}></div>
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${selectedProject.color} mb-4`}>
                  {selectedProject.subtitle}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              {/* Meta Row */}
              <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Localização</div>
                    <div className="font-medium">{selectedProject.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <FaCalendarAlt className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Data</div>
                    <div className="font-medium">{selectedProject.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 ml-auto">
                  <div className={`px-6 py-3 rounded-2xl bg-gradient-to-r ${selectedProject.color}`}>
                    <div className="text-2xl font-bold text-white">{selectedProject.stats.value}</div>
                    <div className="text-xs text-white/80">{selectedProject.stats.label}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Sobre o Projeto</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {selectedProject.description}
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contato"
                  className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${selectedProject.color} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300`}
                  onClick={() => setSelectedProject(null)}
                >
                  Quero um projeto assim
                  <FaArrowRight />
                </a>
                <a 
                  href="https://wa.me/5513996007426?text=Olá! Gostaria de um orçamento para este tipo de projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
            {filteredProjects.findIndex(p => p.id === selectedProject.id) + 1} / {filteredProjects.length}
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio
