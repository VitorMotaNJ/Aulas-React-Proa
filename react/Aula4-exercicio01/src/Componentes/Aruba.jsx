import Style from './css/Aruba.module.css'
import ComponentesProps from './ComponenteProps'
import BandeiraAruba from '../assets/img/BandeiraAruba.png'

function Aruba(){
return(
 <section className={Style.fundoAruba}>
    <h1>Venha conhecer a Aruba!</h1>
      <ComponentesProps
      lugar='Aruba'
      texto='Aruba é uma ilha caribenha conhecida por suas praias de areia branca, mar azul-turquesa e clima ensolarado o ano todo. Com uma mistura vibrante de culturas e hospitalidade calorosa, o destino encanta viajantes que buscam relaxar, praticar esportes aquáticos e aproveitar uma atmosfera tropical inesquecível.'
      bandeira={BandeiraAruba}

    />


 </section>
)
}

export default Aruba