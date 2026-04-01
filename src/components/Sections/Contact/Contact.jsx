import './Contact.scss'

const CONTACT_ITEMS = [
  {
    icon: '📱',
    label: 'WhatsApp',
    value: '2213591030',
    href: 'https://wa.me/542213591030',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@aimargym',
    href: 'https://instagram.com/aimargym',
  },
  {
    icon: '📘',
    label: 'Facebook',
    value: 'aimar.gym',
    href: 'https://facebook.com/aimar.gym',
  },
  {
    icon: '📍',
    label: 'Dirección',
    value: 'Av. 1 Nº 1362 esq. 60, La Plata',
    href: 'https://maps.google.com/?q=Av.+1+1362+La+Plata+Buenos+Aires',
  },
  {
    icon: '📞',
    label: 'Teléfono',
    value: '0221 427-7334',
    href: 'tel:+542214277334',
  },
  {
    icon: '🕐',
    label: 'Horarios',
    value: 'Lun–Vie: 8 a 22hs · Sáb: 9 a 12hs',
    href: null,
  },
]

const Contact = () => (
  <section className="contact" id="contacto">

    <div className="contact__header">
      <p className="contact__label">Encontranos</p>
      <h2 className="contact__title">Contacto</h2>
    </div>

    <div className="contact__grid">

      <ul className="contact__list">
        {CONTACT_ITEMS.map((item) => (
          <li className="contact__item" key={item.label}>
            <div className="contact__icon">{item.icon}</div>
            <div className="contact__info">
              <span className="contact__info-label">{item.label}</span>
              www
            </div>
          </li>
        ))}
      </ul>

      <div className="contact__cta">
        <p className="contact__cta-heading">¿Ya sos alumno?</p>
        <p className="contact__cta-text">
          Accedé a tu cuenta para ver tus rutinas y registrar
          tus entrenamientos diarios.
        </p>
        <button className="btn btn--primary">
          Ingresar a mi cuenta
        </button>
      </div>

    </div>
  </section>
)

export default Contact