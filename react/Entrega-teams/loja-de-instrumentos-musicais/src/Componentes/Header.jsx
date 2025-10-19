import Style from './css/Header.module.css'

function Header() {
  return( 
        <header>
          <nav className={Style.navHeader}>
              <a href="#" className={Style.linkNavHeader}>Home</a>
              <a href="#" className={Style.linkNavHeader}>Quem Somos</a>
              <a href="#" className={Style.linkNavHeader}>Instrumentos</a>
              <a href="#" className={Style.linkNavHeader}>Endereço</a>
              <a href="#" className={Style.linkNavHeader}>Contato</a>
          </nav>
        </header>
  )
}

export default Header