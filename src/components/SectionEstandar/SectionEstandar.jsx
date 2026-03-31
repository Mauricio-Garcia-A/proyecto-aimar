import './SectionEstandar.scss'

export default function SectionEstandar({ id='id', bg='red', children=null}) {
  return (
    <section
      id={id}
      style={{background:bg}}
      className='container-section-estandar'
    >
      {children}
    </section>
  )
}
