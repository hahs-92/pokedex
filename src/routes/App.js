import { BrowserRouter, Route, Switch } from 'react-router-dom'
//PAGES
import Home from '../pages/Home'
import Detail from '../pages/Detail'
//ESTILOS
import '../styles/Global.css'

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ Home }/>
                <Route exact path='/Pokemon/:name' component={ Detail } />
            </Switch>
        </BrowserRouter>
    )
}

export default App
