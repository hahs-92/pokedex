import { useEffect, useState } from 'react'
//ESTILOS
import styles from '../styles/Home.module.css'
//COMPONENTS
import Header from '../components/Header'
import CardMain from '../components/CardMain'
//UTILS
import { getData } from '../utils/getData'

const Home = () => {
    const [ pokemon, setPokemon ] = useState([])
    const [ page, setPage ] = useState(0)
    const [ filter, setFilter ] = useState('')
    const [ notFound, setNotFound ] = useState(false)
    const [ isError, setIsError ] = useState(false)

    const getPokemons = async() => {
        try {
            const data = await getData(page)
            const newData = [...pokemon, ...data.results]
            setPokemon(newData)
            setIsError(false)
        } catch (error) {
            console.log(error.message)
            setIsError(true)
        }
    }

    const handleNextPage = () => {
        setPage(page + 1 )
    }

    const handleOnChange = (e) => {
        setFilter(e.target.value)
    }

    const handleSearch = () => {
        if(!filter){
            setNotFound(true)
        }
        setPokemon([{ name: filter }])
        setNotFound(false)
    }

    useEffect(() => {
        getPokemons() // eslint-disable-next-line
    },[page])

    return(
        <section className={ styles.Home }>
            <Header />
            <section className={ styles.Search }>
                <div className={ styles.Search_wrapper }>
                    <input className={ styles.Input } onChange={ handleOnChange } type="text" placeholder='Search by name' />
                    <input className={ styles.Button } onClick={ handleSearch } type="button" value='Search' />
                </div>
                { notFound &&
                    <div className={ styles.Alert }>
                        <h3>Enter a name, please¡¡</h3>
                    </div>
                }
            </section>
            <main className={ styles.Main }>   
                {
                    isError
                    ?   <h1>Something was wrong¡¡</h1>
                    :
                        <section className={ styles.Main_wrapper }>
                            {
                                pokemon.length > 0 &&
                                    pokemon.map(item => (
                                        <CardMain key={ item.name } name={ item.name }/>
                                    ))
                            }
                        </section>
                }      
            </main>
            <section className={ styles.Main_NextPage }>
                {
                    pokemon.length > 1 &&
                        <button type='button' aria-label='button-next' onClick={ handleNextPage }>View more</button>
                }
            </section>
        </section>
    )
}

export default Home
