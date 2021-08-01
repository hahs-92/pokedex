//EN DESUSO / SE REEMPLAZO POR REDUX

import { createContext, useEffect, useState } from 'react'

//UTILS
import { getPokemons, getPokemonByName } from '../utils/getData' 

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {

    const [ page, setPage ] = useState(0)
    const [ pokemons, setpokemons ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ query, setQuery ] = useState(null)

    const getListPokemons = async () => {
        setLoading(true)
        try {      
            const names = await getPokemons(page)
            names.results.forEach( async(item) => {
                const poke = await getPokemonByName(item.name)
                const data = {
                    id: poke.id,
                    name: poke.name,
                    image: poke.sprites.other['official-artwork'].front_default,
                    types: poke.types,
                    abilities: poke.abilities
                }
                setpokemons(pokemons => [...pokemons, data])
            })
            setLoading(false)
            setError(false)
        } catch (error) {
            setError(true)
            setpokemons([])
        }
    }

    const getPokemonByQuery = async (query) => {
        setQuery(null)
        setLoading(true)
        try {
            const poke = await getPokemonByName(query)
            const data = {
                id: poke.id,
                name: poke.name,
                image: poke.sprites.other['official-artwork'].front_default,
                types: poke.types,
                abilities: poke.abilities
            }
            setpokemons([data])
            setError(false)
            setLoading(false)
        } catch (error) {
            setError(true)
            setpokemons([])
            setLoading(false)
        }
    }

    useEffect(() => {
        if(query) {
            getPokemonByQuery(query) 
        }else {
            getListPokemons() 
        } 
        // eslint-disable-next-line 
    },[page]) 

    const data = {
        page,
        setPage,
        pokemons,
        setpokemons,
        loading,
        error,
        setQuery
    }

    return <AppContext.Provider value={ data }>{ children }</AppContext.Provider>
}