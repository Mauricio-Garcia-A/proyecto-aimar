import './Hero.scss';
import Logo from '../../Logos/Logo'

import { useEffect, useRef } from 'react'

export default function Hero() {

  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.classList.add('--visible')
  }, [])

  return (
    <section className="hero" id="inicio" >
      <div className='hero-bg'>
        <article className='container-hero' >
          <div className="hero__info" ref={heroRef}>
            <p className="hero__tag">La Plata · Buenos Aires · Argentina</p>
            <div className='hero__logo'><Logo /></div>
            <p className="hero__sub">Musculación · Fitness · Spinning</p>
            <br /><br /><br />
            <p className="hero__slogan">"Si hay determinación, no hay límites."</p>

            <div className="hero__actions">
              <a href="#servicios" className="btn btn--primary">
                Ver Servicios
              </a>
              <button className="btn btn--secondary">
                Acceder a mi cuenta
              </button>
            </div>
          </div>
        </article>
        <div className="hero-watermark">GYM</div>       
      </div>
    </section>
  );
}