import { useState } from 'react'
import './Schedule.scss'
import BgBottomServices from '../Services/bg-bottom-services'
import BgTopServices from '../Services/bg-top-services'
import { IconTimeClases, IconTimeMasajes, IconTimeMusculacion } from '../../Icons/IconsHorarios'


const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const DAYS_SHORT = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

const CLASSES = [
  { name: 'GAP', time: '15:00', days: [1, 3], color: '#34A853', key: 'gap', active: true },
  { name: 'Judo', time: '20:00', days: [1, 3], color: '#4285F4', key: 'judo', active: true },
  { name: 'Boxeo Recreativo', time: '21:00', days: [0, 2, 4], color: '#EA4335', key: 'boxeo', active: true },
  { name: 'Kickboxing Recreativo', time: '16:00', days: [0, 3], color: '#FBBC05', key: 'kick', active: true },
  { name: 'Funcional', time: '19:00', days: [0, 2, 4], color: '#9B51E0', key: 'func', active: true },
  { name: 'Spinning', time: '', days: [], color: '#FF6B35', key: 'spin', active: false },
  { name: 'Zumba', time: '', days: [], color: '#FF3D9A', key: 'zumba', active: false },
  { name: 'Yoga', time: '', days: [], color: '#00BFA5', key: 'yoga', active: false },
]

const FILTERS = [
  { label: 'Todos', key: 'all', active: true },
  ...CLASSES.map(c => ({ label: c.name, key: c.key, active: c.active })),
]

const FilterBtn = ({ f, activeFilter, onSelect }) => (
  <button
    className={[
      'schedule__filter',
      activeFilter === f.key ? 'schedule__filter--active' : '',
      !f.active ? 'schedule__filter--disabled' : '',
    ].join(' ')}
    onClick={() => f.active && onSelect(f.key)}
    title={!f.active ? 'Próximamente' : ''}
  >
    {f.label}
    {!f.active && <span className="schedule__filter-soon">pronto</span>}
  </button>
)

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0)
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredClasses = activeFilter === 'all'
    ? CLASSES.filter(c => c.active)
    : CLASSES.filter(c => c.key === activeFilter && c.active)

  const classesForDay = (dayIdx) =>
    filteredClasses
      .filter(c => c.days.includes(dayIdx))
      .sort((a, b) => a.time.localeCompare(b.time))

  return (
    <section className='container-horarios' id="horarios">
      <div className='bg-horarios'>
        <BgBottomServices className='top' />
        <BgTopServices className='bottom' />
      </div>

      <div className='SECTION-STANDAR '>
        <div className='CONTAINER-STANDAR '>
          <div className="schedule">
            <article>
              {/* ── Header ── */}
              <div className="schedule__header">
                <p className="schedule__label">Actividades</p>
                <h2 className="schedule__title">Horarios</h2>
              </div>

              {/* ── 3 Bloques superiores ── */}
              <div className="schedule__blocks">
                <div className="schedule__block">
                  <span className="schedule__block-icon"><IconTimeMusculacion /></span>
                  <div className="schedule__block-name">Musculación</div>
                  <span className="schedule__block-badge">Ingreso libre</span>
                  <p className="schedule__block-hours">
                    <strong>Lun – Vie</strong> · 8:00 a 22:00 hs<br />
                    <strong>Sábados</strong> · 9:00 a 12:00 hs
                  </p>
                </div>

                <div className="schedule__block">
                  <span className="schedule__block-icon"><IconTimeClases /></span>
                  <div className="schedule__block-name">Clases grupales</div>
                  <span className="schedule__block-badge">Con horario fijo</span>
                  <p className="schedule__block-hours">
                    GAP · Judo · Boxeo<br />
                    Kickboxing · Funcional<br />
                    <span className="schedule__block-note">y más según temporada</span>
                  </p>
                </div>

                <div className="schedule__block">
                  <span className="schedule__block-icon"><IconTimeMasajes /></span>
                  <div className="schedule__block-name">Masajes</div>
                  <span className="schedule__block-badge">A coordinar</span>
                  <p className="schedule__block-hours">
                    Consultá disponibilidad<br />y reservá tu turno
                  </p>
                  <a
                    className="schedule__block-cta"
                    href="https://wa.me/542213591030"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Consultar por WhatsApp →
                  </a>
                </div>
              </div>
            </article>

            <article>
              {/* ── Grilla desktop ── */}
              <div className="schedule__filters-wrap">
                <span className="schedule__grid-title">Grilla semanal</span>
                <div className="schedule__filters">
                  {FILTERS.map(f => (
                    <FilterBtn
                      key={f.key}
                      f={f}
                      activeFilter={activeFilter}
                      onSelect={setActiveFilter}
                    />
                  ))}
                </div>
              </div>

              <div className="schedule__grid">
                {DAYS.map((day, di) => (
                  <div className="schedule__col" key={day}>
                    <div className="schedule__col-head">{day}</div>
                    <div className="schedule__col-body">
                      {classesForDay(di).length === 0 ? (
                        <span className="schedule__empty">—</span>
                      ) : (
                        classesForDay(di).map((c, i) => (
                          <div
                            key={i}
                            className="schedule__clase"
                            style={{ borderLeftColor: c.color }}
                          >
                            <div className="schedule__clase-name">{c.name}</div>
                            <div className="schedule__clase-time">{c.time} hs</div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="schedule__legend">
                {CLASSES.filter(c => c.active).map(c => (
                  <div className="schedule__leg-item" key={c.key}>
                    <span className="schedule__leg-dot" style={{ background: c.color }} />
                    {c.name}
                  </div>
                ))}
              </div>

              <p className="schedule__note">
                * Los horarios pueden variar según temporada. Consultá novedades en nuestras redes.
              </p>

              {/* ── Mobile ── */}
              <div className="schedule__mobile">

                {/* Filtros arriba */}
                <div className="schedule__mobile-filters">
                  {FILTERS.map(f => (
                    <FilterBtn
                      key={f.key}
                      f={f}
                      activeFilter={activeFilter}
                      onSelect={setActiveFilter}
                    />
                  ))}
                </div>

                {/* Tabs con cantidad */}
                <div className="schedule__tabs">
                  {DAYS_SHORT.map((d, i) => {
                    const count = classesForDay(i).length
                    return (
                      <button
                        key={d}
                        className={`schedule__tab${activeDay === i ? ' schedule__tab--active' : ''}`}
                        onClick={() => setActiveDay(i)}
                      >
                        <span className="schedule__tab-day">{d}</span>
                        <span className="schedule__tab-count">{count}</span>
                      </button>
                    )
                  })}
                </div>

                {/* Contenido del día */}
                <div className="schedule__tab-content">
                  {classesForDay(activeDay).length === 0 ? (
                    <p className="schedule__tab-empty">Sin clases este día</p>
                  ) : (
                    classesForDay(activeDay).map((c, i) => (
                      <div
                        key={i}
                        className="schedule__tab-clase"
                        style={{ borderLeftColor: c.color }}
                      >
                        <span className="schedule__tab-time">{c.time}</span>
                        <div>
                          <div className="schedule__tab-name">{c.name}</div>
                          <div className="schedule__tab-tag">Clase grupal</div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <p className="schedule__note">
                  * Los horarios pueden variar según temporada.
                </p>

              </div>
            </article>
          </div>

        </div>
      </div>






    </section>
  )
}

export default Schedule