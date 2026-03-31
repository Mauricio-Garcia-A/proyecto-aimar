import './ButtonDropdown.scss'
 
 export default function ButtonDropdown({estadoDesplegado}) {
   return (
    <div className={`icon nav-icon ${estadoDesplegado ? "open" : ""}`}>
    <span></span>
    <span></span>
    <span></span>
</div>
   )
 }
 
