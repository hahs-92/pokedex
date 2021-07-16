import { createContext, useState } from 'react'

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
    const [ page, setPage ] = useState(0)
    const [ listPokemon, setlistPokemon ] = useState([])
    const [ isSearch, setIsSearch ] = useState(true)

    const data = {
        page,
        setPage,
        listPokemon,
        setlistPokemon,
        isSearch,
        setIsSearch
    }

    return <AppContext.Provider value={ data }>{ children }</AppContext.Provider>
}