
import Style from './css/ComponenteProps.module.css'

function ComponenteProps({lugar, texto, bandeira}){
    return(
        <div className={Style.corpo_texto}>
            <h2>Venha conhecer esse lugar incrível {lugar}!!</h2>
            <p>{texto}</p>
            <img className={Style.imagem_props}src={bandeira} alt="Logo da firma" />
        </div>
    )
}

export default ComponenteProps