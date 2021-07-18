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

    const handleOnClick = () => {
        openModal()
    }

    return(
        <>
            <article className={ styles.CardMain  } onClick={ handleOnClick } ref={ element }>
            {
                show &&
                <>        
                        <section className={ styles.Imagen }>
                            <img src={ image } alt={ `pokemon ${ name }` } title={ name }  />
                        </section>

                        <section className={ styles.Title }>
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