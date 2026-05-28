import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const PILLARS = [
  {
    number: '01',
    title:  'Establecimiento propio',
    desc:   'Instalaciones modernas en Av. Dardo Rocha 670, Bernal Oeste, con capacidad industrial para procesamiento y almacenamiento.',
  },
  {
    number: '02',
    title:  'Cámara frigorífica',
    desc:   'Control de temperatura preciso en cada etapa, desde la recepción hasta el despacho, garantizando la cadena de frío.',
  },
  {
    number: '03',
    title:  'Línea de envasado',
    desc:   'Envasado al vacío profesional que extiende la vida útil del producto hasta 72 hs en heladera y 12 meses en freezer.',
  },
  {
    number: '04',
    title:  'Logística propia',
    desc:   'Flota de entrega refrigerada para CABA y Zona Sur con sistema de 23 heladeras autoservicio en puntos de venta activos.',
  },
]

export default function Infrastructure() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="infraestructura" className="bg-carbon py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Nuestro establecimiento</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-white text-4xl lg:text-5xl font-semibold leading-tight"
            >
              Infraestructura a la
              <br />
              <span className="italic text-gold">altura del producto.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans text-white/50 text-base lg:text-lg leading-relaxed self-end"
          >
            Nuestro frigorífico opera con maquinaria especializada, procesos controlados
            y un equipo comprometido. Cada detalle del establecimiento está pensado
            para garantizar que el producto llegue en perfectas condiciones.
          </motion.p>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {PILLARS.map(({ number, title, desc }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              className="bg-carbon p-8 lg:p-10 group hover:bg-stone transition-colors duration-300"
            >
              <div className="font-serif text-5xl text-white/10 font-bold mb-6 group-hover:text-carmin/20 transition-colors duration-300">
                {number}
              </div>
              <div className="w-8 h-px bg-carmin mb-5" />
              <h3 className="font-serif text-white text-xl font-semibold mb-4">
                {title}
              </h3>
              <p className="font-sans text-white/50 text-sm leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Big image banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="relative mt-px overflow-hidden h-64 lg:h-80"
        >
          <img
            src="https://elcarmin.com.ar/wp-content/uploads/2025/09/heladeras.png"
            alt="Heladeras El Carmín"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon via-transparent to-carbon" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="font-serif text-white text-5xl lg:text-6xl font-semibold mb-2">23</div>
              <div className="font-sans text-white/60 text-xs tracking-widest uppercase">
                Heladeras activas en puntos de venta
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
