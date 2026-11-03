# El Carmín — sitio web

Sitio de una sola página (React + Vite + Tailwind), pensado primero para celular.

## Cómo editar el contenido

| Qué | Dónde |
| --- | --- |
| Reseñas de Google | `src/data/resenas.js` |
| Productos, categorías y fotos | `src/data/productos.js` |
| WhatsApp, Instagram, dirección, link a Google | `src/data/contacto.js` |

Las fotos de productos van en `src/assets/productos/` como `NOMBRE-400.webp` y `NOMBRE-800.webp`
(4:3, recortadas sobre la pieza).

## Comandos

```bash
npm install
npm run dev      # desarrollo
npm run build    # genera dist/ (lo que publica Vercel)
```
