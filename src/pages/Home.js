import { useEffect, useState, useContext } from 'react'
//ESTILOS
import styles from '../styles/Home.module.css'
//COMPONENTS
import Header from '../components/Header'
import ListCardMain from '../components/ListCardMain'
//UTILS
import { getData } from '../utils/getData'
//CONTEXT
import { AppContext } from '../context/AppContext'

const Home = () => {
    const { page, setPage, listPokemon, setlistPokemon, isSearch, setIsSearch } = useContext(AppContext)
    const [ filter, setFilter ] = useState('')
    const [ notFound, setNotFound ] = useState(false)
    const [ isError, setIsError ] = useState(false)

    const getlistPokemons = async(page) => {
        try {
            const data = await getData(page)
            const newData = [...listPokemon, ...data.results]
            setlistPokemon(newData)
            setIsError(false)
        } catch (error) {
            console.log(error.message)
            setIsError(true)
        }
    }

    const handleNextPage = () => {
        setIsSearch(true)
        setPage(page => page + 1 )
    }

    const handleOnChange = (e) => {
        setFilter(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //SI EL INPUT ESTA VACIO 
        if(!filter){
            setNotFound(true)
            return false
        }
        setlistPokemon([{ name: filter.toLowerCase() }])
        setNotFound(false)
    }
    //CADA VEZ QUE EL NUMERO DE LA PAGINA CAMBIA SE HACE UN NUEVO LLAMDADO
    useEffect(() => {
        (isSearch) && getlistPokemons(page) // eslint-disable-next-line
    },[page])

    return(
        <section className={ styles.Home }>
            <Header />
            <section className={ styles.Search }>
                <form className={ styles.Search_wrapper } onSubmit={ handleSubmit } >
                    <input className={ styles.Input } value={ filter } onChange={ handleOnChange } type="text" placeholder='Search by name or Id...' />
                    <input className={ styles.Button }  type="submit" value='Search' />
                </form>
                { notFound &&
                    <div className={ styles.Alert }>
                        <h3>Enter a name, please¡¡</h3>
                    </div>
                }
            </section>
            <main className={ styles.Main }>   
                {
                    isError
                    ?   <h1>Something went wrong¡¡</h1>
                    : <ListCardMain />
                        // <section className={ styles.Main_wrapper }>
                        //     {
                        //         listPokemon.length > 0 &&
                        //             listPokemon.map((item,index) => (
                        //                 <CardMain key={ `${ item.name }${index}` } name={ item.name }/>
                        //             ))
                        //     }
                        // </section>
                }      
            </main>
            <section className={ styles.Main_NextPage }>
                {
                    listPokemon.length >= 1 &&
                        <button type='button' aria-label='button-next' onClick={ handleNextPage }>View more</button>
                }
            </section>
        </section>
    )
}

export default Home
