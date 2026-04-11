import './Ticker.scss'

const ITEMS = [
  ['Musculación','full time'],
  ['Lunes a Viernes ','8 a 22hs'],
  ['Sábados ','9 a 12hs'],
  ['WhatsApp ','0221 3591030'],
  ['Instagram ','@aimargym'],
  ['Av. 1 Nº 1362 esq. 60 ','La Plata'],
  ['Si hay determinación','no hay límites'],
]

const Ticker = () => {
  // Duplicamos el array para el loop infinito seamless
  const items = [...ITEMS, ...ITEMS]

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {items.map((item, i) => (
          <span className="ticker__item" key={i}>
            <span className='p1'>{item[0]}</span><span className='p2'> · </span><span className='p3'>{item[1]}</span>
            <span className="ticker__sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Ticker