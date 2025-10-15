import Styles from './css/Footer.module.css'
import Insta from '../assets/img/insta.jfif'
import Face from '../assets/img/face.jfif'
import Tiktok from '../assets/img/tiktok.png'
import Whats from '../assets/img/whtas.png'

function Footer(){

return(

<footer className={Styles.fundoFooter}> 
    <h1>Siga-nos em nossas redes sociais</h1>
     <div className={Styles.icones}>
        <img src={Insta} alt="Logo Instagran"  />
        <img src={Face} alt="Logo Facebook"  />
        <img src={Tiktok} alt="Logo tiktok"  />
        <img src={Whats} alt="Logo Whatsapp"  />
    </div> 
    <p>
        Telefone de contato +55 (11) 5362-7543
    </p> 

</footer>
   



)


}
export default Footer