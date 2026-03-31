import './NavBar.scss'
import Logo from '../Logos/LogoSinRotulo'
import ButtonDropdown from './ButtonDropdown/ButtonDropdown'
import { useState } from 'react'
import { IconInstagram, IconLocation, IconWhatsapp } from '../Icons/Icons'

const options = [
    {
        name: 'NOSOTROS',
        id: 'id-nosotros',
        url: ''
    }, {
        name: 'SERVICIOS',
        id: 'id-servicios',
        url: ''
    },
    {
        name: 'CONTACTO',
        id: 'id-contacto',
        url: ''
    }
]



export default function NavBar() {
    const [menuDesplegado, setMenuDesplegado] = useState(false)
    const handleClick = () => {
        setMenuDesplegado(!menuDesplegado)
    }

    return (
        <nav className='container-Navbar'>
            <article className='container-logo'>
                <Logo />
            </article>

            <article className={`container-menu-options ${menuDesplegado ? "" : "menu-desactivo"}`}>
                <section className='container-list-links'>
                  <ul className={`container-link-navbar `}>
                      {options.map((option) => {
                          return <li key={option.id} className='link-navbar'>
                              <a href="">{option.name}</a>
                          </li>
                      })}
                  </ul>
                </section>
                
                <section className='container-contact-navbar'>
                 <button>INGRESAR</button>

                </section>


            </article>


            <div
                className='container-button-dropdown'
                onClick={() => handleClick()}
            >
                <ButtonDropdown estadoDesplegado={menuDesplegado} />
            </div>

        </nav>
    )
}
