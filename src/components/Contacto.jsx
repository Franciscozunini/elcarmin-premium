import {
  DIRECCION, LOCALIDAD, MAPA_EMBED_URL, MAPA_URL,
  WHATSAPP_VISIBLE, INSTAGRAM_URL, INSTAGRAM_USUARIO, linkWhatsApp,
} from '../data/contacto'
import { WhatsAppIcon, InstagramIcon, PinIcon } from './Icons'

export default function Contacto() {
  return (
    <section id="contacto" className="bg-white py-14 lg:py-20">
      <div className="max-w-5xl mx-auto px-5 lg:px-8 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <span className="section-label text-carmin">Contacto</span>
          <h2 className="text-3xl lg:text-4xl text-carbon mt-3 mb-6">Visitanos o escribinos</h2>

          <ul className="space-y-1">
            <Fila href={MAPA_URL} icono={<PinIcon />} titulo={DIRECCION} detalle={LOCALIDAD} />
            <Fila href={linkWhatsApp()} icono={<WhatsAppIcon />} titulo="WhatsApp" detalle={WHATSAPP_VISIBLE} />
            <Fila href={INSTAGRAM_URL} icono={<InstagramIcon />} titulo="Instagram" detalle={`@${INSTAGRAM_USUARIO}`} />
          </ul>
        </div>

        <div className="aspect-[4/3] md:aspect-square overflow-hidden bg-cream">
          <iframe
            title={`Mapa: ${DIRECCION}, ${LOCALIDAD}`}
            src={MAPA_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0 grayscale-[30%]"
          />
        </div>
      </div>
    </section>
  )
}

function Fila({ href, icono, titulo, detalle }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 py-3 group"
      >
        <span className="w-11 h-11 shrink-0 rounded-full bg-cream text-carmin flex items-center justify-center group-hover:bg-carmin group-hover:text-white transition-colors">
          {icono}
        </span>
        <span>
          <span className="block text-carbon font-medium">{titulo}</span>
          <span className="block text-sm text-carbon/60">{detalle}</span>
        </span>
      </a>
    </li>
  )
}
