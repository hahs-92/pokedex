import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
//ESTILOS
import styles from '../styles/Detail.module.css'
//COMPONENTS
import Header from '../components/Header'
import CardDetail from '../components/CardDetail'

const Detail = () => {
    const BASEURL = "https://pokeapi.co/api/v2/"
    let { name } = useParams()
    const [ pokemon, setPokemon ] = useState()

    const getDataByName = async() => {
        try {
            const data = await fetch(`${ BASEURL }pokemon/${ name }`)
            const response = await data.json()
            setPokemon(response)
        } catch (error) {
            console.log(error.message)
        }
    }

    const getTypes = (types) => {
        let arr = []
        types.map(item => (
            arr.push(item.type.name)
        ))
        return arr
    }

    const getAbilities = (abilities) => {
        let arr = []
        abilities.map(item => (
            arr.push(item.ability.name)
        ))
        return arr
    }

    useEffect(() => {
        getDataByName() // eslint-disable-next-line 
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
                            types= { getTypes(pokemon.types)}
                            abilities = { getAbilities(pokemon.abilities)}
                            />
                    }
                </section>
            </div>
        </section>
    )
}

export default Detail
