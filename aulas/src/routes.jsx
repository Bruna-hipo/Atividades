import {Routes, Route} from 'react-router-dom'
import Principal from './pages/Principal'
import Cinema from './pages/Cinema'
import Formulario from './pages/formulario'
import Mudar from './pages/mudar'
import Calculadora from './pages/calculadora'
import Contador from './pages/contador'

export default function Rotas(){

    return(
        <Routes>
            <Route path='/' element={<Principal/>} />
            <Route path='/cinema' element={<Cinema/>} />
            <Route path='/formulario' element={<Formulario/>}/>
            <Route path='/mudar' element={<Mudar/>}/>
            <Route path='/calculadora' element={<Calculadora/>}/>
            <Route path='/contador' element={<Contador/>}/>

        </Routes> 
    )
}