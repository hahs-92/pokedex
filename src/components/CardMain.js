import { useHistory } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
//ESTILOS
import styles from '../styles/components/CardMain.module.css'
//IMAGES
import imgError from '../assets/error.svg'
//COMPONENTES
import Loader from '../components/Loader'
//HOOKS
import { useIntersectionObserver } from '../hooks/useIntersectionOberver'
//UTILS
import { getDataByName } from '../utils/getData'

const CardMain = ({ name }) => {
    let history = useHistory()
    const element = useRef(null)
    const [ imgPokemon, setImgPokemon ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)
    const [ isError, setError ] = useState(false)
    const { show } = useIntersectionObserver(element)

    const getImgPokemon = async() => {
        setIsLoading(true)
        try {   
            if(!show) return false  
            const data = await getDataByName(name)
            setImgPokemon( data.sprites.other["official-artwork"].front_default)
            setIsLoading(false)
            setError(false)
        } catch (error) {
            setIsLoading(false)
            setError(true)
        }
    }

    const handleOnClick = () => {
        if(isError) return false
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
                        !isLoading
                        ? 
                            <>   
                                {
                                    imgPokemon || !isError
                                    ? 
                                    <>
                                        <section className={ styles.Imagen }>
                                            <img src={ imgPokemon } alt={ `pokemon ${ name }`} />
                                        </section>

                                        <section className={ styles.Title }>
                                            <h2>{ name }</h2>
                                        </section> 
                                    </>
                                    : 
                                    <section className={ styles.Error }>
                                        <img src={ imgError } alt="notfound" style={ { width:"100%", height:"100%"}}/>
                                        <h2>Something went wrong¡¡</h2>
                                    </section>
                                }        
                            </>
                        : <Loader />  
                    }
                           
                </>
            }
        </article>  
    )
}

export default CardMain