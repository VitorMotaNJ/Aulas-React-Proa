import Styles from './css/Lista_produtos.module.css'

function Lista_produtos(){
  return(
        <section className={Styles.listaProdutos}>
            <div className={Styles.produto}>
                <div src="./images/violao.jpg" alt="Violao" className={Styles.imgProduto} />
                <p className={Styles.nomeProduto}>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante</p>
                <p className={Styles.precoProduto}><strong>R$ 989,50</strong></p>
            </div>

            <div className={Styles.produto}>
                <div src="./images/violao.jpg" alt="Violao" className={Styles.imgProduto} />
                <p className={Styles.nomeProduto}>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante</p>
                <p className={Styles.precoProduto}><strong>R$ 989,50</strong></p>
            </div>

            <div className={Styles.produto}>
                <div src="./images/violao.jpg" alt="Violao" className={Styles.imgProduto} />
                <p class={Styles.nomeProduto}>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante</p>
                <p class={Styles.precoProduto}><strong>R$ 989,50</strong></p>
            </div>

            <div className={Styles.produto}>
                <div src="./images/violao.jpg" alt="Violao" className={Styles.imgProduto} />
                <p className={Styles.nomeProduto}>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante</p>
                <p className={Styles.precoProduto}><strong>R$ 989,50</strong></p>
            </div>
        </section>
  )
}

export default Lista_produtos
