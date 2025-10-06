
import Style from './css/ComponenteProps.module.css'
import Logo from '../assets/img/viagens.jpg'

function ComponenteProps(){
    return(
        <div className={Style.corpo_texto}>
            <h2>Venha conhecer esse lugar incrível!!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repellendus impedit architecto at ipsam fugiat aspernatur molestias id error est nihil, odio quas nulla necessitatibus corrupti molestiae sapiente delectus autem.</p>
            <img className={Style.imagem_prop}src={Logo} alt="Logo da firma" />


        </div>
    )
}

export default ComponenteProps