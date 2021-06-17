//ESTILOS
import styles from '../styles/components/CardDetail.module.css'
//IMAGEN
import imgDefault from '../assets/1.svg'

const CardDetail = () => {
    return(
        <article className={ styles.CardDetail }>
            <div className={ styles.CardDetail_wrapper }>
                <section className={ styles.Imagen }>
                    <img src={ imgDefault } alt="pokemon" />
                </section>

                <section className={ styles.Content }>
                    <h2>Id:</h2>
                    <h2>Name:</h2>
                    <h2>Type:</h2>
                    <h2>Ability:</h2>
                </section>
            </div>
        </article>
    )
}

export default CardDetail
