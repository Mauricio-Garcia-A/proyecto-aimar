import './NavBar.scss'
import ButtonDropdown from './ButtonDropdown/ButtonDropdown'
import { useEffect, useState } from 'react'
import LogoMini from '../Logos/LogoMini'

const options = [
    {
        name: 'NOSOTROS',
        id: 'id-nosotros',
        url: '#nosotros'
    }, {
        name: 'SERVICIOS',
        id: 'id-servicios',
        url: '#servicios'
    }, {
        name: 'STAFF',
        id: 'id-staff',
        url: '#staff'
    }, {
        name: 'HORARIOS',
        id: 'id-horarios',
        url: '#horarios'
    }, {
        name: 'CONTACTO',
        id: 'id-contacto',
        url: '#contacto'
    }
]



// eslint-disable-next-line react/prop-types
export default function NavBar({ onLoginClick }) {
    const [menuDesplegado, setMenuDesplegado] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const handleClick = () => {
        setMenuDesplegado(!menuDesplegado)
    }


      // Cerrar menú mobile al hacer click en un link
  const handleLinkClick = () => setMenuOpen(false)

  // Bloquear scroll cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])


    return (
      <section className='section-Navbar'>
        <div className='bg-blur' />
        <div className='container-Navbar'>
          <nav className='Navbar'>
            <article className='container-logo'>
              <a href='#inicio'>
                <LogoMini />
              </a>
                
            </article>

            <article className={`container-menu-options ${menuDesplegado ? "menu-activo" : "menu-desactivo"}`}>
                <section className='container-list-links'>
                  <ul className={`container-link-navbar `}>
                      {options.map((option) => {
                          return <li key={option.id} className='link-navbar'>
                              <a href={option.url}>{option.name}</a>
                          </li>
                      })}
                  </ul>
                </section>
                
                <section className='container-contact-navbar'>
                 <button onClick={() => { handleLinkClick(); onLoginClick() }}>INGRESAR</button>

                </section>

            </article>


            <div
                className='container-button-dropdown'
                onClick={() => handleClick()}
            >
                <ButtonDropdown estadoDesplegado={menuDesplegado} />
            </div>

        </nav>

        </div>
         
      </section>
       
    )
}
