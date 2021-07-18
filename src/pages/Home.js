import { useState, useContext } from 'react'
//ESTILOS
import styles from '../styles/Home.module.css'
//COMPONENTS
import Header from '../components/Header'
import ListCardMain from '../components/ListCardMain'
//CONTEXT
import { AppContext } from '../context/AppContext'

const Home = () => {
    const { page, setPage, pokemons, error, setQuery, loading } = useContext(AppContext)
    const [ filter, setFilter ] = useState('')

    const handleNextPage = () => {
        setPage( page + 1)
    }

    const handleOnChange = (e) => {
        setFilter(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //SI EL INPUT ESTA VACIO 
        if(!filter){
            return false
        }
        setQuery(filter)
        setPage(page + 1)
    }

    return(
        <section className={ styles.Home }>
            <Header />
            <section className={ styles.Search }>
                <form className={ styles.Search_wrapper } onSubmit={ handleSubmit } >
                    <input 
                        className={ styles.Input } 
                        value={ filter } 
                        onChange={ handleOnChange } 
                        type="text" placeholder='Search by name or Id...' 
                        required
                    />
                    <input className={ styles.Button }  type="submit" value={ loading ? 'Loading...' : 'Search' } />
                </form>
            </section>
            <main className={ styles.Main }>   
               { error && <h1>Something was wrong¡¡</h1>}
               <ListCardMain />
            </main>
            <section className={ styles.Main_NextPage }>
                {
                    pokemons.length >= 1 &&
                        <button type='button' aria-label='button-next' onClick={ handleNextPage }>View more</button>
                }
            </section>
        </section>
    )
}

export default Home
