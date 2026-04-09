import { useEffect, useRef } from 'react'
import './Services.scss'
import BgTopServices from './bg-top-services'
import { IconFuncional1, IconMasajes1, IconMusculacion1, IconPersonalizado1 } from '../../Icons/IconsServicios'
import BgBottomServices from './bg-bottom-services'
/*
const SERVICESEXTRAS = [  {
    icon: '📊',
    name: 'Seguimiento Digital',
    desc: 'Registrá tu progreso diario, medí niveles de fatiga y consultá tu historial desde tu cuenta personal.',
  },
  {
    icon: '👨‍🏫',
    name: 'Profesores Calificados',
    desc: 'Equipo de profesionales en educación física listos para guiarte y corregir tu técnica en cada sesión.',
  },
]
*/
const SERVICES = [
  {
    icon: <IconMusculacion1 />,
    name: 'Musculación',
    desc: 'Sala equipada con máquinas y peso libre para todos los niveles. Entrenamiento guiado por profesores certificados.',
  },
  {
    icon: <IconFuncional1 />,
    name: 'Funcional',
    desc: 'Clases de Funcional de alta/media intensidad. Quemá calorías y mejorá tu resistencia cardiovascular.',
  },
  {
    icon: <IconMasajes1 />,
    name: 'Masajes',
    desc: 'Sala de fitness con equipamiento completo para trabajar fuerza, flexibilidad y acondicionamiento general.',
  },
  {
    icon: <IconPersonalizado1 />,
    name: 'Entrenamiento Personalizadas',
    desc: 'Cada alumno tiene su plan adaptado a sus objetivos, nivel físico y disponibilidad horaria.',
  },
]


const Services = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('services__card--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="services" id="servicios" ref={sectionRef}>
      <div className='bg-services' >
        <BgTopServices className="top" />
        <BgBottomServices className="bottom" />
      </div>

      <div className='SECTION-STANDAR '>
        <div className='CONTAINER-STANDAR '>
          <article className='container-services'>
      <div className="services__header">
        <p className="services__label">Lo que ofrecemos</p>
        <h2 className="services__title">
          Nuestros<br />Servicios
        </h2>
      </div>
      

      <div className="services__grid">
        {SERVICES.map((service, i) => (
          <div
            key={service.name}
            className="services__card"
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="services__card-icon">{service.icon}</span>
            <h3 className="services__card-name">{service.name}</h3>
            <p className="services__card-desc">{service.desc}</p>
          </div>
        ))}
      </div>
      </article>
        </div>
      </div>
      
    </section>
  )
}

export default Services