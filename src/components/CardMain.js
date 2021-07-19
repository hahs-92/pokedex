import React from 'react'
import { useRef } from 'react'
import PropTypes from 'prop-types'
//ESTILOS
import styles from '../styles/components/CardMain.module.css'
//COMPONENTES
import Modal from './Modal'
import CardDetail from './CardDetail'
//HOOKS
import { useIntersectionObserver } from '../hooks/useIntersectionOberver'
import { useModal }from '../hooks/useModal'

const CardMain = ({ id, name, image, types, abilities }) => {
    const element = useRef(null)
    const { show } = useIntersectionObserver(element)
    const { openModal, isOpen, closeModal } = useModal(false) 

    const myStyles = {
        normal: '#9e9e9e',
        water: '#2196F3',
        fire: '#C62828',
        bug: '#8BC34A',
        grass: '#4CAF50',
        flying: '#9E9E9E',
        ground: '#FF5722',
        fairy: '#4DD0E1',
        fighting: '#FF8F00',
        psychic: '#AB47BC',
        ice: '#00BCD4',
        electric: '#CDDC39',
        steel: '#78909C',
        rock: '#795548',
        ghost: '#311B92',
        dragon: '#d32f2f',
        poison: '#673AB7',
        dark: '#009688'
    }


    const handleOnClick = () => {
        openModal()
    }
    console.log(types[0].type.name)

    return(
        <>
            <article className={ styles.CardMain  } onClick={ handleOnClick } ref={ element }>
            {
                show &&
                <>        
                        <section className={ styles.Imagen }>
                            <img src={ image } alt={ `pokemon ${ name }` } title={ name }  />
                        </section>

                        <section style={ { backgroundColor:` ${ myStyles[types[0].type.name]}`}} className={ styles.Title }>
                            <h2>{ name } </h2>
                        </section> 
                </>
            }
            </article>  

            <Modal isOpen={ isOpen } handleModal={ closeModal}>
                <CardDetail 
                     id={ id }
                     name={ name } 
                     image={  image } 
                     types={  types } 
                     abilities={ abilities }
                     BG={ `${ myStyles[types[0].type.name] }`}
                />
            </Modal>
        </>

        )
    }
        

CardMain.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    abilities: PropTypes.array.isRequired
}

export default CardMain