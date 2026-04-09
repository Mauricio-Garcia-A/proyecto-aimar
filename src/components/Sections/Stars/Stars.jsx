import './Stars.scss'

const STARS = [
  { value: '14+', label: 'Años de experiencia' },
  { value: '500+', label: 'Alumnos activos' },
  { value: '6', label: 'Días a la semana' },
  { value: '100%', label: 'Compromiso' },
]

const Stars = () => (
  <section className='container-stars'>
    <div className='SECTION-STANDAR '>
      <div className='CONTAINER-STANDAR '>
        <article className="stars" id="stars">
          {STARS.map((star) => (
            <div className="stars__item" key={star.label}>
              <span className="stars__number">{star.value}</span>
              <span className="stars__label">{star.label}</span>
            </div>
          ))}
        </article>
      </div>
    </div>
  </section>

)

export default Stars