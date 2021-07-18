//NO SE ESTA USANDO

import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
//ESTILOS
import styles from '../styles/Detail.module.css'
//COMPONENTS
import Header from '../components/Header'
import CardDetail from '../components/CardDetail'
//UTILS
import { getDataByName } from '../utils/getData'

const Detail = () => {
    let { name } = useParams()
    let history = useHistory()
    const [ pokemon, setPokemon ] = useState()

    const getData= async() => {
        try {
            const data = await getDataByName(name)
            setPokemon(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleHistory = () => {
        history.goBack()
    }

    useEffect(() => {
        getData() // eslint-disable-next-line 
    },[])

    return(
        <section className={ styles.Detail }>
                   
            <Header />
            
            <div className={ styles.Detail_wrapper }>
                <section className={ styles.Button } onClick={ handleHistory }>
                   <button type='button' aria-label='back-button' >Back</button>
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
