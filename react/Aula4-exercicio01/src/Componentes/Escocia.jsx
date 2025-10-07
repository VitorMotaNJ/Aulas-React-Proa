import Styles from './css/Escocia.module.css'
import ComponenteProps from './ComponenteProps'

function Escocia(){
    return(
       <section className={Styles.fundo_escocia}>
            <h1>Venha conhecer a Escócia!</h1>
            <ComponenteProps 
                lugar="Escócia"
                texto="A Escócia é um país fascinante, repleto de paisagens naturais deslumbrantes e uma rica herança cultural. Suas terras montanhosas, lagos misteriosos e castelos medievais criam um cenário que parece saído de um conto de fadas. Além de sua beleza natural, a Escócia é conhecida pela hospitalidade de seu povo e pela tradição do uísque escocês. Cidades como Edimburgo e Glasgow combinam história, arte e modernidade de forma única. É um destino que encanta viajantes de todo o mundo com sua beleza, cultura e autenticidade."
                bandeira={bandeira}
            />
       </section>
    )
}

export default Escocia