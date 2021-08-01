//UTILS
import { getPokemons, getPokemonByName } from '../utils/getData' 

export const pokeActions = {
    GET_POKEMONS: "GET_POKEMONS",
    PAGE_CHANGED: "PAGE_CHANGED",
    QUERY_CHANGED: "QUERY_CHANGE",
    LOADING: "LOADING",
    ERROR: "ERROR",
    CLEAN_POKEMONS: "CLEAN_POKEMONS"
}


//actions creators
export const changePage = (page) => async(dispatch) => {
 
    dispatch({
        type: pokeActions.LOADING
    })

    dispatch({
        type: pokeActions.PAGE_CHANGED,
        payload: page 
    })

    try {
        const response = await getPokemons(page)
        const namesPokes = await response.results.map(item => item.name)
        namesPokes.map(async(item )=> {
            const poke = await getPokemonByName(item)
            const data = {
                id: poke.id,
                name: poke.name,
                image: poke.sprites.other['official-artwork'].front_default,
                types: poke.types,
                abilities: poke.abilities
            }

            dispatch({
                type: pokeActions.GET_POKEMONS,
                payload: data
            })
        })
    } catch (error) {
        dispatch({
            type: pokeActions.ERROR
        })
    }
}

export const getPokemon = (query) => async(dispatch) => {
    dispatch({
        type: pokeActions.LOADING
    })

    try {
        const poke = await getPokemonByName(query)
        const data = {
            id: poke.id,
            name: poke.name,
            image: poke.sprites.other['official-artwork'].front_default,
            types: poke.types,
            abilities: poke.abilities
        }
        
        dispatch({
            type: pokeActions.CLEAN_POKEMONS
        })

        dispatch({
            type: pokeActions.GET_POKEMONS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: pokeActions.ERROR
        })
    }
}


