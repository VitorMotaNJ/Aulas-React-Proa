
import styles from './Header.module.css'


function Header(){
    return(
        <header>
            <section className={styles.azul}>Conteudo da camada 1</section>
            <section className={styles.vermelho}>Conteudo da camada 2</section>
        </header>
    )
}

export default Header