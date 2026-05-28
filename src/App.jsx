import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Infrastructure from './components/Infrastructure'
import Quality from './components/Quality'
import Products from './components/Products'
import Services from './components/Services'
import WhatsAppCTA from './components/WhatsAppCTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="bg-white text-carbon font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Infrastructure />
        <Quality />
        <Products />
        <Services />
        <WhatsAppCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
