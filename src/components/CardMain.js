import { useHistory } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
//ESTILOS
import styles from '../styles/components/CardMain.module.css'
//HOOKS
import { useIntersectionObserver } from '../hooks/useIntersectionOberver'

const CardMain = ({ name }) => {
    const BASEURL = "https://pokeapi.co/api/v2/"
    let history = useHistory()
    const [ imgPokemon, setImgPokemon ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)
    const element = useRef(null)
    const { show } = useIntersectionObserver(element)

    const getImgPokemon = async() => {
        setIsLoading(true)
        try {   
            if(!show) return false  
            const data = await fetch(`${ BASEURL }pokemon/${ name }`)
            const response = await data.json()
            setImgPokemon( response.sprites.other["official-artwork"].front_default)
            setIsLoading(false)
        } catch (error) {
            console.log(error.message)
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
                        isLoading 
                        ? <h1>Loading...</h1>
                        : 
                            <>
                                <section className={ styles.Imagen }>
                                    <img src={ imgPokemon } alt={ `pokemon ${ name }`} />
                                </section>

                                <section className={ styles.Title }>
                                    <h2>{ name }</h2>
                                </section>
                            </>

                    }
                </>
            }
        </article>  
    )
}

export default CardMain