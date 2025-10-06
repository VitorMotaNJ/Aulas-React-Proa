import Styles from './css/Aruba.module.css'
import ComponenteProps from './ComponenteProps'

function Aruba(){
    return(
       <section className={Styles.fundo_aruba}>
            <h1>Venha conhecer Aruba!</h1>
            <ComponenteProps />
       </section>
    )
}

export default Aruba