import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const VALUES = [
  { icon: '◆', text: 'Selección rigurosa de cada pieza desde el origen' },
  { icon: '◆', text: 'Control de calidad en cada etapa del proceso' },
  { icon: '◆', text: 'Envasado al vacío para máxima conservación' },
  { icon: '◆', text: 'Distribución propia en CABA y Zona Sur' },
]

export default function About() {
  const ref  = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" className="bg-cream py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text column */}
          <motion.div
            ref={ref}
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-carmin" />
              <span className="section-label text-carmin">Quiénes somos</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="font-serif text-carbon text-4xl lg:text-5xl font-semibold mb-8 leading-tight"
            >
              Tradición familiar con
              <br />
              <span className="italic text-carmin">estándares de excelencia.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="font-sans text-stone/70 text-base lg:text-lg leading-relaxed mb-6"
            >
              Nacidos en Bernal Oeste, llevamos más de tres décadas abasteciendo a familias,
              almacenes y mercados de la Zona Sur con cortes de primera calidad.
              Lo que empezó como un proyecto familiar se convirtió en un frigorífico consolidado
              que no negocia con la calidad.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="font-sans text-stone/70 text-base lg:text-lg leading-relaxed mb-10"
            >
              Conocemos el producto desde el origen. Seleccionamos, procesamos y entregamos
              con el mismo cuidado de siempre. Porque la calidad no es un slogan, es lo que hacemos cada día.
            </motion.p>

            <motion.ul variants={stagger} className="space-y-4 mb-12">
              {VALUES.map(({ icon, text }) => (
                <motion.li
                  key={text}
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-carmin text-xs mt-1 flex-shrink-0">{icon}</span>
                  <span className="font-sans text-stone/70 text-sm leading-relaxed">{text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="flex gap-12">
              {[
                { value: '+30', label: 'Años' },
                { value: 'Zona Sur', label: 'Cobertura' },
                { value: 'CABA', label: 'Entregas' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="font-serif text-3xl text-carmin font-semibold">{value}</div>
                  <div className="font-sans text-xs text-stone/50 tracking-widest uppercase mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://elcarmin.com.ar/wp-content/uploads/2025/08/pexels-photo-29095933-29095933-edited-scaled.jpg"
                alt="Calidad El Carmín"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/40 to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-carmin px-8 py-6 shadow-2xl"
            >
              <div className="font-serif text-4xl text-white font-semibold">30+</div>
              <div className="font-sans text-white/70 text-xs tracking-widest uppercase mt-1">
                Años de trayectoria
              </div>
            </motion.div>

            {/* Secondary image — top right overlap */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -top-6 -right-6 w-40 h-40 lg:w-48 lg:h-48 overflow-hidden border-4 border-cream shadow-xl"
            >
              <img
                src="https://elcarmin.com.ar/wp-content/uploads/2025/08/Image-12-08-2025-at-2.37-PM.jpeg"
                alt="Productos envasados"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
