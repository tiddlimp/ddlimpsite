import { useState, useRef } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(false)
    
    try {
      await emailjs.sendForm(
        'service_ng48ypm', // Service ID do EmailJS
        'template_nth1e8o', // Template ID do EmailJS
        formRef.current,
        'UceFglZtaI-8aLY2i' // Public Key
      )
      
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error('Erro ao enviar:', err)
      setIsSubmitting(false)
      setError(true)
      setTimeout(() => setError(false), 5000)
    }
  }

  const contactInfo = [
    { icon: FaMapMarkerAlt, label: 'Endereço', value: 'Rua São Vicente, 44 - Boqueirão, Praia Grande/SP' },
    { icon: FaPhone, label: 'Telefone', value: '(13) 99600-7426', href: 'tel:+5513996007426' },
    { icon: FaWhatsapp, label: 'WhatsApp', value: '(13) 99600-7426', href: 'https://wa.me/5513996007426' },
    { icon: FaEnvelope, label: 'E-mail', value: 'orcamento@bgpg.com.br', href: 'mailto:orcamento@bgpg.com.br' },
    { icon: FaClock, label: 'Horário', value: 'Seg - Sex: 8h às 18h | Sáb: 8h às 12h' },
  ]

  const services = [
    'Banheiros Químicos',
    'Containers',
    'Caminhão Munck',
    'Caminhão Pipa',
    'Caminhão Hidro',
    'Caminhão Vácuo',
    'Outro'
  ]

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            CONTATO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você. Preencha o formulário ou utilize um dos nossos canais de atendimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-xl" />
                    </span>
                    <div>
                      <p className="text-blue-200 text-sm mb-1">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="font-medium hover:text-blue-200 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.8389192427817!2d-46.41801891317792!3d-24.001464622457917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1d3bbf311f85%3A0xbd84976a5504c968!2sGrupo%20DDLIMP!5e0!3m2!1spt-BR!2sbr!4v1767642953536!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
              
              {submitted && (
                <div className="mb-6 bg-green-100 text-green-700 px-6 py-4 rounded-xl flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}

              {error && (
                <div className="mb-6 bg-red-100 text-red-700 px-6 py-4 rounded-xl flex items-center gap-3">
                  <span className="text-2xl">✕</span>
                  Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Telefone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Serviço de Interesse</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mensagem *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Descreva sua necessidade..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
