import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WA_LINK = 'https://wa.me/5491137907173?text=Hola%2C%20quiero%20consultar%20por%20sus%20servicios.'

const SERVICES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title:    'Entrega a domicilio',
    subtitle: 'CABA y Zona Sur',
    desc:     'Llevamos los mejores cortes hasta tu puerta con cadena de frío garantizada. Productos frescos, puntuales y en perfectas condiciones. Sin demoras, sin excusas.',
    detail:   'Cobertura: CABA + Zona Sur completa',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title:    'Heladeras autoservicio',
    subtitle: '23 unidades activas',
    desc:     'Instalamos y mantenemos heladeras con nuestros productos en almacenes y mercados. Reposición garantizada, producto siempre fresco y listo para la venta.',
    detail:   '23 puntos de venta activos',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title:    'Producción fasón',
    subtitle: 'Tercerización cárnica',
    desc:     'Para empresas y distribuidores. Traés tu materia prima y nosotros nos encargamos del envasado al vacío, procesamiento y preparación lista para comercializar.',
    detail:   'Servicio B2B para empresas',
  },
]

export default function Services() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-carbon py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-xl mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold" />
            <span className="section-label">Lo que ofrecemos</span>
          </div>
          <h2 className="font-serif text-white text-4xl lg:text-5xl font-semibold leading-tight">
            Servicios pensados
            <br />
            <span className="italic text-gold">para cada cliente.</span>
          </h2>
        </motion.div>

        {/* Service cards */}
        <div className="grid lg:grid-cols-3 gap-px bg-white/5">
          {SERVICES.map(({ icon, title, subtitle, desc, detail }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              className="bg-carbon hover:bg-stone transition-colors duration-300 p-10 lg:p-12 flex flex-col group"
            >
              <div className="w-14 h-14 border border-white/10 flex items-center justify-center text-carmin mb-8 group-hover:border-carmin/40 transition-colors duration-300">
                {icon}
              </div>
              <div className="w-8 h-px bg-carmin mb-6" />
              <h3 className="font-serif text-white text-2xl font-semibold mb-2">
                {title}
              </h3>
              <span className="font-sans text-xs text-gold/70 tracking-widest uppercase mb-6">
                {subtitle}
              </span>
              <p className="font-sans text-white/50 text-sm leading-relaxed flex-1 mb-8">
                {desc}
              </p>
              <div className="flex items-center gap-3">
                <span className="w-4 h-px bg-carmin/50" />
                <span className="font-sans text-xs text-white/30 tracking-wide">
                  {detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="font-sans text-white/40 text-sm">
            ¿Sos comercio, distribuidora o empresa? Tenemos condiciones especiales para vos.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap"
          >
            Consultar condiciones
          </a>
        </motion.div>
      </div>
    </section>
  )
}
