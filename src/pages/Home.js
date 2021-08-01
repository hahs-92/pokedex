import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//ESTILOS
import styles from '../styles/Home.module.css'
//COMPONENTS
import Header from '../components/Header'
import ListCardMain from '../components/ListCardMain'
import Loader from '../components/Loader'
//actions creators
import { changePage, getPokemon  } from '../actions/poke'

const Home = () => {
    const [ filter, setFilter ] = useState('')

    const page = useSelector(state => state.page)
    const loading = useSelector(state => state.loading)
    const pokemons = useSelector(state => state.pokemons)
    const error = useSelector(state => state.error)
    const dispatch = useDispatch() 

    const handleNextPage = () => {
        dispatch(changePage(page + 1))
    }

    const handleOnChange = (e) => {
        const value = e.target.value.toLowerCase()
        setFilter(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // SI EL INPUT ESTA VACIO 
        if(!filter){
            return false
        }
        dispatch(getPokemon(filter))
    }

    useEffect(() => {
        dispatch(changePage(page)) // eslint-disable-next-line
    },[])

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
                    <input 
                        className={ styles.Button }  
                        type="submit" 
                        value={ loading ? 'Loading... ' : 'Search' } 
                    />
                </form>
            </section>
            <main className={ styles.Main }> 
                { error && 
                    <h1 style={ { width:"90%", height:"60px", color:"tomato"}}>Something went wrong¡¡</h1>
                }
               <ListCardMain />
               { loading && <section style={ { width:"100%", textAlign:"center" }}><Loader /></section> }
            </main>
            <section className={ styles.Main_NextPage }>
                {
                    pokemons.length >= 1 && page < 37 &&
                    <button type='button' aria-label='button-next' onClick={ handleNextPage }>View more</button>
                }
            </section>
        </section>
    )
}

export default Home
