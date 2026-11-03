// Datos de contacto centralizados: si cambia algo, se cambia acá y se actualiza toda la web.

export const WHATSAPP_NUMERO = '5491137907173'
export const WHATSAPP_VISIBLE = '+54 9 11 3790-7173'

export const DIRECCION = 'Av. Dardo Rocha 670'
export const LOCALIDAD = 'Bernal Oeste, Buenos Aires'

export const INSTAGRAM_USUARIO = 'el.carmin'
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USUARIO}`

// Mapa embebido (no necesita API key).
export const MAPA_EMBED_URL =
  'https://www.google.com/maps?q=' +
  encodeURIComponent(`El Carmín, ${DIRECCION}, Bernal Oeste, Buenos Aires`) +
  '&output=embed'

export const MAPA_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(`El Carmín ${DIRECCION} Bernal Oeste`)

// TODO: reemplazar por el link directo a las reseñas de la ficha de Google
// (Google Maps → El Carmín → Compartir → copiar link). Mientras tanto abre la búsqueda en Maps.
export const GOOGLE_RESENAS_URL = MAPA_URL

/** Arma un link de WhatsApp con el mensaje ya escrito. */
export function linkWhatsApp(mensaje = 'Hola, quiero realizar un pedido.') {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`
}
