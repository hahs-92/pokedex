import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {  useState } from 'react'
//PAGES
import Home from '../pages/Home'
import Detail from '../pages/Detail'
//ESTILOS
import '../styles/Global.css'
//CONTEXT
import { AppContext } from '../context/AppContext'

const App = () => {
    const [ page, setPage ] = useState(0)
    const [ listPokemon, setlistPokemon ] = useState([])
    const [ isSearch, setIsSearch ] = useState(true)

    return(
        <BrowserRouter>
            <Switch>
                <AppContext.Provider value={ { page, setPage, listPokemon, setlistPokemon, isSearch, setIsSearch }}>
                    <Route exact path='/' component={ Home }/>
                    <Route exact path='/Pokemon/:name' component={ Detail } />
                </AppContext.Provider>
            </Switch>
        </BrowserRouter>
    )
}

export default App
