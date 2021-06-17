//ESTILOS
import styles from '../styles/components/CardDetail.module.css'
const CardDetail = (props) => {
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
                        {
                            props.types && 
                                props.types.map(item => (
                                    <span key={ item.type.name }>{ item.type.name }  </span>
                                ))
                        }
                    </h2>
                    <h2><strong>Abilities: </strong>
                        {
                            props.abilities && 
                                props.abilities.map(item => (
                                    <span key={ item.ability.name }>{ item.ability.name }  </span>
                                ))
                        }
                    </h2>
                </section>
            </div>
        </article>
    )
}

export default CardDetail
