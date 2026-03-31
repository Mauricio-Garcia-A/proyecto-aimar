import Logo from '../Logos/Logo'
import './FooterSection.scss'

export default function FooterSection() {
  return (
    <section className='container-footer'>
        <article className='container-datos-contact'>
          <div>
            <Logo />
            <h2>Nuestras redes </h2>
            <p> Encontranos en nuestras redes sociales para conocer más sobre nuestros y poder contactarnos.</p>
          </div>
          <div>
            <h2>Horarios de Atencion</h2>
            <p>lun a vie</p>
            <p>08:00 - 21:00 hs</p>
            <p>Sab</p>
            <p>09:00 - 12:00 hs</p>
            <p>Dom</p>
            <p>Cerrado</p>
          </div>
          <div>
            <h2>Datos de Contacto</h2>
            <p>Dereccion</p>
            <p>Calle 1 - num 1060 - La Plata </p>
            <p>Telefono</p>
            <p>0221 XXXXXXX </p>

          </div>
        </article>
        <article className='container-copyright'> 
          <p>Copyright ©2023 - Todos los derechos reservados | Sitio Web realisado por M.A.G.</p>
        </article>

      </section>
  )
}