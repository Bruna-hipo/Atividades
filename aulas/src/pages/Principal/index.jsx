import './index.scss'
import { Link } from 'react-router-dom'
import Cabecalho from '../../componentes/header/index.jsx'
import Cinema from '../../assets/imagens/Cinema.jpg'
import Formulario from '../../assets/imagens/Formulario.jpg'
import Mudar from '../../assets/imagens/Mudar.jpg'
import Calculadora from '../../assets/imagens/Calculadora.jpg'


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
                    <section className='banner'>
                        <Link className='link' to='/formulario'>
                            <h3>Formulário</h3>
                            <img src={Formulario} alt="Imagem ingressos cinema"/>
                            <p>Testar formulario</p>
                        </Link>
                    </section>
                    <section className='banner'>
                        <Link className='link' to='/mudar'>
                            <h3>Mudar</h3>
                            <img src={Mudar} alt="Imagem ingressos cinema"/>
                            <p>Mude algumas coisas</p>
                        </Link>
                    </section>
                    <section className='banner'>
                        <Link className='link' to='/calculadora'>
                            <h3>Calculadora</h3>
                            <img src={Calculadora} alt="Imagem ingressos cinema"/>
                            <p>Use a calculadora</p>
                        </Link>
                    </section>
                </div>
            </main>
        </div>
    )
}