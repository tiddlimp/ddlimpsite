import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaPaperPlane, FaCloudUploadAlt, FaFileAlt, FaTimes } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const WorkWithUs = () => {
  const formRef = useRef()
  const fileInputRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  })
  const [selectedFile, setSelectedFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [fileError, setFileError] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFileError('')
    
    if (file) {
      // Verificar tamanho (máximo 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setFileError('O arquivo deve ter no máximo 10MB')
        setSelectedFile(null)
        return
      }
      
      // Verificar tipo de arquivo
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        setFileError('Apenas arquivos PDF ou Word são permitidos')
        setSelectedFile(null)
        return
      }
      
      setSelectedFile(file)
    }
  }

  const removeFile = () => {
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(false)
    setFileError('')
    
    if (!selectedFile) {
      setFileError('Por favor, anexe seu currículo')
      setIsSubmitting(false)
      return
    }

    try {
      // 1. Obter servidor disponível do GoFile
      const serverResponse = await fetch('https://api.gofile.io/servers')
      const serverData = await serverResponse.json()
      
      if (serverData.status !== 'ok') {
        throw new Error('Erro ao obter servidor de upload')
      }
      
      const server = serverData.data.servers[0].name
      
      // 2. Fazer upload do arquivo para GoFile
      const fileFormData = new FormData()
      fileFormData.append('file', selectedFile)
      
      const uploadResponse = await fetch(`https://${server}.gofile.io/contents/uploadfile`, {
        method: 'POST',
        body: fileFormData
      })
      
      const uploadResult = await uploadResponse.json()
      
      if (uploadResult.status !== 'ok') {
        throw new Error('Erro no upload do arquivo')
      }
      
      // 3. Enviar email com o link do arquivo
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        position: formData.position || 'Não especificado',
        message: formData.message || 'Nenhuma mensagem adicional',
        file_name: selectedFile.name,
        file_link: uploadResult.data.downloadPage
      }

      await emailjs.send(
        'service_ng48ypm',
        'template_lg5amm3',
        templateParams,
        'UceFglZtaI-8aLY2i'
      )
      
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', position: '', message: '' })
      setSelectedFile(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error('Erro ao enviar:', err)
      setIsSubmitting(false)
      setError(true)
      setTimeout(() => setError(false), 8000)
    }
  }

  const positions = [
    'Motorista',
    'Operador de Máquinas',
    'Auxiliar de Serviços Gerais',
    'Administrativo',
    'Comercial/Vendas',
    'Técnico de Manutenção',
    'Outra área'
  ]

  return (
    <main className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-5">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8">
          <FaArrowLeft /> Voltar ao início
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-dark p-8 md:p-12 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Trabalhe Conosco</h1>
            <p className="text-blue-100 text-lg max-w-2xl">
              Faça parte da nossa equipe! O Grupo DDLIMP está sempre em busca de 
              profissionais talentosos e comprometidos. Envie seu currículo e 
              venha crescer conosco.
            </p>
          </div>

          {/* Form */}
          <div className="p-8 md:p-12">
            {submitted && (
              <div className="mb-6 bg-green-100 text-green-700 px-6 py-4 rounded-xl flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-semibold">Currículo enviado com sucesso!</p>
                  <p className="text-sm">Analisaremos seu perfil e entraremos em contato em breve.</p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 bg-red-100 text-red-700 px-6 py-4 rounded-xl flex items-center gap-3">
                <span className="text-2xl">✕</span>
                <div>
                  <p className="font-semibold">Erro ao enviar currículo</p>
                  <p className="text-sm">Tente novamente ou envie diretamente para <a href="mailto:orcamento@bgpg.com.br" className="underline font-medium">orcamento@bgpg.com.br</a></p>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">E-mail *</label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Área de Interesse</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  >
                    <option value="">Selecione uma área</option>
                    {positions.map((position, index) => (
                      <option key={index} value={position}>{position}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Currículo *</label>
                <div 
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer hover:border-primary hover:bg-primary/5 ${
                    selectedFile ? 'border-green-400 bg-green-50' : 'border-gray-300'
                  } ${fileError ? 'border-red-400 bg-red-50' : ''}`}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  
                  {selectedFile ? (
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <FaFileAlt className="text-green-600 text-xl" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900">{selectedFile.name}</p>
                        <p className="text-sm text-gray-500">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); removeFile(); }}
                        className="ml-4 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 hover:bg-red-200 transition-colors"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ) : (
                    <>
                      <FaCloudUploadAlt className="text-4xl text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 font-medium">Clique para selecionar ou arraste seu currículo</p>
                      <p className="text-gray-400 text-sm mt-1">PDF ou Word (máx. 10MB)</p>
                    </>
                  )}
                </div>
                {fileError && (
                  <p className="text-red-500 text-sm mt-2">{fileError}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Mensagem (opcional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Conte um pouco sobre você, suas experiências e por que gostaria de trabalhar conosco..."
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
                    Enviando currículo...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Enviar Currículo
                  </>
                )}
              </button>

              <p className="text-center text-gray-500 text-sm">
                Ao enviar seu currículo, você concorda com nossa{' '}
                <Link to="/politica-de-privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </Link>
              </p>
            </form>
          </div>
        </div>

      </div>
    </main>
  )
}

export default WorkWithUs
