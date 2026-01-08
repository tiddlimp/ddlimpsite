import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-5">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8">
          <FaArrowLeft /> Voltar ao início
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="lead text-lg mb-6">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Informações que Coletamos</h2>
            <p className="mb-4">
              O Grupo DDLIMP coleta informações que você nos fornece diretamente, como nome, 
              e-mail, telefone e mensagens enviadas através do formulário de contato.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Como Usamos suas Informações</h2>
            <p className="mb-4">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Responder às suas solicitações e dúvidas</li>
              <li>Enviar orçamentos e propostas comerciais</li>
              <li>Melhorar nossos serviços e atendimento</li>
              <li>Cumprir obrigações legais</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Compartilhamento de Informações</h2>
            <p className="mb-4">
              Não compartilhamos suas informações pessoais com terceiros, exceto quando 
              necessário para prestar nossos serviços ou quando exigido por lei.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Segurança dos Dados</h2>
            <p className="mb-4">
              Implementamos medidas de segurança técnicas e organizacionais para proteger 
              suas informações contra acesso não autorizado, alteração ou destruição.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Seus Direitos</h2>
            <p className="mb-4">
              Você tem direito de acessar, corrigir ou solicitar a exclusão de seus dados 
              pessoais. Para exercer esses direitos, entre em contato conosco.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Contato</h2>
            <p className="mb-4">
              Para questões sobre esta política, entre em contato pelo e-mail: 
              <a href="mailto:orcamento@bgpg.com.br" className="text-primary hover:underline"> orcamento@bgpg.com.br</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PrivacyPolicy
