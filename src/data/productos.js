// ─────────────────────────────────────────────────────────────────────────────
//  PRODUCTOS
//
//  Para cambiar un nombre, una foto o agregar un producto, editá este archivo.
//  - foto: nombre del archivo en src/assets/productos (sin "-400.webp"), o null si
//    todavía no hay foto (se muestra un recuadro "Foto próximamente").
//  - Las fotos marcadas "a confirmar" fueron asignadas mirando la imagen:
//    revisá que el nombre del corte sea el correcto.
// ─────────────────────────────────────────────────────────────────────────────

const archivos = import.meta.glob('../assets/productos/*.webp', { eager: true, import: 'default' })

function foto(id) {
  if (!id) return null
  const sm = archivos[`../assets/productos/${id}-400.webp`]
  const lg = archivos[`../assets/productos/${id}-800.webp`]
  if (!sm || !lg) throw new Error(`Falta la foto ${id} en src/assets/productos`)
  return { sm, lg }
}

export const CATEGORIAS = [
  {
    id: 'vacuno',
    nombre: 'Vacuno',
    productos: [
      { nombre: 'Asado de tira', foto: foto('GAR09748') },
      { nombre: 'Asado banderita', foto: foto('GAR09751') }, // a confirmar
      { nombre: 'Vacío', foto: foto('GAR09728') }, // a confirmar
      { nombre: 'Matambre', foto: foto('GAR09789') }, // a confirmar
      { nombre: 'Cuadril', foto: foto('GAR09745') }, // a confirmar
      { nombre: 'Nalga', foto: foto('GAR09731') }, // a confirmar
      { nombre: 'Tapa de nalga', foto: foto('GAR09743') }, // a confirmar
      { nombre: 'Cuadrada', foto: foto('GAR09741') }, // a confirmar
      { nombre: 'Bola de lomo', foto: foto('GAR09780') }, // a confirmar
      { nombre: 'Paleta', foto: foto('GAR09740') }, // a confirmar
      { nombre: 'Roast beef', foto: foto('GAR09738') }, // a confirmar
      { nombre: 'Peceto', foto: null }, // falta foto
    ],
  },
  {
    id: 'cerdo',
    nombre: 'Cerdo',
    productos: [
      { nombre: 'Matambre de cerdo', foto: foto('GAR09755') }, // a confirmar
      { nombre: 'Pulpa de cerdo', foto: foto('GAR09764') }, // a confirmar
      { nombre: 'Bondiola', foto: null }, // falta foto
    ],
  },
  {
    id: 'pollo',
    nombre: 'Pollo',
    productos: [
      { nombre: 'Pollo entero', foto: null }, // falta foto
    ],
  },
  {
    id: 'embutidos',
    nombre: 'Embutidos y elaborados',
    nombreCorto: 'Embutidos',
    productos: [
      { nombre: 'Salchicha parrillera', foto: foto('GAR09719') }, // a confirmar
      { nombre: 'Chorizo artesanal', foto: null }, // falta foto
    ],
  },
  {
    id: 'boutique',
    nombre: 'Línea Boutique',
    boutique: true,
    bajada: 'Cortes premium seleccionados y envasados al vacío.',
    productos: [
      { nombre: 'Ojo de bife', foto: foto('GAR09776') },
      { nombre: 'Bife de chorizo', foto: foto('GAR09736') },
      { nombre: 'Entraña', foto: foto('GAR09772') },
      { nombre: 'Colita de cuadril', foto: foto('GAR09733') },
      { nombre: 'Envasados al vacío', foto: null }, // falta foto
    ],
  },
]
