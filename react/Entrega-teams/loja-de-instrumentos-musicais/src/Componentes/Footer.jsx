import Styles from './css/Footer.module.css'
import whatsapp from '../assets/img/whatsapp.png'
import instagram from '../assets/img/instagram.png'
import facebook from '../assets/img/facebook.png'

function Footer(){
  return(
    <footer>
        <h3>Nossa Loja - Instrumentos Musicais</h3>
        <p>Rua Tito, 54 - Lapa</p>
        <p>São Paulo - Brasil</p>
        <nav>
          <a href="#"><div style={{ backgroundImage: `url(${whatsapp})` }} className={Styles.whatsapp}></div></a>
          <a href="#"><div style={{ backgroundImage: `url(${instagram})` }} className={Styles.instagram}></div></a>
          <a href="#"><div style={{ backgroundImage: `url(${facebook})` }} className={Styles.facebook}></div></a>
        </nav>
    </footer>
  )
}

export default Footer