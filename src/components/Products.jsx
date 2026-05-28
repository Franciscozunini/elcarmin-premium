import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const WA_LINK = 'https://wa.me/5491137907173?text=Hola%2C%20quiero%20consultar%20por%20'

const CATEGORIES = ['Todos', 'Vacuna', 'Cerdo', 'Aves', 'Embutidos']

const PRODUCTS = [
  {
    id: 1,
    name:     'Asado de Tira',
    category: 'Vacuna',
    desc:     'Corte estrella de la parrilla argentina. Costilla entera con el equilibrio perfecto entre carne y grasa. Ideal para asados largos a fuego bajo.',
    badge:    'Destacado',
    image:    'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name:     'Bife de Chorizo',
    category: 'Vacuna',
    desc:     'El preferido de los amantes de la carne. Corte grueso, tierno y con el sabor intenso que caracteriza a los mejores bifes argentinos.',
    badge:    null,
    image:    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name:     'Vacío',
    category: 'Vacuna',
    desc:     'Corte versátil con textura inconfundible. Perfecto a la parrilla o al horno lento. Jugoso, sabroso y con una cocción que lo hace único.',
    badge:    null,
    image:    'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name:     'Peceto',
    category: 'Vacuna',
    desc:     'Corte magro y tierno, ideal para matambre a la pizza, relleno o en escalopes. Muy apreciado por su versatilidad en cocina.',
    badge:    null,
    image:    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name:     'Bondiola de Cerdo',
    category: 'Cerdo',
    desc:     'Corte premium del cerdo con grasa intramuscular que lo hace jugoso y tierno. Ideal para cocción lenta, al horno o a la parrilla.',
    badge:    'Premium',
    image:    'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name:     'Pollo Entero',
    category: 'Aves',
    desc:     'Pollo fresco, sin colorantes ni conservantes artificiales. Criado con alimentación controlada para garantizar sabor natural y textura óptima.',
    badge:    null,
    image:    'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    name:     'Chorizo Artesanal',
    category: 'Embutidos',
    desc:     'Elaborado con selección de carnes y especias naturales. Sin aditivos artificiales. El complemento perfecto de toda parrilla.',
    badge:    'Artesanal',
    image:    'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    name:     'Envasados al Vacío',
    category: 'Vacuna',
    desc:     'Toda nuestra línea de cortes disponible envasada al vacío. Máxima conservación: 72 hs en heladera, 12 meses en freezer.',
    badge:    'Al vacío',
    image:    'https://elcarmin.com.ar/wp-content/uploads/2025/08/Image-12-08-2025-at-2.37-PM.jpeg',
  },
]

export default function Products() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === active)

  return (
    <section id="productos" className="bg-cream py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-carmin" />
              <span className="section-label text-carmin">Nuestros cortes</span>
            </div>
            <h2 className="font-serif text-carbon text-4xl lg:text-5xl font-semibold leading-tight">
              Cada corte,
              <br />
              <span className="italic text-carmin">una promesa de calidad.</span>
            </h2>
          </div>
          <p className="font-sans text-stone/60 text-base leading-relaxed max-w-sm">
            No ofrecemos precios en esta web. Para consultar disponibilidad,
            precio del día y hacer tu pedido, escribinos por WhatsApp.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-sans text-xs font-medium tracking-widest uppercase px-5 py-2.5 transition-all duration-200 ${
                active === cat
                  ? 'bg-carmin text-white'
                  : 'bg-white/60 text-stone/60 hover:bg-white hover:text-stone border border-stone/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-stone/10">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 pt-12 border-t border-stone/10"
        >
          <span className="font-sans text-stone/60 text-sm">
            ¿No encontrás lo que buscás?
          </span>
          <a
            href={WA_LINK + 'un%20corte%20específico.'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark"
          >
            Consultar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ProductCard({ product, index }) {
  const waLink = `${WA_LINK}${encodeURIComponent(product.name + '.')}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.4) }}
      className="relative bg-white group overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-carmin text-white font-sans text-[10px] font-medium tracking-widest uppercase px-3 py-1.5">
              {product.badge}
            </span>
          </div>
        )}

        {/* Hover overlay CTA */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center justify-center gap-2 bg-white text-carmin font-sans text-xs font-semibold tracking-widest uppercase py-3 w-full hover:bg-carmin hover:text-white transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar precio
          </a>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6">
        <div className="w-6 h-px bg-carmin mb-4" />
        <h3 className="font-serif text-carbon text-xl font-semibold mb-2">
          {product.name}
        </h3>
        <span className="font-sans text-[10px] text-carmin/70 tracking-widest uppercase mb-3 block">
          {product.category}
        </span>
        <p className="font-sans text-stone/60 text-sm leading-relaxed">
          {product.desc}
        </p>
      </div>
    </motion.div>
  )
}
