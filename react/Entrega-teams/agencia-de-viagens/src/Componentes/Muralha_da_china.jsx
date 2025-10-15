import Style from './css/Muralha_da_china.module.css'
import ComponentesProps from './ComponenteProps'
import BandeiraChina from '../assets/img/BandeiraChina.png'

function MuralhaChina(){
return(
 <section className={Style.fundo_muralha_da_china}>
    <h1>Venha conhecer a Muralha da China!</h1>
     <ComponentesProps
      lugar='Muralha da China'
      texto='A Grande Muralha da China é uma das construções mais icônicas do mundo, estendendo-se por milhares de quilômetros através de montanhas e desertos. Erguida para proteger o império chinês, hoje é um símbolo de história, cultura e resistência, oferecendo vistas incríveis e uma experiência única aos visitantes.'
      bandeira={BandeiraChina}

    />

 </section>
)
}

export default MuralhaChina