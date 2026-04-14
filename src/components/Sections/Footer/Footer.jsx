import LogoSinRotulo from '../../Logos/LogoSinRotulo'
import LogoMAG from '../../Logos/LogoMAG'

import './Footer.scss'

const Footer = () => (
  <footer className="footer">

    <div className="footer__top">
      <div className="footer__brand">
        <div className='footer__logo'>
          <LogoSinRotulo />
        </div>
        <p className="footer__slogan">
          Si hay determinación, no hay límites.
        </p>
      </div>
      {/*
      <div className="footer__links">
        <p className="footer__links-title">Navegación</p>
        <ul>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>

      <div className="footer__links">
        <p className="footer__links-title">Contacto</p>
        <ul>
          <li>
            <a href="https://wa.me/542213591030" target="_blank" rel="noreferrer">
              WhatsApp · 2213591030
            </a>
          </li>
          <li>
            <a href="https://instagram.com/aimargym" target="_blank" rel="noreferrer">
              Instagram · @aimargym
            </a>
          </li>
          <li>
            <a href="https://facebook.com/aimar.gym" target="_blank" rel="noreferrer">
              Facebook · aimar.gym
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__links">
        <p className="footer__links-title">Horarios</p>
        <ul>
          <li>Lunes a Viernes</li>
          <li>8:00 a 22:00 hs</li>
          <li className="footer__spacer">—</li>
          <li>Sábados</li>
          <li>9:00 a 12:00 hs</li>
        </ul>
      </div>
      */}
    </div>
    

    <div className="footer__bottom">
      <p className="footer__copy">
        © {new Date().getFullYear()} Aimar Centro de Entrenamiento 
      </p>
      <p className="footer__copy">
        Todos los derechos reservados | Sitio creado por <a href='#' className='linkMAG'>M.A.G</a> 
      </p>
      <div className='container-logo-mag'>
        <LogoMAG />
      </div>
    </div>

  </footer>
)

export default Footer