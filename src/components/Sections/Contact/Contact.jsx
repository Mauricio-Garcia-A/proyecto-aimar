import './Contact.scss'

import { IconFacebook, IconInstagram } from '../../Icons/IconsRedesSociales';
import { IconWhatsapp, IconTelefono } from '../../Icons/Icons';
import ContactMap from './ContactMap'

const CONTACT_ITEMS = [
  {
    icon: <IconWhatsapp />,
    label: 'WhatsApp',
    value: '+54 9 (0221)3591030',
    href: 'https://wa.me/542213591030',
  },
  {
    icon: <IconInstagram />,
    label: 'Instagram',
    value: '@aimargym',
    href: 'https://instagram.com/aimargym',
  },
  {
    icon: <IconFacebook />,
    label: 'Facebook',
    value: 'aimar.gym',
    href: 'https://facebook.com/aimar.gym',
  },
  {
    icon: <IconTelefono />,
    label: 'Teléfono',
    value: '(0221) 427-7334',
    href: 'tel:+542214277334',
  },
]

const Contact = () => (
  <section className="container-contact" id="contacto">

    <div className='SECTION-STANDAR '>
      <div className='CONTAINER-STANDAR '>
        <article className="contact" >
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
                    <a href={item.href} className='contact__info-value'>{item.value}</a>
                  </div>
                </li>
              ))}
            </ul>

            <div className="contact__map">
              <ContactMap />
            </div>

          </div>

        </article>

      </div>
    </div>


  </section>
)

export default Contact