import Styles from './css/Form_redes_sociais.module.css'
import whatsapp from '../assets/img/whatsapp.png'
import instagram from '../assets/img/instagram.png'
import facebook from '../assets/img/facebook.png'

function Form_redes_sociais() {
  return (
    <section className={Styles.formularioRedes}>
      <form>
        <label htmlFor="nome">Entre com o seu nome:</label> <br />
        <input type="text" id="nome" placeholder="Digite seu nome aqui" /> <br />
        <label htmlFor="email">Entre com o seu email:</label> <br />
        <input type="email" id="email" placeholder="Digite seu email aqui" /> <br />
        <textarea placeholder="Faça seu pedido por aqui"></textarea> <br />
        <input type="submit" value="Enviar" className={Styles.botaoEnviar} />
      </form>

      <div className={Styles.redesSociais}>
        <h2>Acesse também nossas redes sociais:</h2>
        <nav>
          <a href="#"><div style={{ backgroundImage: `url(${whatsapp})` }} className={Styles.whatsapp}></div></a>
          <a href="#"><div style={{ backgroundImage: `url(${instagram})` }} className={Styles.instagram}></div></a>
          <a href="#"><div style={{ backgroundImage: `url(${facebook})` }} className={Styles.facebook}></div></a>
        </nav>
      </div>
    </section>
  )
}

export default Form_redes_sociais
