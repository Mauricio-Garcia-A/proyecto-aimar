import './AboutUs.scss'
import { useEffect, useRef, useState } from 'react'
import Modal from '../../UI/Modal/Modal'

const AboutUs = () => {
  const [open, setOpen] = useState(false)
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

  return (
    <section className="about" id="nosotros">
      <div className='bg-nosotros' />
      <div className='SECTION-STANDAR '>
        <div className='CONTAINER-STANDAR '>
          <article className="about__content">
            <div className={`about-info ${isVisible ? '--visible' : ''}`} ref={aboutRef}>
              <p className="about__label">Quiénes somos</p>
              <h2 className="about__title">Más que<br />un Gimnasio</h2>
              <div className='about__parafos'>
                <p className="about__text">
                  En Aimar creemos que cada persona tiene el potencial de superar
                  sus propios límites. Somos un espacio dedicado a acompañarte en
                  cada paso de tu proceso, desde el primer día hasta tus metas
                  más ambiciosas.
                </p>
                <p className="about__text">
                  Contamos con instalaciones modernas, equipamiento de primer nivel
                  y un equipo de profesores apasionados que diseñan y monitorean
                  tu progreso de forma personalizada.
                </p>
                <a className="btn btn--primary" onClick={() => setOpen(true)}>
                  leer mas
                </a>
              </div>

            </div>

          </article>
        </div>
      </div>


      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="TÍTULO"
        subtitle="subtítulo opcional"
      >
        <article>
          <div className="about__visual">
            <div className="about__visual-main">
              <span className="about__visual-watermark">AIMAR</span>
            </div>
            <div className="about__visual-accent">
              <span className="about__visual-accent-text">
                CENTRO DE<br />ENTRENAMIENTO
              </span>
            </div>
          </div>
        </article>
      </Modal>


    </section>
  )
}

export default AboutUs