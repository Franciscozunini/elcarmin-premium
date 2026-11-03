import { useState } from 'react'
import { motion } from 'framer-motion'
import { CATEGORIAS } from '../data/productos'
import { linkWhatsApp } from '../data/contacto'
import { WhatsAppIcon, StarIcon } from './Icons'

export default function Productos() {
  const [activa, setActiva] = useState(CATEGORIAS[0].id)
  const categoria = CATEGORIAS.find(c => c.id === activa)
  const boutique = !!categoria.boutique
  const normales = CATEGORIAS.filter(c => !c.boutique)
  const especial = CATEGORIAS.find(c => c.boutique)

  return (
    <section
      id="productos"
      className={`py-14 lg:py-20 transition-colors duration-500 ${boutique ? 'bg-carbon' : 'bg-cream'}`}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-6">
          <span className={`section-label ${boutique ? '' : 'text-carmin'}`}>Productos</span>
          <h2 className={`text-3xl lg:text-4xl mt-3 ${boutique ? 'text-white' : 'text-carbon'}`}>Nuestros cortes</h2>
        </div>

        {/* Pestañas: categorías en una fila + Línea Boutique destacada debajo */}
        <div role="tablist" aria-label="Categorías" className="max-w-2xl mx-auto mb-6">
          <div
            className="grid gap-1.5 sm:gap-2 mb-2"
            style={{ gridTemplateColumns: `repeat(${normales.length}, minmax(0, 1fr))` }}
          >
            {normales.map(c => {
              const sel = c.id === activa
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={sel}
                  aria-controls="panel-productos"
                  onClick={() => setActiva(c.id)}
                  className={`text-[13px] sm:text-sm font-medium px-1 py-2.5 rounded-full border transition-colors ${
                    sel
                      ? 'bg-carmin border-carmin text-white'
                      : boutique
                        ? 'border-white/20 text-white/75 hover:border-white/50'
                        : 'border-carbon/15 text-carbon/80 bg-white hover:border-carmin/50'
                  }`}
                >
                  <span className="sm:hidden">{c.nombreCorto ?? c.nombre}</span>
                  <span className="hidden sm:inline">{c.nombre}</span>
                </button>
              )
            })}
          </div>
          {especial && (
            <button
              role="tab"
              aria-selected={boutique}
              aria-controls="panel-productos"
              onClick={() => setActiva(especial.id)}
              className={`w-full flex items-center justify-center gap-2 py-3 text-sm font-medium uppercase tracking-widest transition-colors ${
                boutique
                  ? 'bg-gold text-carbon'
                  : 'bg-carbon text-gold hover:bg-stone'
              }`}
            >
              <StarIcon className="w-4 h-4" />
              {especial.nombre}
              <StarIcon className="w-4 h-4" />
            </button>
          )}
        </div>

        {boutique && (
          <p className="text-center text-gold/90 text-sm mb-6">{categoria.bajada}</p>
        )}

        <motion.ul
          key={activa}
          id="panel-productos"
          role="tabpanel"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5"
        >
          {categoria.productos.map(p => (
            <Tarjeta key={p.nombre} producto={p} boutique={boutique} />
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

function Tarjeta({ producto, boutique }) {
  const { nombre, foto } = producto
  return (
    <li
      className={`flex flex-col overflow-hidden ${
        boutique ? 'bg-stone ring-1 ring-gold/40' : 'bg-white shadow-sm'
      }`}
    >
      <div className="aspect-[4/3] bg-carbon/5">
        {foto ? (
          <img
            src={foto.sm}
            srcSet={`${foto.sm} 400w, ${foto.lg} 800w`}
            sizes="(min-width: 1024px) 270px, (min-width: 768px) 33vw, 50vw"
            alt={nombre}
            loading="lazy"
            decoding="async"
            width="400"
            height="300"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-carbon text-center px-2">
            <span className="font-serif text-gold text-lg">El Carmín</span>
            <span className="text-[11px] uppercase tracking-widest text-white/40 mt-1">Foto próximamente</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 p-2.5 pl-3 flex-1">
        <h3 className={`flex-1 min-w-0 font-serif text-[15px] lg:text-lg leading-tight ${boutique ? 'text-white' : 'text-carbon'}`}>
          {nombre}
        </h3>
        <a
          href={linkWhatsApp(`Hola, quiero pedir ${nombre}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className={`shrink-0 inline-flex items-center justify-center gap-1 rounded-full w-10 h-10 sm:w-auto sm:h-auto sm:pl-2.5 sm:pr-3 sm:py-2 text-[11px] font-semibold uppercase tracking-wider transition-colors ${
            boutique
              ? 'bg-gold text-carbon hover:bg-gold/85'
              : 'bg-carmin text-white hover:bg-carmin-dark'
          }`}
          aria-label={`Pedir ${nombre} por WhatsApp`}
        >
          <WhatsAppIcon className="w-5 h-5 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Pedir</span>
        </a>
      </div>
    </li>
  )
}
