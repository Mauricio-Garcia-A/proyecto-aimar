import { useEffect, useState } from 'react'
import './Loader.scss'
import Logo from '../Logos/Logo'

// eslint-disable-next-line react/prop-types
const Loader = ({ onFinish }) => {
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    // Esperamos que el DOM esté listo + un mínimo visual de 1.5s
    const timer = setTimeout(() => {
      setHiding(true)
      // Después de la animación de salida, avisamos al padre
      setTimeout(() => onFinish(), 600)
    }, 1500)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div className={`loader${hiding ? ' loader--hiding' : ''}`}>
      <div className="loader__content">

        {/* Logo SVG */}
        <div className="loader__logo">
          <Logo />
        </div>

        {/* Barra de progreso */}
        <div className="loader__bar">
          <div className="loader__bar-fill" />
        </div>

        {/* Texto */}
        <p className="loader__text">Cargando...</p>

      </div>
    </div>
  )
}

export default Loader