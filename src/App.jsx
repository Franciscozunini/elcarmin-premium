import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Nosotros from './components/Nosotros'
import Envios from './components/Envios'
import Productos from './components/Productos'
import Resenas from './components/Resenas'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="bg-white text-carbon font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Inicio />
        <Nosotros />
        <Envios />
        <Productos />
        <Resenas />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
