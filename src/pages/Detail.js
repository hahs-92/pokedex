import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
//ESTILOS
import styles from '../styles/Detail.module.css'
//COMPONENTS
import Header from '../components/Header'
import CardDetail from '../components/CardDetail'
//UTILS
import { getDataByName } from '../utils/getData'

const Detail = () => {
    // const BASEURL = "https://pokeapi.co/api/v2/"
    let { name } = useParams()
    const [ pokemon, setPokemon ] = useState()

    // const getData= async() => {
    //     try {
    //         const data = await fetch(`${ BASEURL }pokemon/${ name }`)
    //         const response = await data.json()
    //         setPokemon(response)
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    const getData= async() => {
        try {
            const data = await getDataByName(name)
            setPokemon(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getData() // eslint-disable-next-line 
    },[])

    return(
        <section className={ styles.Detail }>
                   
            <Header />
            
            <div className={ styles.Detail_wrapper }>
                <section className={ styles.Button }>
                    <Link to= '/'>Back</Link>
                </section>

                <section className={ styles.Content }>
                    {
                        pokemon &&
                           <CardDetail 
                            id= { pokemon.id } 
                            name= { pokemon.name } 
                            imagen={ pokemon.sprites.other["official-artwork"].front_default }
                            types= { pokemon.types } 
                            abilities = { pokemon.abilities }
                            />
                    }
                </section>
            </div>
        </section>
    )
}

export default Detail
