//ASSETS
import imgDefault from '../assets/1.svg'
//ESTILOS
import styles from '../styles/components/CardMain.module.css'

const CardMain = () => {
    return(
        <article className={ styles.CardMain }>
            <section className={ styles.Imagen }>
                <img src={ imgDefault } alt="pokemon" />
            </section>

            <section className={ styles.Title }>
                <h2>Name Pokemon</h2>
            </section>
        </article>
    )
}

export default CardMain