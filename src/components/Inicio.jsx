import hero800 from '../assets/hero/hero-800.webp'
import hero1200 from '../assets/hero/hero-1200.webp'
import hero1600 from '../assets/hero/hero-1600.webp'
import { linkWhatsApp } from '../data/contacto'
import { WhatsAppIcon } from './Icons'

export default function Inicio() {
  return (
    <section id="inicio" className="relative bg-carbon text-white lg:min-h-[100svh] lg:flex lg:items-center">
      {/* Foto: arriba en celular, a la derecha en escritorio */}
      <div className="relative h-[58svh] min-h-[320px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[60%]">
        <img
          src={hero1200}
          srcSet={`${hero800} 800w, ${hero1200} 1200w, ${hero1600} 1600w`}
          sizes="(min-width: 1024px) 60vw, 100vw"
          alt="Asado de tira El Carmín"
          fetchpriority="high"
          className="w-full h-full object-cover"
        />
        {/* Fundido hacia el fondo carbón */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/10 to-carbon/50 lg:bg-gradient-to-r lg:from-carbon lg:via-carbon/20 lg:to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full px-5 lg:px-8 -mt-24 pb-12 lg:mt-0 lg:py-32">
        <div className="max-w-md">
          <p className="section-label mb-4">Frigorífico · Bernal Oeste</p>
          <h1 className="font-serif text-5xl lg:text-7xl font-semibold leading-none mb-5">
            El Carmín
          </h1>
          <p className="text-lg lg:text-xl text-white/75 font-light mb-8">
            Carne de primera calidad, directo a tu mesa.
          </p>
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Realizá tu pedido
          </a>
        </div>
      </div>
    </section>
  )
}
