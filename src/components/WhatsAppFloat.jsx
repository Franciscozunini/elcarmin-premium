import { useState, useEffect } from 'react'
import { linkWhatsApp } from '../data/contacto'
import { WhatsAppIcon } from './Icons'

// Aparece después de pasar la portada (que ya tiene su propio botón).
export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Realizá tu pedido por WhatsApp"
      className={`fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  )
}
