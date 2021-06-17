//ESTILOS
import styles from '../styles/components/CardDetail.module.css'

const CardDetail = (props) => {
    console.log("ability ", props.abilities)

    return(
        <article className={ styles.CardDetail }>
            <div className={ styles.CardDetail_wrapper }>
                <section className={ styles.Imagen }>
                    <img src={ props.imagen } alt={ `pokemon-${ props.name }`} />
                </section>

                <section className={ styles.Content }>
                    <h2>Id: <strong>{ props.id }</strong></h2>
                    <h2>Name: <strong>{ props.name }</strong></h2>
                    <h2><strong>Types: </strong>
                        {
                            props.types && 
                                props.types.map(item => (
                                    <span key={ item }>{ item }  </span>
                                ))
                        }
                    </h2>
                    <h2><strong>Abilities: </strong>
                        {
                            props.abilities && 
                                props.abilities.map(item => (
                                    <span key={ item }>{ item }  </span>
                                ))
                        }
                    </h2>
                </section>
            </div>
        </article>
    )
}

export default CardDetail
