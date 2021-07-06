import React from 'react'
import { useHistory } from 'react-router-dom'
import { useEffect, useState, useRef, useContext } from 'react'
import PropTypes from 'prop-types'
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
//CONTEXT
import { AppContext } from '../context/AppContext'

const CardMain = ({ name }) => {
    const { setIsSearch } = useContext(AppContext)
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
        setIsSearch(false)
        history.push(`/Pokemon/${ name }`)
    }
    //SE HACE EL LLAMADO A LA API SOLO CUANDO LA TARJETA SEA VISIBLE POR EL USUSARIO
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
                                            <img src={ imgPokemon } alt={ `pokemon ${ name }`} title={ name }/>
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

CardMain.propTypes = {
    name: PropTypes.string.isRequired
}

export default CardMain