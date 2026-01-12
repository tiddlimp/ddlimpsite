import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaCookieBite } from 'react-icons/fa'

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    } else {
      const savedPreferences = JSON.parse(consent)
      if (savedPreferences.analytics) {
        enableAnalytics()
      }
    }
  }, [])

  const enableAnalytics = () => {
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted))
    enableAnalytics()
    setIsVisible(false)
  }

  const handleReject = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly))
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-2rem)] max-w-2xl transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 flex flex-col sm:flex-row items-center gap-4">
        {/* Icon */}
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
          <FaCookieBite className="text-white text-xl" />
        </div>
        
        {/* Text */}
        <p className="text-gray-600 text-sm text-center sm:text-left flex-1">
          Utilizamos cookies para melhorar sua experiência de navegação.{' '}
          <Link 
            to="/politica-de-privacidade"
            className="text-primary hover:text-primary-dark font-medium underline underline-offset-2"
          >
            Política de Privacidade
          </Link>
        </p>
        
        {/* Buttons */}
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-5 py-2.5 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors rounded-xl hover:bg-gray-100"
          >
            Recusar
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
