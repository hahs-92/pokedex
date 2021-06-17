import { useHistory } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
//ESTILOS
import styles from '../styles/components/CardMain.module.css'
//IMAGES
import imgError from '../assets/error.svg'
//HOOKS
import { useIntersectionObserver } from '../hooks/useIntersectionOberver'

const CardMain = ({ name }) => {
    const BASEURL = "https://pokeapi.co/api/v2/"
    let history = useHistory()
    const element = useRef(null)
    const [ imgPokemon, setImgPokemon ] = useState('')
    const { show } = useIntersectionObserver(element)

    const getImgPokemon = async() => {
        try {   
            if(!show) return false  
            const data = await fetch(`${ BASEURL }pokemon/${ name }`)
            const response = await data.json()
            setImgPokemon( response.sprites.other["official-artwork"].front_default)
        } catch (error) {
            console.log(error)
        }
    }

    const handleOnClick = () => {
        history.push(`/Pokemon/${ name }`)
    }

    useEffect(() => {
        getImgPokemon() // eslint-disable-next-line
    }, [ show ])

    return(
        <article className={ styles.CardMain } onClick={ handleOnClick } ref={ element }>
            {
                show &&
                <>
                    {
                        imgPokemon
                        ? 
                            <>           
                                <section className={ styles.Imagen }>
                                    <img src={ imgPokemon } alt={ `pokemon ${ name }`} />
                                </section>

                                <section className={ styles.Title }>
                                    <h2>{ name }</h2>
                                </section> 
                            </>
                        : <img src={ imgError} alt="Not error" style={ { width:"100%", height:"100%" }}/>
                    }
                           
                </>
            }
        </article>  
    )
}

export default CardMain