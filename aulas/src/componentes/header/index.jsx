import './index.scss'
import {Link} from 'react-router-dom'

export default function Cabecalho (props){
    return(
        <div className="comps-cabecalho">
            <i class="fa-solid fa-star"></i>
            <h1>{props.titulo ?? "Seja bem vindo(a)" }</h1>
            <Link to='/'>
                 <i class="fa-solid fa-right-from-bracket"></i>
            </Link>  
        </div>
    )
    
}