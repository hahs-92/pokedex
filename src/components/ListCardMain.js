import { useContext } from 'react'
//COMPONENTS    
import CardMain from './CardMain'
//ESTILOS
import styles from '../styles/components/ListCardMain.module.css'
//CONTEXT
import { AppContext } from '../context/AppContext'

const ListCardMain = () => {
    const { listPokemon } = useContext(AppContext)
    return (
        <section className={ styles.ListCardMain }>
            {
                listPokemon.length > 0 &&
                    listPokemon.map((item,index) => (
                        <CardMain key={ `${ item.name }${index}` } name={ item.name }/>
                    ))
            }
        </section>
    )
}

export default ListCardMain