import resenas from '../data/resenas'
import { GOOGLE_RESENAS_URL } from '../data/contacto'
import { StarIcon, ArrowIcon } from './Icons'

function Estrellas({ cantidad }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-label={`${cantidad} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map(n => (
        <StarIcon key={n} className="w-4 h-4" filled={n <= cantidad} />
      ))}
    </div>
  )
}

export default function Resenas() {
  return (
    <section id="resenas" className="bg-carbon py-14 lg:py-20 text-white">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-8">
          <span className="section-label">Reseñas</span>
          <h2 className="text-3xl lg:text-4xl mt-3">Lo que dicen nuestros clientes</h2>
        </div>

        {/* Deslizable en celular, grilla en escritorio */}
        <ul className="-mx-5 px-5 flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible">
          {resenas.map((r, i) => (
            <li
              key={i}
              className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-auto bg-stone border border-white/10 p-6 flex flex-col"
            >
              <Estrellas cantidad={r.estrellas} />
              <blockquote className="mt-4 text-white/80 leading-relaxed flex-1">“{r.texto}”</blockquote>
              <p className="mt-5 font-serif text-gold">{r.nombre}</p>
            </li>
          ))}
        </ul>

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
