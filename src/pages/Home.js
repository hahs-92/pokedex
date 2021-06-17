import { useEffect, useState } from 'react'
//ESTILOS
import styles from '../styles/Home.module.css'
//COMPONENTS
import Header from '../components/Header'
import CardMain from '../components/CardMain'

const Home = () => {
    const BASEURL = "https://pokeapi.co/api/v2/"
    const LIMIT = 10
    const [ pokemon, setPokemon ] = useState([])
    const [ page, setPage ] = useState(0)
    const [ filter, setFilter ] = useState('')
    const [ notFound, setNotFound ] = useState(false)
    const [ isError, setIsError ] = useState(false)

    const getData = async() => {
        try {
            const data = await fetch(`${ BASEURL }pokemon?limit=${ LIMIT }&offset=${ page * LIMIT}`)
            const response = await data.json()
            const newData = [...pokemon, ...response.results]
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
            return false
        }
        setPokemon([{ name: filter }])
        setNotFound(false)
    }

    useEffect(() => {
        getData() // eslint-disable-next-line
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
