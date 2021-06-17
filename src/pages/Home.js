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

    const getData = async() => {
        try {
            const data = await fetch(`${ BASEURL }pokemon?limit=${ LIMIT }&offset=${ page * LIMIT}`)
            const response = await data.json()
            const newData = [...pokemon, ...response.results]
            setPokemon(newData)
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleNextPage = () => {
        setPage(page + 1 )
    }

    const handleOnChange = (e) => {
        setFilter(e.target.value)
    }

    const handleSearch = () => {
        if(!filter) return false
        setPokemon([{ name: filter }])
    }

    useEffect(() => {
        // eslint-disable-next-line
        getData()
    },[page])

    return(
        <section className={ styles.Home }>
            <Header />

            <section className={ styles.Search }>
                <div className={ styles.Search_wrapper }>
                    <input className={ styles.Input } onChange={ handleOnChange } type="text" placeholder='Search by name' />
                    <input className={ styles.Button } onClick={ handleSearch } type="button" value='Search' />
                </div>
            </section>

            <main className={ styles.Main }>
                <section className={ styles.Main_wrapper }>
                    {
                        pokemon.length > 0 &&
                            pokemon.map(item => (
                                <CardMain key={ item.name } name={ item.name }/>
                            ))
                    }
                </section>

                <section className={ styles.Main_NextPage }>
                    {
                        pokemon.length > 1 &&
                            <button type='button' onClick={ handleNextPage }>View more</button>
                    }
                </section>
            </main>
        </section>
    )
}

export default Home