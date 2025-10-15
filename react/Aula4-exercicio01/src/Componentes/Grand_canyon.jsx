
import Style from './css/Grand_canyon.module.css'
import ComponentesProps from './ComponenteProps'
import BandeiraUSA from '../assets/img/BandeiraUSA.png'

function GrandCanyon(){
return(
 <section className={Style.fundo_grand_canyon}>
    <h1>Venha conhecer o Grand Canyon!</h1>
      <ComponentesProps
      lugar='Grand_cannyon'
      texto='O Grand Canyon, no Arizona (EUA), é uma das maiores maravilhas naturais do mundo. Esculpido pelo Rio Colorado, impressiona com suas formações rochosas coloridas e vistas de tirar o fôlego. Um destino imperdível para quem busca aventura, natureza e paisagens únicas.'
      bandeira={BandeiraUSA}

    />


 </section>
)
}

export default GrandCanyon