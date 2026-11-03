import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { linkWhatsApp } from '../data/contacto'
import { WhatsAppIcon } from './Icons'

export const LINKS = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Nosotros',  href: '#nosotros' },
  { label: 'Envíos',    href: '#envios' },
  { label: 'Productos', href: '#productos' },
  { label: 'Reseñas',   href: '#resenas' },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled || menuOpen ? 'bg-carbon/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto h-16 px-5 lg:px-8 flex items-center justify-between">
          <a href="#inicio" onClick={close} className="font-serif text-white text-xl font-semibold tracking-wide">
            El Carmín
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
            {LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-sans text-xs font-medium tracking-widest uppercase text-white/75 hover:text-gold transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-carmin hover:bg-carmin-light text-white text-xs font-medium tracking-widest uppercase px-5 py-3 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Realizá tu pedido
          </a>

          <button
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden -mr-2 p-3 flex flex-col gap-1.5"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-px bg-white transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-carbon flex flex-col pt-24 px-6 pb-8 lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Menú móvil">
              {LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={close}
                  className="font-serif text-3xl text-white/85 py-3 border-b border-white/10"
                >
                  {label}
                </a>
              ))}
            </nav>
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="btn-primary mt-auto"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Realizá tu pedido
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
