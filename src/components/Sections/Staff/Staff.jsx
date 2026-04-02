import { useState, useEffect, useRef, useCallback } from 'react'
import './Staff.scss'

const STAFF = [
  { initials: 'MA', name: 'Marcelo Aimar',   role: 'Director · Fundador', spec: 'Musculación y fuerza' },
  { initials: 'LP', name: 'Lucas Pereyra',   role: 'Profesor',            spec: 'Musculación' },
  { initials: 'VR', name: 'Valeria Romero',  role: 'Profesora',           spec: 'Spinning y fitness' },
  { initials: 'DG', name: 'Diego González',  role: 'Profesor',            spec: 'Entrenamiento funcional' },
  { initials: 'SM', name: 'Sofía Méndez',    role: 'Profesora',           spec: 'Musculación' },
  { initials: 'FT', name: 'Franco Torres',   role: 'Profesor',            spec: 'Musculación y spinning' },
]

// Tiempo de AutoPlay
const AUTOPLAY_MS  = 5000
const getVisible   = () => window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 3 : 5

// Clonamos para loop infinito
const buildItems = (visible) => [
  ...STAFF.slice(-visible).map(s => ({ ...s, clone: true })),
  ...STAFF.map(s => ({ ...s, clone: false })),
  ...STAFF.slice(0, visible).map(s => ({ ...s, clone: true })),
]

const Staff = () => {
  const [visible, setVisible]   = useState(getVisible)
  const [items, setItems]       = useState(() => buildItems(getVisible()))
  const [current, setCurrent]   = useState(getVisible())   // apunta al primer item real
  const [paused, setPaused]     = useState(false)
  const [animate, setAnimate]   = useState(true)

  const trackRef    = useRef(null)
  const wrapRef     = useRef(null)
  const autoRef     = useRef(null)
  const progRef     = useRef(null)
  const progBarRef  = useRef(null)

  // ── Resize ────────────────────────────────────────────
  useEffect(() => {
    const onResize = () => {
      const v = getVisible()
      setVisible(v)
      setItems(buildItems(v))
      setCurrent(v)
      setAnimate(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // ── Calcular offset para centrar la card activa ───────
  const getOffset = useCallback(() => {
    if (!trackRef.current || !wrapRef.current) return 0
    const card = trackRef.current.children[0]
    if (!card) return 0
    const cardW  = card.offsetWidth + 8
    const wrapW  = wrapRef.current.offsetWidth
    const center = (wrapW - card.offsetWidth) / 2
    return center - current * cardW
  }, [current])

  // ── Aplicar transform ─────────────────────────────────
  useEffect(() => {
  if (!trackRef.current) return
  requestAnimationFrame(() => {
    if (!trackRef.current) return
    trackRef.current.style.transition = animate
      ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)'
      : 'none'
    trackRef.current.style.transform = `translateX(${getOffset()}px)`
  })
}, [current, animate, getOffset])

  // ── Jump silencioso al llegar a un clon ───────────────
  useEffect(() => {
    if (!animate) return
    const total = STAFF.length
    const timer = setTimeout(() => {
      if (current < visible) {
        setAnimate(false)
        setCurrent(current + total)
      } else if (current >= visible + total) {
        setAnimate(false)
        setCurrent(current - total)
      }
    }, 520)
    return () => clearTimeout(timer)
  }, [current, animate, visible])

  // Re-habilitar animación después del jump
  useEffect(() => {
    if (!animate) {
      const t = setTimeout(() => setAnimate(true), 50)
      return () => clearTimeout(t)
    }
  }, [animate])

  // ── Ir a un índice ────────────────────────────────────
  const goTo = useCallback((idx) => {
    setAnimate(true)
    setCurrent(idx)
    resetProgress()
  }, [])

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

  // ── Autoplay ──────────────────────────────────────────
  const startProgress = useCallback(() => {
    if (!progBarRef.current) return
    clearTimeout(progRef.current)
    progBarRef.current.style.transition = 'none'
    progBarRef.current.style.width = '0%'
    requestAnimationFrame(() => {
      progBarRef.current.style.transition = `width ${AUTOPLAY_MS}ms linear`
      progBarRef.current.style.width = '100%'
    })
    progRef.current = setTimeout(() => goNext(), AUTOPLAY_MS)
  }, [goNext])

  const stopProgress = useCallback(() => {
    clearTimeout(progRef.current)
    if (progBarRef.current) {
      const w = progBarRef.current.offsetWidth
      const parent = progBarRef.current.parentElement.offsetWidth
      progBarRef.current.style.transition = 'none'
      progBarRef.current.style.width = `${(w / parent) * 100}%`
    }
  }, [])

  const resetProgress = useCallback(() => {
    if (!paused) startProgress()
  }, [paused, startProgress])

  useEffect(() => {
    if (paused) stopProgress()
    else startProgress()
    return () => clearTimeout(progRef.current)
  }, [paused, startProgress, stopProgress])

  // ── Toggle pausa ──────────────────────────────────────
  const togglePause = () => setPaused(p => !p)

  // ── Hover (desktop) ───────────────────────────────────
  const handleMouseEnter = () => { if (!paused) stopProgress() }
  const handleMouseLeave = () => { if (!paused) startProgress() }

  // ── Dot activo ────────────────────────────────────────
  const activeDot = ((current - visible) % STAFF.length + STAFF.length) % STAFF.length

  return (
    <section className="staff" id="staff">

      <div className="staff__header">
        <div>
          <p className="staff__label">Nuestro equipo</p>
          <h2 className="staff__title">El Staff</h2>
        </div>
        <div className="staff__controls">
          <button className="staff__arrow" onClick={goPrev} aria-label="Anterior">&#8592;</button>
          <button className="staff__arrow" onClick={goNext} aria-label="Siguiente">&#8594;</button>
          <div className="staff__sep" />
          <button
            className={`staff__pause${paused ? ' staff__pause--paused' : ''}`}
            onClick={togglePause}
            aria-label={paused ? 'Reanudar' : 'Pausar'}
          >
            {paused ? '▶' : '⏸'}
          </button>
        </div>
      </div>

      <div
        className="staff__wrap"
        ref={wrapRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="staff__track" ref={trackRef}>
          {items.map((s, i) => {
            const isActive = i === current
            return (
              <div
                key={i}
                className={`staff__card${isActive ? ' staff__card--active' : ''}`}
                onClick={() => !s.clone && goTo(i)}
                style={{ '--visible': visible }}
              >
                <div className="staff__photo" data-alt={i % 2 === 0}>
                  <span className="staff__initials">{s.initials}</span>
                  <div className="staff__overlay" />
                </div>
                <div className="staff__info">
                  <div className="staff__name">{s.name}</div>
                  <div className="staff__role">{s.role}</div>
                  <div className="staff__spec">{s.spec}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="staff__dots">
        {STAFF.map((_, i) => (
          <button
            key={i}
            className={`staff__dot${i === activeDot ? ' staff__dot--active' : ''}`}
            onClick={() => goTo(i + visible)}
            aria-label={`Ir al profesor ${i + 1}`}
          />
        ))}
      </div>

      <div className="staff__progress-bar">
        <div
          className={`staff__progress${paused ? ' staff__progress--paused' : ''}`}
          ref={progBarRef}
        />
      </div>

    </section>
  )
}

export default Staff