import PropTypes from 'prop-types'
//ESTILOS
import styles from '../styles/components/CardDetail.module.css'

const CardDetail = ({id, name, image,abilities, types, BG }) => {
    const abilitiesArray = abilities.map(item => item.ability.name)
    const typesArray = types.map(item => item.type.name)

    return(
        <article className={ styles.CardDetail } style={ { backgroundColor: BG }}>
            <div className={ styles.CardDetail_wrapper }>
                <section className={ styles.Imagen }>
                    <img src={ image } alt={ `pokemon-${ name }`} title={ name }/>
                </section>

                <section className={ styles.Content }>
                    <h2><strong>Id: </strong>{ id }</h2>
                    <h2><strong>Name: </strong>{ name }</h2>
                    <h2><strong>Types: </strong>
                        { typesArray.join(', ')}
                    </h2>
                    <h2><strong>Abilities: </strong>
                        { abilitiesArray.join(', ')}
                    </h2>
                </section>
            </div>
        </article>
    )
}

CardDetail.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    abilities: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired
}

export default CardDetail
