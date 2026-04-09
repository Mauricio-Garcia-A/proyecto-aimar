import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './ContactMap.scss'
import LogoSinRotulo from '../../Logos/LogoSinRotulo'

// Fix ícono por defecto de Leaflet con Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl:       new URL('leaflet/dist/images/marker-icon.png',    import.meta.url).href,
  shadowUrl:     new URL('leaflet/dist/images/marker-shadow.png',  import.meta.url).href,
})

// Ícono personalizado dorado
const goldIcon = new L.DivIcon({
  className: 'map-marker',
  html: `
    <div class="map-marker__pin">
      <div class="map-marker__inner"></div>
    </div>
    <div class="map-marker__shadow"></div>
  `,
  iconSize:   [32, 42],
  iconAnchor: [16, 42],
  popupAnchor:[0, -44],
})

const POSITION = [-34.915488053992426, -57.93475924863776] // Av. 1 Nº 1362, La Plata

const ContactMap = () => (
  <div className="contact-map">
    <MapContainer
      center={POSITION}
      zoom={16}
      scrollWheelZoom={true}
      className="contact-map__container"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={POSITION} icon={goldIcon}>
        <Popup className="map-popup">
          <LogoSinRotulo style={{with:'30px'}}/>
          <strong>Aimar Centro de Entrenamiento</strong><br />
          Av. 1 Nº 1362 esq. 60, La Plata, Buenos Aires
        </Popup>
      </Marker>
    </MapContainer>
  </div>
)

export default ContactMap