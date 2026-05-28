import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const STEPS = [
  {
    number: '1',
    title:  'Selección en origen',
    desc:   'Trabajamos con proveedores de confianza seleccionados por la calidad de sus animales y sus procesos de cría. Conocemos el origen de lo que ofrecemos.',
    image:  'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '2',
    title:  'Procesamiento controlado',
    desc:   'Cada pieza es procesada en nuestras instalaciones bajo estrictas normas de higiene y temperatura. Cortamos, porcionamos y preparamos con precisión.',
    image:  'https://elcarmin.com.ar/wp-content/uploads/2025/08/pexels-photo-29095933-29095933-edited-scaled.jpg',
  },
  {
    number: '3',
    title:  'Envasado al vacío',
    desc:   'Sellamos herméticamente cada producto para prolongar su frescura y garantizar que llegue en óptimas condiciones. Hasta 72 hs en heladera, 12 meses en freezer.',
    image:  'https://elcarmin.com.ar/wp-content/uploads/2025/08/Image-12-08-2025-at-2.37-PM.jpeg',
  },
]

export default function Quality() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="calidad" className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-carmin" />
            <span className="section-label text-carmin">Nuestro proceso</span>
          </div>
          <h2 className="font-serif text-carbon text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Calidad que se cuida
            <br />
            <span className="italic text-carmin">en cada paso.</span>
          </h2>
          <p className="font-sans text-stone/60 text-base lg:text-lg leading-relaxed">
            No vendemos solo carne. Vendemos un proceso. Desde que el animal llega
            a nuestras instalaciones hasta que el producto llega a tu mesa, cada etapa
            está controlada para garantizar la mejor calidad.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="space-y-0">
          {STEPS.map(({ number, title, desc, image }, i) => (
            <ProcessStep
              key={number}
              number={number}
              title={title}
              desc={desc}
              image={image}
              reverse={i % 2 !== 0}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ number, title, desc, image, reverse, index, inView }) {
  return (
    <div className={`grid lg:grid-cols-2 gap-0 ${reverse ? '' : ''}`}>
      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.1 + index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`flex items-center bg-cream px-10 lg:px-16 py-14 lg:py-20 ${reverse ? 'lg:order-2' : ''}`}
      >
        <div>
          <div className="font-serif text-7xl text-carmin/10 font-bold leading-none mb-6 select-none">
            {number}
          </div>
          <div className="w-8 h-px bg-carmin mb-5" />
          <h3 className="font-serif text-carbon text-2xl lg:text-3xl font-semibold mb-5">
            {title}
          </h3>
          <p className="font-sans text-stone/60 text-base leading-relaxed">
            {desc}
          </p>
        </div>
      </motion.div>

      {/* Image side */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 + index * 0.15 }}
        className={`relative h-72 lg:h-auto overflow-hidden ${reverse ? 'lg:order-1' : ''}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-carbon/20" />
      </motion.div>
    </div>
  )
}
