import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const TermsOfUse = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="lead text-lg mb-6">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p className="mb-4">
              Ao acessar e utilizar este site, você concorda com estes Termos de Uso. 
              Se você não concordar com qualquer parte destes termos, não utilize nosso site.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Uso do Site</h2>
            <p className="mb-4">
              Este site é destinado a fornecer informações sobre o Grupo DDLIMP e seus serviços. 
              Você concorda em usar o site apenas para fins legais e de maneira que não infrinja 
              os direitos de terceiros.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Propriedade Intelectual</h2>
            <p className="mb-4">
              Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, 
              é propriedade do Grupo DDLIMP e está protegido por leis de direitos autorais.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Limitação de Responsabilidade</h2>
            <p className="mb-4">
              O Grupo DDLIMP não se responsabiliza por danos diretos, indiretos, incidentais 
              ou consequentes decorrentes do uso ou impossibilidade de uso deste site.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Links Externos</h2>
            <p className="mb-4">
              Este site pode conter links para sites de terceiros. Não nos responsabilizamos 
              pelo conteúdo ou práticas de privacidade desses sites externos.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Alterações nos Termos</h2>
            <p className="mb-4">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. 
              Recomendamos que você revise periodicamente esta página.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Contato</h2>
            <p className="mb-4">
              Para dúvidas sobre estes termos, entre em contato pelo e-mail: 
              <a href="mailto:orcamento@bgpg.com.br" className="text-primary hover:underline"> orcamento@bgpg.com.br</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default TermsOfUse
