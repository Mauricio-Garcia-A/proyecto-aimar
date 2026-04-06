import { useRef, useState, useEffect, useCallback } from 'react'
import './Products.scss'

const PRODUCTS = [
  { name: 'Agua',              category: 'Hidratación',  img: null },
  { name: 'Jugos naturales',   category: 'Bebidas',      img: null },
  { name: 'Barras nutritivas', category: 'Nutrición',    img: null },
  { name: 'Proteínas',         category: 'Suplementos',  img: null },
  { name: 'Creatina',          category: 'Suplementos',  img: null },
  { name: 'Remeras Aimar',     category: 'Indumentaria', img: null },
  { name: 'Shorts',            category: 'Indumentaria', img: null },
  { name: 'Accesorios',        category: 'Equipamiento', img: null },
]

const CARD_WIDTH  = 180
const CARD_GAP    = 8

const Products = () => {
  const trackRef  = useRef(null)
  const wrapRef   = useRef(null)
  const [offset, setOffset]   = useState(0)
  const [maxOffset, setMaxOffset] = useState(0)

  useEffect(() => {
    const calcMax = () => {
      if (!wrapRef.current) return
      const total = PRODUCTS.length * (CARD_WIDTH + CARD_GAP) - CARD_GAP
      const wrap  = wrapRef.current.offsetWidth
      setMaxOffset(Math.max(0, total - wrap))
    }
    calcMax()
    window.addEventListener('resize', calcMax)
    return () => window.removeEventListener('resize', calcMax)
  }, [])

  const scroll = useCallback((dir) => {
    setOffset(prev => {
      const next = prev + dir * (CARD_WIDTH + CARD_GAP) * 2
      return Math.max(0, Math.min(next, maxOffset))
    })
  }, [maxOffset])

  useEffect(() => {
    if (!trackRef.current) return
    trackRef.current.style.transform = `translateX(-${offset}px)`
  }, [offset])

  const canPrev = offset > 0
  const canNext = offset < maxOffset

  return (
    <section className="products" id="productos">

      <div className="products__header">
        <div>
          <p className="products__label">Productos Disponible en el gym</p>
        </div>
        <div className="products__arrows">
          <button
            className={`products__arrow${!canPrev ? ' products__arrow--disabled' : ''}`}
            onClick={() => scroll(-1)}
            aria-label="Anterior"
            disabled={!canPrev}
          >
            &#8592;
          </button>
          <button
            className={`products__arrow${!canNext ? ' products__arrow--disabled' : ''}`}
            onClick={() => scroll(1)}
            aria-label="Siguiente"
            disabled={!canNext}
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="products__wrap" ref={wrapRef}>
        <div className="products__track" ref={trackRef}>
          {PRODUCTS.map((p) => (
            <div className="products__card" key={p.name}>
              <div className="products__img-wrap">
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.name}
                    className="products__img"
                  />
                ) : (
                  <div className="products__placeholder">
                    <svg viewBox="0 0 48 48" fill="none">
                      <rect x="8" y="8" width="32" height="32" rx="2" stroke="#333" strokeWidth="1"/>
                      <path d="M8 32 L16 22 L22 28 L30 18 L40 32" stroke="#333" strokeWidth="1" strokeLinejoin="round"/>
                      <circle cx="18" cy="16" r="3" stroke="#333" strokeWidth="1"/>
                    </svg>
                  </div>
                )}
              </div>
              <div className="products__info">
                <div className="products__name">{p.name}</div>
                <div className="products__category">{p.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Products