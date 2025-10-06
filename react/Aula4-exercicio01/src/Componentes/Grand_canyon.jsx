import Styles from './css/Grand_canyon.module.css'
import ComponenteProps from './ComponenteProps'

function Grand_canyon(){
    return(
       <section className={Styles.fundo_grand_canyon}>
            <h1>Venha conhecer o Grand Canyon!</h1>
            <ComponenteProps />
       </section>
    )
}

export default Grand_canyon