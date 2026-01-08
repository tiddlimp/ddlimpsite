import { FaWhatsapp, FaPhone, FaArrowRight } from 'react-icons/fa'

const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-lg">
              Entre em contato agora mesmo e receba um orçamento personalizado 
              para as necessidades do seu projeto. Atendimento rápido e sem compromisso!
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/5513996007426?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <FaWhatsapp className="text-2xl" />
                Chamar no WhatsApp
              </a>

              <button 
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 bg-white text-primary px-6 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
              >
                Enviar Mensagem
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:text-right">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-white font-bold text-xl mb-6">Fale Conosco</h3>
              
              <div className="space-y-4">
                <a 
                  href="tel:+5513996007426" 
                  className="flex items-center gap-4 text-white hover:text-blue-200 transition-colors"
                >
                  <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FaPhone className="text-xl" />
                  </span>
                  <div className="text-left">
                    <p className="text-blue-200 text-sm">Telefone</p>
                    <p className="font-bold text-lg">(13) 99600-7426</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/5513996007426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white hover:text-blue-200 transition-colors"
                >
                  <span className="w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center">
                    <FaWhatsapp className="text-xl" />
                  </span>
                  <div className="text-left">
                    <p className="text-blue-200 text-sm">WhatsApp</p>
                    <p className="font-bold text-lg">(13) 99600-7426</p>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20 text-blue-200 text-sm">
                Atendimento de segunda a sábado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
