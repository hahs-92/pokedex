import { useEffect, useState } from 'react'
//ESTILOS
import styles from '../styles/components/CardMain.module.css'

const CardMain = ({ name }) => {
    const [ imgPokemon, setImgPokemon ] = useState('')
    const BASEURL = "https://pokeapi.co/api/v2/"

    const getImgPokemon = async() => {
        try {     
            const data = await fetch(`${ BASEURL }pokemon/${ name }`)
            const response = await data.json()
            setImgPokemon( response.sprites.other["official-artwork"].front_default)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        // eslint-disable-next-line
        getImgPokemon()
    }, [])

    return(
        <>
            {
                imgPokemon 
                ?
                <article className={ styles.CardMain }>
                    <section className={ styles.Imagen }>
                        <img src={ imgPokemon } alt={ `pokemon ${ name }`} />
                    </section>

                    <section className={ styles.Title }>
                        <h2>{ name }</h2>
                    </section>
                </article>
                :
                <h1>Not Results</h1>
            }
        </>
        
    )
}

export default CardMain