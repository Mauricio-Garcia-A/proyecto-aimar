import './Contact.scss'
import { useEffect, useRef, useState } from 'react';

import { IconFacebook, IconInstagram, IconTiktok, IconYoutube } from '../../Icons/IconsRedesSociales';
import { IconWhatsapp, IconTelefono, IconLocation } from '../../Icons/Icons';
import ContactMap from './ContactMap'

const CONTACT_ITEMS = [
  {
    icon: <IconWhatsapp />,
    label: 'WhatsApp',
    value: '+54 9 (0221) 3591030',
    href: 'https://wa.me/542213591030',
  },
  {
    icon: <IconTelefono />,
    label: 'Teléfono',
    value: '(0221) 427-7334',
    href: 'tel:+542214277334',
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
    icon: <IconTiktok />,
    label: 'Tiktok',
    value: 'aimar.gym',
    href: '#',
  },
  {
    icon: <IconYoutube />,
    label: 'Youtube',
    value: 'aimar.gym',
    href: '#',
  },
]
const CONTACT_ITEM_LOCATION = {
  icon: <IconLocation />,
  label: 'Direccion',
  value: 'Av. 1 Nº 1362 esq. 60, La Plata',
  href: '#',
}



const Contact = () => {
  //___ Animaciones del inicios__________________
  const aboutRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false) // Estado para la animación


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el elemento entra en pantalla, activamos la animación
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: dejar de observar una vez que ya se vio
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Se activa cuando el 20% de la sección es visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect(); // Limpieza al desmontar
  }, []);

  return(
  <section className="container-contact" id="contacto">

    <div className='SECTION-STANDAR '>
      <div className='CONTAINER-STANDAR '>
        <article className={`contact ${isVisible ? '--visible' : ''}`} ref={aboutRef}>
          <div className="contact__header">
            <p className="contact__label">Encontranos</p>
            <h2 className="contact__title">Contacto</h2>
          </div>

          <div className="contact__container">

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
              <div className="contact__item">
                <div className="contact__icon">{CONTACT_ITEM_LOCATION.icon}</div>
                <div className="contact__info">
                  <span className="contact__info-label">{CONTACT_ITEM_LOCATION.label}</span>
                  <a href={CONTACT_ITEM_LOCATION.href} className='contact__info-value'>{CONTACT_ITEM_LOCATION.value}</a>
                </div>
              </div>
              <ContactMap />
            </div>

          </div>

        </article>

      </div>
    </div>


  </section>
)
}
export default Contact