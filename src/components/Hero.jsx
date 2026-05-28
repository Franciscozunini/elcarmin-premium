import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WA_LINK = 'https://wa.me/5491137907173?text=Hola%2C%20quiero%20hacer%20un%20pedido.'

const SLIDES = [
  {
    image: 'https://elcarmin.com.ar/wp-content/uploads/2025/08/pexels-photo-29095933-29095933-edited-scaled.jpg',
    alt:   'Cortes premium El Carmín',
  },
  {
    image: 'https://elcarmin.com.ar/wp-content/uploads/2025/08/Image-12-08-2025-at-2.37-PM.jpeg',
    alt:   'Productos envasados al vacío El Carmín',
  },
  {
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=1920&q=80',
    alt:   'Calidad premium en cada corte',
  },
]


export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col overflow-hidden bg-carbon">

      {/* ── Background carousel ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img src={SLIDES[current].image} alt={SLIDES[current].alt} className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-carbon/92 via-carbon/65 to-carbon/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-transparent to-carbon/25" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-carmin to-transparent opacity-60" />

      {/* ════════════════════════════════════════
          CONTENT — flex column fills height
         ════════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto px-6 lg:px-10 w-full">

        {/* ── Text + CTAs — vertically centered ── */}
        <div className="flex-1 flex flex-col justify-center pt-20 pb-10 lg:pt-28 lg:pb-16">
          <div className="max-w-2xl">

            {/* Label — desktop only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden sm:flex items-center gap-3 mb-7"
            >
              <span className="w-8 h-px bg-gold" />
              <span className="font-sans text-xs font-medium tracking-widest uppercase text-gold">
                Frigorífico Premium · Bernal Oeste
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-serif text-white text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight mb-5"
            >
              Más de 30 años
              <br />
              <span className="italic text-gold/90">cultivando calidad.</span>
            </motion.h1>

            {/* Subtitle — short on mobile, full on desktop */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.48 }}
              className="font-sans text-white/65 leading-relaxed font-light mb-10
                         text-base lg:text-lg
                         max-w-xs sm:max-w-none"
            >
              {/* Mobile: very short */}
              <span className="sm:hidden">
                Cortes de primera calidad.<br />Pedidos a domicilio en Zona Sur.
              </span>
              {/* Desktop: full */}
              <span className="hidden sm:inline">
                Seleccionamos los mejores cortes de carne vacuna, cerdo, aves y embutidos.
                Calidad que se nota desde el primer vistazo.
              </span>
            </motion.p>

            {/* ── CTAs ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center sm:justify-start"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hacer un pedido
              </a>
              <a href="#productos" className="btn-outline justify-center sm:justify-start">
                Ver nuestros cortes
              </a>
            </motion.div>

          </div>
        </div>

        {/* Stats bar removed — moved to About section to avoid CTA overlap */}

      </div>

      {/* ── Carousel dots — DESKTOP ONLY ── */}
      <div className="hidden lg:flex absolute bottom-10 right-10 gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-300 ${i === current ? 'w-8 h-1 bg-gold' : 'w-2 h-1 bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>

      {/* ── Scroll indicator — DESKTOP ONLY ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10"
      >
        <span className="font-sans text-[10px] text-white/30 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>

    </section>
  )
}
