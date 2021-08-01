import { BrowserRouter, Route, Switch } from 'react-router-dom'
//PAGES
import Home from '../pages/Home'
//ESTILOS
import '../styles/Global.css'
//CONTEXT
// import { AppProvider } from '../context/AppContext'

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ Home }/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
