import { useState, useEffect } from 'react'
import './LoginModal.scss'
import Logo from '../../Logos/Logo'

const TABS = [
  { id: 'alumno', label: 'Alumno' },
  { id: 'profesor', label: 'Profesor' },
]

const LoginModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('alumno')
  const [form, setForm] = useState({ email: '', password: '' })

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

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: conectar con el backend Node/Express
    console.log('Login:', { role: activeTab, ...form })
  }

  const handleTabChange = (id) => {
    setActiveTab(id)
    setForm({ email: '', password: '' })
  }

  if (!isOpen) return null

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal" role="dialog" aria-modal="true">

        <button className="modal__close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        <div className="modal__header">
          <Logo />
          <p className="modal__subtitle">Acceso de miembros</p>
        </div>

        <div className="modal__tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`modal__tab${activeTab === tab.id ? ' modal__tab--active' : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="modal__field">
            <label className="modal__label" htmlFor="email">
              {activeTab === 'profesor' ? 'Email institucional' : 'Email'}
            </label>
            <input
              className="modal__input"
              id="email"
              name="email"
              type="email"
              placeholder={
                activeTab === 'profesor'
                  ? 'profesor@aimar.com'
                  : 'tu@email.com'
              }
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal__field">
            <label className="modal__label" htmlFor="password">
              Contraseña
            </label>
            <input
              className="modal__input"
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="modal__submit btn btn--primary" type="submit">
            Ingresar como {activeTab === 'alumno' ? 'Alumno' : 'Profesor'}
          </button>
        </form>

      </div>
    </div>
  )
}

export default LoginModal