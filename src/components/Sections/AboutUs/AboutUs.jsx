import './AboutUs.scss'

const AboutUs = () => (
  <section className="about" id="nosotros">
    <div className='bg-nosotros'></div>
{/*
    <img src='./images/gymbg.png' className='image-bg'/>
    
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
    */}
    <div className="about__content">
      <p className="about__label">Quiénes somos</p>
      <h2 className="about__title">Más que<br />un Gimnasio</h2>
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
      <a href="#contacto" className="btn btn--primary">
        Contactanos
      </a>
    </div>

  </section>
)

export default AboutUs