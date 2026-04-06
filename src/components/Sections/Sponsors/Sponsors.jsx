import './Sponsors.scss'

const SPONSORS = [
  { name: 'SportNutrition',   img: null },
  { name: 'MedicalGroup',     img: null },
  { name: 'FitStore',         img: null },
  { name: 'ProSupps',         img: null },
  { name: 'ActiveWear',       img: null },
  { name: 'Farmacia Central', img: null },
]

// eslint-disable-next-line react/prop-types
const SponsorItem = ({ name, img }) => (
  <div className="sponsors__item">
    <div className="sponsors__logo">
      {img ? (
        <img src={img} alt={name} className="sponsors__img" />
      ) : (
        <span className="sponsors__placeholder">{name}</span>
      )}
    </div>
    <div className="sponsors__sep" />
  </div>
)

const Sponsors = () => {
  const items = [...SPONSORS, ...SPONSORS]

  return (
    <div className="sponsors" aria-label="Sponsors y partners">

      <div className="sponsors__header">
        <span className="sponsors__label">Sponsors &amp; Partners</span>
        <div className="sponsors__line" />
      </div>

      <div className="sponsors__wrap">
        <div className="sponsors__track">
          {items.map((s, i) => (
            <SponsorItem key={i} {...s} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Sponsors