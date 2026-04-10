import './Hero.scss';
import Logo from '../../Logos/Logo'

import { useEffect, useRef } from 'react'
import { IconFacebook, IconInstagram, IconTiktok, IconYoutube } from '../../Icons/IconsRedesSociales';
import { ThreeArrows } from '../../Icons/Icons';

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
        <div className="hero-watermark">+GYM</div>
        <div className='SECTION-STANDAR '>
          <div className='CONTAINER-STANDAR '>
            <article className='container-hero' >
              <div className='hero-redes-sociales'>
                <a> <IconInstagram /> </a>
                <a> <IconFacebook /> </a>
                <a> <IconTiktok /> </a>
                <a> <IconYoutube /> </a>
              </div>

              <div className="hero__info" ref={heroRef}>
                <p className="hero__tag">La Plata · Buenos Aires · Argentina</p>
                <div className='hero__logo'><Logo /></div>
                <p className="hero__sub">Musculación · Funcional · Masajes</p>
                <br />
                <p className="hero__slogan">&ldquo;Si hay determinación, no hay límites&rdquo;</p>
              </div>

              <div className="hero__actions">
                <div className='container-button-arrows'>
                  <ThreeArrows className='left' />
                  <a className="btn btn--primary">
                    ENTRENAR AHORA!
                  </a>
                  <ThreeArrows className='right' />
                </div>

                {/*
                  <button className="btn btn--secondary">
                    Acceder a mi cuenta
                  </button>
                  */}
              </div>
            </article>
          </div>
        </div>
        
      </div>
    </section>
  );
}