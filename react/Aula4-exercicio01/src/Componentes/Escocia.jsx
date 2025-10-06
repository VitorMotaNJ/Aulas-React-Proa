import Styles from './css/Escocia.module.css'
import ComponenteProps from './ComponenteProps'

function Escocia(){
    return(
       <section className={Styles.fundo_escocia}>
            <h1>Venha conhecer a Escócia!</h1>
            <ComponenteProps />
       </section>
    )
}

export default Escocia