import { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AboutUs from '../../components/Sections/AboutUs/AboutUs'
import Contact from '../../components/Sections/Contact/Contact'
import Footer from '../../components/Sections/Footer/Footer'
import Hero from '../../components/Sections/Hero/hero'
import Services from '../../components/Sections/Services/Services'
import Stars from '../../components/Sections/Stars/Stars'
import Ticker from '../../components/Sections/Ticker/Ticker'
import LoginModal from '../../components/Sections/LoginModal/LoginModal'
import './Home.scss'
import Staff from '../../components/Sections/Staff/Staff'
import Schedule from '../../components/Sections/Schedule/Schedule'
import Mission from '../../components/Sections/Mission/Mission'
import Products from '../../components/Sections/Products/Products'
import Sponsors from '../../components/Sections/Sponsors/Sponsors'


export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <div>
      <header>
        <NavBar onLoginClick={() => setLoginOpen(true)} />
      </header>
      <main>
        <Hero />
        <Ticker />
        <AboutUs />
        <Mission />
        <Services />
        <Products />
        <Staff />
        <Stars />
        <Schedule />
        <Sponsors />
        <Contact />
        <LoginModal
          isOpen={loginOpen}
          onClose={() => setLoginOpen(false)}
        />
      </main>
      <footer>
       <Footer />
      </footer>
      
      
    </div>
  )
}
