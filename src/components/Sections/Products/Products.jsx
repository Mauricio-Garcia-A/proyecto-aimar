import { useRef, useState, useEffect } from 'react'
import './Products.scss'
import { ThreeArrows } from '../../Icons/Icons'

const PRODUCTS = [
  { name: 'Agua', category: 'Hidratación', img: './images/products/Aguas.png' },
  { name: 'Jugos naturales', category: 'Bebidas', img: './images/products/Jugos.png' },
  { name: 'Barras nutritivas', category: 'Nutrición', img: './images/products/BarraCereal.png' },
  { name: 'Proteínas', category: 'Suplementos', img: './images/products/Proteinas.png' },
  { name: 'Creatina', category: 'Suplementos', img: './images/products/Creatina.png' },
  { name: 'Remeras Aimar', category: 'Indumentaria', img: './images/products/Remera.png' },
  { name: 'Shorts', category: 'Indumentaria', img: './images/products/Short.png' },
  { name: 'Guantes', category: 'Equipamiento', img: './images/products/Guantes.png' },
]

const SCROLL_AMOUNT = 2

const Products = () => {
  const wrapRef = useRef(null)
  const firstCardRef = useRef(null)
  const lastCardRef = useRef(null)

  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  // ── IntersectionObserver para los límites ──────────────
  useEffect(() => {
    const options = { root: wrapRef.current, threshold: 0.9 }

    const firstObserver = new IntersectionObserver(
      ([entry]) => setAtStart(entry.isIntersecting),
      options
    )
    const lastObserver = new IntersectionObserver(
      ([entry]) => setAtEnd(entry.isIntersecting),
      options
    )

    if (firstCardRef.current) firstObserver.observe(firstCardRef.current)
    if (lastCardRef.current) lastObserver.observe(lastCardRef.current)

    return () => {
      firstObserver.disconnect()
      lastObserver.disconnect()
    }
  }, [])

  const scroll = (dir) => {
    if (!wrapRef.current) return
    const card = wrapRef.current.querySelector('.products__card')
    if (!card) return
    const amount = (card.offsetWidth + 100) * SCROLL_AMOUNT
    wrapRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section className="products" id="productos">
      <div className="SECTION-STANDAR">
        <div className="CONTAINER-STANDAR">
          <div className="container-products">

            <article className="products__header">
              <div className="products__arrows">
                <button
                  className={`products__arrow${atStart ? ' products__arrow--disabled' : ''}`}
                  onClick={() => !atStart && scroll(-1)}
                  aria-label="Anterior"
                  disabled={atStart}
                >
                 <ThreeArrows className='right' />
                </button>
                <div>
                  <p className="products__label">Productos Disponibles en el gym</p>
                </div>
                <button
                  className={`products__arrow${atEnd ? ' products__arrow--disabled' : ''}`}
                  onClick={() => !atEnd && scroll(1)}
                  aria-label="Siguiente"
                  disabled={atEnd}
                >
                  <ThreeArrows className='left' />
                </button>
              </div>
            </article>

            <article className="products__wrap" ref={wrapRef}>
              <div className="products__track">
                {PRODUCTS.map((p, i) => (
                  <div
                    className="products__card"
                    key={p.name}
                    ref={
                      i === 0
                        ? firstCardRef
                        : i === PRODUCTS.length - 1
                          ? lastCardRef
                          : null
                    }
                  >
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
                            <rect x="8" y="8" width="32" height="32" rx="2" stroke="#333" strokeWidth="1" />
                            <path d="M8 32 L16 22 L22 28 L30 18 L40 32" stroke="#333" strokeWidth="1" strokeLinejoin="round" />
                            <circle cx="18" cy="16" r="3" stroke="#333" strokeWidth="1" />
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
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Products