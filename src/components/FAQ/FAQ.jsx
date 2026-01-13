import { useState } from 'react'
import { FaChevronDown, FaQuestion } from 'react-icons/fa'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Qual o prazo de entrega dos equipamentos?',
      answer: 'O prazo de entrega varia conforme a localização e a disponibilidade dos equipamentos. Na região metropolitana, a entrega ocorre em até 24 horas. Para banheiros químicos, a entrega é realizada mediante agendamento. Para containers, é necessária consulta ao estoque; havendo disponibilidade, a entrega é agendada após aprovação, e caso não haja, o prazo é de até 15 dias para fabricação e entrega. Para outras localidades, consulte nosso time comercial.'
    },
    {
      question: 'Como funciona a manutenção dos banheiros químicos?',
      answer: 'A manutenção é realizada periodicamente conforme o plano contratado. Inclui limpeza, higienização, reposição de insumos e verificação de funcionamento. A frequência pode ser diária, semanal ou conforme sua necessidade.'
    },
    {
      question: 'Vocês atendem eventos de qualquer porte?',
      answer: 'Sim! Atendemos desde pequenos eventos residenciais até grandes festivais e obras industriais. Nossa frota e estoque são dimensionados para atender demandas de qualquer tamanho. Entre em contato para um orçamento personalizado.'
    },
    {
      question: 'Quais formas de pagamento são aceitas?',
      answer: 'Aceitamos diversas formas de pagamento: PIX, transferência bancária e boleto.'
    },
    {
      question: 'Os containers podem ser personalizados?',
      answer: 'Sim! Trabalhamos com 3 modelos padrão de containers: escritório, almoxarifado e vestiário. Para modelos personalizados, é necessária consulta prévia, conforme a necessidade do cliente.'
    },
    {
      question: 'Qual a área de atendimento?',
      answer: 'Atendemos a Baixada Santista.'
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <div>
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Reunimos as principais dúvidas dos nossos clientes. Se não encontrar 
              o que procura, entre em contato conosco.
            </p>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <FaQuestion className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ainda tem dúvidas?</h3>
              <p className="text-blue-100 mb-6">
                Nossa equipe está pronta para ajudar você a encontrar a melhor solução.
              </p>
              <a 
                href="https://wa.me/5513996007426?text=Olá! Tenho uma dúvida sobre os serviços."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                Fale Conosco
              </a>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'shadow-lg' : 'shadow'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-semibold pr-4 transition-colors ${
                    openIndex === index ? 'text-primary' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? 'bg-primary text-white rotate-180' : 'text-gray-600'
                  }`}>
                    <FaChevronDown className="text-sm" />
                  </span>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
