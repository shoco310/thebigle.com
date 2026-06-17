import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Speaking from './components/Speaking'
import Works from './components/Works'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Speaking />
        <Works />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
