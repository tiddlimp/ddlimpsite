import { useState, useEffect } from 'react'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl p-5 w-72 relative border border-green-400/30">
            {/* Decorative glow effect */}
            <div className="absolute inset-0 bg-green-400/20 rounded-2xl blur-xl -z-10"></div>
            
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all shadow-lg text-xs"
            >
              <FaTimes />
            </button>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FaWhatsapp className="text-white text-xl" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">
                  Fale Conosco! 👋
                </p>
                <p className="text-green-100 text-sm leading-relaxed">
                  Precisa de ajuda? Clique aqui para conversar pelo WhatsApp!
                </p>
              </div>
            </div>
          </div>
          {/* Arrow pointer */}
          <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-4 h-4 bg-green-600 shadow-xl"></div>
        </div>
      )}

      {/* Button */}
      <a
        href="https://wa.me/5513996007426?text=Olá! Gostaria de mais informações sobre os serviços."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 hover:shadow-xl"
      >
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
        
        <FaWhatsapp className="text-3xl relative z-10" />
      </a>
    </div>
  )
}

export default WhatsAppButton
