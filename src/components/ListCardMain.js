import { useContext, useState } from 'react'
//COMPONENTS    
import CardMain from './CardMain'
import CardDetail from './CardDetail'
import Modal from './Modal'
//ESTILOS
import styles from '../styles/components/ListCardMain.module.css'
//CONTEXT
import { AppContext } from '../context/AppContext'
//HOOKS
import { useModal } from '../hooks/useModal'

const valuesInitial = {
    id: 0,
    name: '', 
    image: '',
    types: [],
    abilities: [],
    BG: ''
}

const ListCardMain = () => {
    const { pokemons } = useContext(AppContext)
    const { openModal, isOpen, closeModal } = useModal(false) 
    const [ values, setValues ] = useState(valuesInitial)

    return (
        <>
            <section className={ styles.ListCardMain }>
                {
                    pokemons.length > 0 &&
                        pokemons.map((item, index) => (
                            <CardMain  
                                key={ `${ item.id } ${ index }` } 
                                id={ item.id }
                                name={ item.name } 
                                image={ item.image } 
                                types={ item.types } 
                                abilities={ item.abilities }
                                handleOpenModal= { openModal }
                                handleValues={ setValues }
                            />
                        ))
                }
            </section>

            <Modal isOpen={ isOpen } handleModal={ closeModal}>
                <CardDetail 
                    id={ values.id }
                    name={ values.name } 
                    image={  values.image } 
                    types={  values.types } 
                    abilities={ values.abilities }
                    BG={ values.BG }
                />
            </Modal>
        </>
    )
}

export default ListCardMain