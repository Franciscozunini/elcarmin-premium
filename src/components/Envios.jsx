import { linkWhatsApp } from '../data/contacto'
import { WhatsAppIcon, MeatIcon, ChatIcon, TruckIcon, PinIcon } from './Icons'

const PASOS = [
  { Icono: MeatIcon,  titulo: 'Elegí tus cortes' },
  { Icono: ChatIcon,  titulo: 'Escribinos por WhatsApp' },
  { Icono: TruckIcon, titulo: 'Lo recibís en tu casa' },
]

const ZONAS = ['CABA', 'Zona Sur']

export default function Envios() {
  return (
    <section id="envios" className="bg-white py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-8">
          <span className="section-label text-carmin">Delivery</span>
          <h2 className="text-3xl lg:text-4xl text-carbon mt-3">Envíos a domicilio</h2>
          <div className="flex justify-center gap-2 mt-5">
            {ZONAS.map(z => (
              <span key={z} className="inline-flex items-center gap-1.5 border border-carmin/30 text-carmin text-sm font-medium px-4 py-1.5 rounded-full">
                <PinIcon className="w-4 h-4" />
                {z}
              </span>
            ))}
          </div>
        </div>

        <ol className="grid grid-cols-3 gap-3 lg:gap-6 mb-10">
          {PASOS.map(({ Icono, titulo }, i) => (
            <li key={titulo} className="flex flex-col items-center text-center">
              <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-cream text-carmin flex items-center justify-center mb-3">
                <Icono className="w-7 h-7 lg:w-8 lg:h-8" />
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-carmin text-white text-xs font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <p className="text-sm lg:text-base text-carbon font-medium leading-tight">{titulo}</p>
            </li>
          ))}
        </ol>

        <a
          href={linkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-lg w-full max-w-md mx-auto flex"
        >
          <WhatsAppIcon className="w-6 h-6" />
          Realizá tu pedido
        </a>
      </div>
    </section>
  )
}
