import { BrowserRouter, Route, Switch } from 'react-router-dom'
//PAGES
import Home from '../pages/Home'
import Detail from '../pages/Detail'
//ESTILOS
import '../styles/Global.css'
//CONTEXT
import { AppProvider } from '../context/AppContext'

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <AppProvider>
                    <Route exact path='/' component={ Home }/>
                    <Route path='/Pokemon/:name' component={ Detail } />
                </AppProvider>
            </Switch>
        </BrowserRouter>
    )
}

export default App
