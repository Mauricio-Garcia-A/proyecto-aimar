import FooterSection from '../../components/FooterSection/FooterSection'
import NavBar from '../../components/NavBar/NavBar'
import SectionEstandar from '../../components/SectionEstandar/SectionEstandar'
import Hero from '../../components/Sections/Hero/hero'
import './Home.scss'

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <SectionEstandar id="section-presentation" bg='#2229'>
          Seccion 1
        </SectionEstandar>
        <SectionEstandar id="section-presentation" bg='#8339'>
          Seccion 2
        </SectionEstandar>
        <SectionEstandar id="section-presentation" bg='#f405'>
          Seccion 3
        </SectionEstandar>
      </main>
      <footer>
        <FooterSection />
      </footer>
      
      
    </div>
  )
}
