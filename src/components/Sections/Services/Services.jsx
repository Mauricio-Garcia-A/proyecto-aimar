import './Services.scss'
import BgTopServices from './bg-top-services'
import { IconFuncional1, IconMasajes1, IconMusculacion1, IconPersonalizado1 } from '../../Icons/IconsServicios'
import BgBottomServices from './bg-bottom-services'
import { useState } from 'react'

const SERVICES = [
  {
    icon: <IconMusculacion1 />,
    name: 'Musculación',
    desc: 'Sala equipada con máquinas y peso libre para todos los niveles. Entrenamiento guiado por profesores certificados.',
    backTitle: 'Sala de Musculación',
    backDesc: 'Sala equipada con máquinas y peso libre para todos los niveles. Entrenamiento guiado por profesores certificados.',
  },
  {
    icon: <IconFuncional1 />,
    name: 'Funcional',
    desc: 'Clases de Funcional de alta/media intensidad. Quemá calorías y mejorá tu resistencia cardiovascular.',
    backTitle: 'Entrenamiento Funcional',
    backDesc: 'Clases de Funcional de alta/media intensidad. Quemá calorías y mejorá tu resistencia cardiovascular.',
  },
  {
    icon: <IconMasajes1 />,
    name: 'Masajes',
    desc: 'Sala de fitness con equipamiento completo para trabajar fuerza, flexibilidad y acondicionamiento general.',
    backTitle: 'Sesión de Masajes',
    backDesc: 'Sala de fitness con equipamiento completo para trabajar fuerza, flexibilidad y acondicionamiento general.',
  },
  {
    icon: <IconPersonalizado1 />,
    name: 'Entrenamiento Personalizadas',
    desc: 'Cada alumno tiene su plan adaptado a sus objetivos, nivel físico y disponibilidad horaria.',
    backTitle: 'Plan Personalizado',
    backDesc: 'Cada alumno tiene su plan adaptado a sus objetivos, nivel físico y disponibilidad horaria.',
  },
]


// eslint-disable-next-line react/prop-types
const FlipCard = ({ icon, name, desc, backTitle, backDesc }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`service-card${flipped ? ' service-card--flipped' : ''}`}
      onClick={() => setFlipped(f => !f)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setFlipped(f => !f)}
      aria-label={`Ver más sobre ${name}`}
    >
      <div className="service-card__inner">

        {/* ── Frente ── */}
        <div className="service-card__front">
          <span className="service-card__badge">
            <svg viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            ver más
          </span>
          <div className="service-card__icon">{icon}</div>
          <div className="service-card__name">{name}</div>
          <div className="service-card__hint">{desc}</div>
        </div>

        {/* ── Reverso ── */}
        <div className="service-card__back">
          <div className="service-card__back-label">{name}</div>
          <div className="service-card__back-content">
            <div className="service-card__back-title">{backTitle}</div>
            <p className="service-card__back-desc">{backDesc}</p>
          </div>
          <div className="service-card__back-close">↩ volver</div>
        </div>

      </div>
    </div>
  )
}

export default function Services() {

  return (
    <section className="services" id="servicios">
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
                  <FlipCard key={'card-service-key-' + i} {...service} />
              ))}
            </div>
          </article>
        </div>
      </div>

    </section>
  )
}