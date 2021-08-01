import  { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//reducers
import { pokeReducer } from '../reducers/poke'

export const store = createStore(pokeReducer, applyMiddleware(thunk)) 