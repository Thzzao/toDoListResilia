import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import App from './pages/App/App'
import { GlobalStyle } from './GlobalStyle'

const Rotas = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/app' element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas