import './Mission.scss'

const IconMission = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="10" stroke="#F5C518" strokeWidth="1.2"/>
    <circle cx="20" cy="20" r="3" fill="#F5C518"/>
    <line x1="20" y1="4"  x2="20" y2="10" stroke="#F5C518" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="20" y1="30" x2="20" y2="36" stroke="#F5C518" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="4"  y1="20" x2="10" y2="20" stroke="#F5C518" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="30" y1="20" x2="36" y2="20" stroke="#F5C518" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="8.7"  y1="8.7"  x2="13" y2="13"   stroke="#F5C518" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="27"   y1="27"   x2="31.3" y2="31.3" stroke="#F5C518" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="31.3" y1="8.7"  x2="27" y2="13"    stroke="#F5C518" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="13"   y1="27"   x2="8.7" y2="31.3"  stroke="#F5C518" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

const IconVision = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="13" stroke="#F5C518" strokeWidth="1.2"/>
    <circle cx="20" cy="20" r="7"  stroke="#F5C518" strokeWidth="1.2" strokeDasharray="2 2"/>
    <circle cx="20" cy="20" r="2"  fill="#F5C518"/>
    <circle cx="30" cy="10" r="2"  fill="#F5C518"/>
    <path d="M20 20 L20 6"  stroke="#F5C518" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M20 20 L30 10" stroke="#F5C518" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

const IconValues = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon
      points="20,5 24,15 35,15 26,22 29,33 20,26 11,33 14,22 5,15 16,15"
      stroke="#F5C518"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
)

const ITEMS = [
  {
    num: '01',
    icon: <IconMission />,
    title: 'Misión',
    content: (
      <p className="mission__text">
        Brindar un espacio de entrenamiento integral donde cada persona pueda
        desarrollar su potencial físico, alcanzar sus metas y mejorar su calidad
        de vida, guiados por profesionales comprometidos.
      </p>
    ),
  },
  {
    num: '02',
    icon: <IconVision />,
    title: 'Visión',
    content: (
      <p className="mission__text">
        Ser el centro de entrenamiento de referencia en La Plata, reconocido por
        la excelencia de nuestros profesionales, la calidad de nuestras
        instalaciones y el impacto positivo en la vida de nuestros alumnos.
      </p>
    ),
  },
  {
    num: '03',
    icon: <IconValues />,
    title: 'Valores',
    content: (
      <ul className="mission__values">
        {[
          { name: 'Determinación', desc: 'no hay límites para quien persiste' },
          { name: 'Compromiso',    desc: 'con cada alumno y su proceso individual' },
          { name: 'Excelencia',    desc: 'en la enseñanza y en las instalaciones' },
          { name: 'Comunidad',     desc: 'un espacio de pertenencia y respeto' },
        ].map(v => (
          <li className="mission__value-item" key={v.name}>
            <span className="mission__value-dot" />
            <span>
              <strong className="mission__value-name">{v.name}</strong>
              {' '}— {v.desc}
            </span>
          </li>
        ))}
      </ul>
    ),
  },
]

const Mission = () => (
  <section className='mission-container' id="mision">
    <div className='SECTION-STANDAR '>
      <div className='CONTAINER-STANDAR '>
        <article className="mission" >
          {ITEMS.map((item) => (
            <div className="mission__item" key={item.num}>
              <span className="mission__num">{item.num}</span>
              <div className="mission__icon">{item.icon}</div>
              <div className="mission__title">{item.title}</div>
              {item.content}
            </div>
          ))}
        </article>
      </div>
    </div> 
  </section>
)

export default Mission