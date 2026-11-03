import { useEffect, useRef } from 'react'
import resenas, { RESUMEN_GOOGLE } from '../data/resenas'
import { GOOGLE_RESENAS_URL } from '../data/contacto'
import { StarIcon, ArrowIcon, ChevronIcon, GoogleIcon } from './Icons'

const AVANCE_MS = 5500       // cada cuánto avanza solo
const PAUSA_TRAS_TOQUE = 8000 // cuánto espera después de que el usuario lo toca

function Estrellas({ cantidad, className = 'w-4 h-4' }) {
  return (
    <div className="flex gap-0.5 text-gold" role="img" aria-label={`${cantidad} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map(n => (
        <StarIcon key={n} className={className} filled={n <= cantidad} />
      ))}
    </div>
  )
}

export default function Resenas() {
  const pista = useRef(null)
  const pausadoHasta = useRef(0)
  const encima = useRef(false)
  const visible = useRef(false)

  const mover = (dir) => {
    const el = pista.current
    if (!el || !el.firstElementChild) return
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    const paso = el.firstElementChild.offsetWidth + gap
    const alFinal = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
    const alInicio = el.scrollLeft <= 4
    if (dir > 0 && alFinal) el.scrollTo({ left: 0, behavior: 'smooth' })
    else if (dir < 0 && alInicio) el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' })
    else el.scrollBy({ left: dir * paso, behavior: 'smooth' })
  }

  const pausar = () => { pausadoHasta.current = Date.now() + PAUSA_TRAS_TOQUE }

  // Avance automático lento: solo si la sección está en pantalla y nadie la está usando.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = pista.current
    const io = new IntersectionObserver(([e]) => { visible.current = e.isIntersecting }, { threshold: 0.4 })
    io.observe(el)
    const t = setInterval(() => {
      if (visible.current && !encima.current && Date.now() > pausadoHasta.current) mover(1)
    }, AVANCE_MS)
    return () => { clearInterval(t); io.disconnect() }
  }, [])

  return (
    <section id="resenas" className="bg-carbon py-14 lg:py-20 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        {/* Encabezado + puntaje de Google */}
        <div className="text-center mb-8">
          <span className="section-label">Reseñas</span>
          <h2 className="text-3xl lg:text-4xl mt-3 mb-5">Lo que dicen nuestros clientes</h2>
          <a
            href={GOOGLE_RESENAS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/[0.06] hover:bg-white/10 border border-white/10 rounded-full pl-2 pr-5 py-2 transition-colors"
          >
            <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
              <GoogleIcon className="w-5 h-5" />
            </span>
            <span className="flex items-center gap-1.5 font-serif text-2xl font-semibold leading-none">
              {RESUMEN_GOOGLE.puntaje}
              <StarIcon className="w-5 h-5 text-gold" />
            </span>
            <span className="text-white/30">·</span>
            <span className="text-sm text-white/75">{RESUMEN_GOOGLE.cantidad} reseñas en Google</span>
          </a>
        </div>

        {/* Carrusel */}
        <div
          className="relative"
          onMouseEnter={() => { encima.current = true }}
          onMouseLeave={() => { encima.current = false }}
        >
          <ul
            ref={pista}
            onTouchStart={pausar}
            onPointerDown={pausar}
            onWheel={pausar}
            onFocus={pausar}
            className="-mx-5 px-5 scroll-px-5 flex gap-4 lg:gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar md:mx-0 md:px-0 md:scroll-px-0"
            aria-label="Reseñas de clientes"
          >
            {resenas.map((r, i) => (
              <li
                key={i}
                className="snap-start shrink-0 w-[85%] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2.5rem)/3)] bg-stone border border-white/10 p-5 lg:p-6 flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <Estrellas cantidad={r.estrellas} />
                  <span className="font-serif text-6xl leading-[0.6] text-carmin-light select-none" aria-hidden="true">“</span>
                </div>
                <blockquote className="mt-3 text-[15px] lg:text-base text-white/80 leading-relaxed flex-1">{r.texto}</blockquote>
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-carmin text-white font-serif text-lg flex items-center justify-center shrink-0" aria-hidden="true">
                    {r.nombre.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-medium text-white leading-tight">{r.nombre}</span>
                    <span className="flex items-center gap-1 text-[11px] text-white/45 mt-0.5">
                      <GoogleIcon className="w-3 h-3" />
                      Reseña de Google
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Flechas (escritorio) */}
          <button
            onClick={() => { pausar(); mover(-1) }}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-6 w-11 h-11 rounded-full bg-white text-carbon shadow-lg items-center justify-center hover:bg-gold transition-colors"
            aria-label="Reseña anterior"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            onClick={() => { pausar(); mover(1) }}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-6 w-11 h-11 rounded-full bg-white text-carbon shadow-lg items-center justify-center hover:bg-gold transition-colors"
            aria-label="Reseña siguiente"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        <div className="text-center mt-8">
          <a
            href={GOOGLE_RESENAS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ver todas las reseñas en Google
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
