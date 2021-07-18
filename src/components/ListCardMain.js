import { useContext } from 'react'
//COMPONENTS    
import CardMain from './CardMain'
//ESTILOS
import styles from '../styles/components/ListCardMain.module.css'
//CONTEXT
import { AppContext } from '../context/AppContext'


const ListCardMain = () => {
    const { pokemons } = useContext(AppContext)
    
    return (
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
                        />
                    ))
            }
        </section>
    )
}

export default ListCardMain