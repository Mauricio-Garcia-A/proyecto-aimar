import './Stars.scss'

const STATS = [
  { value: '14+', label: 'Años de experiencia' },
  { value: '500+', label: 'Alumnos activos' },
  { value: '6', label: 'Días a la semana' },
  { value: '100%', label: 'Compromiso' },
]

const Stats = () => (
  <section className="stats" id="stats">
    {STATS.map((stat) => (
      <div className="stats__item" key={stat.label}>
        <span className="stats__number">{stat.value}</span>
        <span className="stats__label">{stat.label}</span>
      </div>
    ))}
  </section>
)

export default Stats