//ESTILOS
import styles from '../styles/components/CardDetail.module.css'
const CardDetail = (props) => {
    const abilities = props.abilities.map(item => item.ability.name)
    const types = props.types.map(item => item.type.name)

    return(
        <article className={ styles.CardDetail }>
            <div className={ styles.CardDetail_wrapper }>
                <section className={ styles.Imagen }>
                    <img src={ props.imagen } alt={ `pokemon-${ props.name }`} />
                </section>

                <section className={ styles.Content }>
                    <h2><strong>Id: </strong>{ props.id }</h2>
                    <h2><strong>Name: </strong>{ props.name }</h2>
                    <h2><strong>Types: </strong>
                        { types.join(', ')}
                    </h2>
                    <h2><strong>Abilities: </strong>
                        { abilities.join(', ')}
                    </h2>
                </section>
            </div>
        </article>
    )
}

export default CardDetail
