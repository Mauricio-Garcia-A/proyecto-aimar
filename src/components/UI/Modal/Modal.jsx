import { useEffect } from 'react'
import './Modal.scss'

const Modal = ({ isOpen, onClose, title, subtitle, children }) => {

  // Cerrar con Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  // Bloquear scroll del body
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal" role="dialog" aria-modal="true">

        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>

        {(title || subtitle) && (
          <div className="modal__header">
            {title    && <div className="modal__title">{title}</div>}
            {subtitle && <p  className="modal__subtitle">{subtitle}</p>}
          </div>
        )}

        <div className="modal__body">
          {children}
        </div>

      </div>
    </div>
  )
}

export default Modal