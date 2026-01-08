import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const LGPD = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">LGPD - Lei Geral de Proteção de Dados</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="lead text-lg mb-6">
              O Grupo DDLIMP está comprometido com a proteção dos seus dados pessoais, 
              em conformidade com a Lei nº 13.709/2018 (LGPD).
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">O que é a LGPD?</h2>
            <p className="mb-4">
              A Lei Geral de Proteção de Dados (LGPD) é a legislação brasileira que regula 
              as atividades de tratamento de dados pessoais, garantindo direitos fundamentais 
              de liberdade e privacidade.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Seus Direitos</h2>
            <p className="mb-4">Como titular de dados, você tem direito a:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Confirmação e Acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
              <li><strong>Correção:</strong> Corrigir dados incompletos ou desatualizados</li>
              <li><strong>Anonimização:</strong> Solicitar anonimização de dados desnecessários</li>
              <li><strong>Portabilidade:</strong> Transferir seus dados para outro fornecedor</li>
              <li><strong>Eliminação:</strong> Solicitar exclusão de dados tratados com consentimento</li>
              <li><strong>Informação:</strong> Conhecer entidades com quem compartilhamos dados</li>
              <li><strong>Revogação:</strong> Revogar consentimento a qualquer momento</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Como Tratamos seus Dados</h2>
            <p className="mb-4">
              Coletamos apenas os dados necessários para prestar nossos serviços e melhorar 
              sua experiência. O tratamento é realizado com base em:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Seu consentimento</li>
              <li>Execução de contrato</li>
              <li>Cumprimento de obrigação legal</li>
              <li>Legítimo interesse</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Segurança</h2>
            <p className="mb-4">
              Adotamos medidas técnicas e administrativas aptas a proteger os dados pessoais 
              de acessos não autorizados e de situações acidentais ou ilícitas.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Encarregado de Dados (DPO)</h2>
            <p className="mb-4">
              Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de seus dados, 
              entre em contato com nosso Encarregado de Proteção de Dados:
            </p>
            <p className="mb-4">
              <strong>E-mail:</strong>{' '}
              <a href="mailto:lgpd@grupoddlimp.com.br" className="text-primary hover:underline">
                lgpd@grupoddlimp.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LGPD
