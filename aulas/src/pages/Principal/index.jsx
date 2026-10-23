import './index.scss'
import { Link } from 'react-router-dom'
import Cabecalho from '../../componentes/header/index.jsx'
import Cinema from '../../assets/imagens/Cinema.jpg'


export default function Principal (){

    return(
        <div className="page-principal">
            <Cabecalho/>
            <main>
                <h2>Escolha um programa para testar:</h2>
                <div className="nav">
                    <section className='banner'>
                        <Link className='link' to='/cinema'>
                            <h3>Cinema</h3>
                            <img src={Cinema} alt="Imagem ingressos cinema"/>
                            <p>Venda de ingressos</p>
                        </Link>
                    </section>
                </div>
            </main>
        </div>
    )
}