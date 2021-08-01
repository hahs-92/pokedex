//actions types
import { pokeActions } from '../actions/poke'

const initialState = {
    pokemons: [],
    loading: false,
    error: false,
    page: 0,
    query: ''
}

export const pokeReducer = (state= initialState, action)  => {
    switch (action.type) {
        case pokeActions.ERROR:
            return { ...state, error: true , loading: false }
        case pokeActions.LOADING:
            return { ...state, loading: true }
        case pokeActions.PAGE_CHANGED:
            return {
                ...state,
                page: action.payload
            }  
        case pokeActions.GET_POKEMONS: 
            return {
                ...state,
                pokemons:  state.pokemons.concat(action.payload),
                loading: false,
                error: false
            }
        case pokeActions.CLEAN_POKEMONS:
            return { 
                ...state,
                pokemons: [],
                loading: false,
                error: false
            }
        default:
            return state
    }
}