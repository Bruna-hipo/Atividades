import {Routes, Route} from 'react-router-dom'
import Principal from './pages/Principal'
import Cinema from './pages/Cinema'

export default function Rotas(){

    return(
        <Routes>
            <Route path='/' element={<Principal/>} />
            <Route path='/cinema' element={<Cinema/>} />
        </Routes>
    )
}