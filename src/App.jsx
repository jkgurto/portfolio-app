import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <div className="w-full min-h-screen bg-zinc-100 text-black antialiased overflow-x-hidden">
      {/* Background */}
      <Nav />
      <Hero />
      <Features />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
