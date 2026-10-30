
import { useState } from 'react'
import './index.scss'

import Barbie from '../../assets/imagens/Filmes/Barbie.jpg'
import Malvadas from '../../assets/imagens/Filmes/Malvadas.jpg'
import Moranguinho from '../../assets/imagens/Filmes/Moranguinho.jfif'
import Nuvem from '../../assets/imagens/Filmes/Nuvem.jpg'
import Pantera from '../../assets/imagens/Filmes/Pantera.jfif'
import Princesa from '../../assets/imagens/Filmes/Princesa.jpg'

import Cabecalho from '../../componentes/header'

export default function Cinema() {

    const [inteira, setInteira] = useState(0);
    const [meia, setMeia] = useState(0);
    const [cupom, setCupom] = useState('');
    const [total, setTotal] = useState('');
    const [filme, setFilme] = useState('');

    const valorIngresso = 30;

    function valorFinal() {
        let valor = (inteira * valorIngresso) + (meia * (valorIngresso / 2));

        if (cupom === '50%OFF') {
            valor = valor * 0.5;
        }

        if (cupom === '10%OFF') {
            valor = valor * 0.9;
        }

        if (cupom === '30%OFF') {
            valor = valor * 0.8;
        }
       

        setTotal(valor);
    }

    function diminuirMeia() {
        if (meia > 0) {
            setMeia(meia - 1);
        }
    }

    function diminuirInteira() {
        if (inteira > 0) {
            setInteira(inteira - 1);
        }
    }

    function aumentarMeia() {
        setMeia(meia + 1);
    }

    function aumentarInteira() {
        setInteira(inteira + 1);
    }

    return (
        <div className="page-cinema">

            <Cabecalho titulo='CINEMA' />

            <div className='big-banner'>

                <h2>Escolha um filme</h2>

                <section className='escolha'>

                    <section>

                        <select
                            value={filme}
                            onChange={(e) => setFilme(e.target.value)}
                        >
                            <option value="">Escolha um filme</option>
                            <option value="barbie">Barbie - o filme</option>
                            <option value="nuvem">A nuvem rosa</option>
                            <option value="malvadas">Meninas Malvadas</option>
                            <option value="moranguinho">Moranguinho - o céu é o limite</option>
                            <option value="pantera">A pantera negra</option>
                            <option value="princesas">Barbie - escola de princesas</option>
                        </select>

                        <section className='imagens'>

                            {filme === 'barbie' && (
                                <img src={Barbie} alt="Barbie" />
                            )}

                            {filme === 'nuvem' && (
                                <img src={Nuvem} alt="A nuvem rosa" />
                            )}

                            {filme === 'malvadas' && (
                                <img src={Malvadas} alt="Meninas Malvadas" />
                            )}

                            {filme === 'moranguinho' && (
                                <img src={Moranguinho} alt="Moranguinho" />
                            )}

                            {filme === 'pantera' && (
                                <img src={Pantera} alt="Pantera Negra" />
                            )}

                            {filme === 'princesas' && (
                                <img src={Princesa} alt="Escola de Princesas" />
                            )}

                        </section>

                    </section>

                    <section className='selecao'>

                        <div className='area-ingressos'>

                            <section className='meia'>

                                <p>Meia</p>

                                <section className='cont'>
                                    <button onClick={diminuirMeia}>-</button>

                                    <p>{meia}</p>

                                    <button onClick={aumentarMeia}>+</button>
                                </section>

                            </section>

                            <section className='inteira'>

                                <p>Inteira</p>

                                <section className='cont'>
                                    <button onClick={diminuirInteira}>-</button>

                                    <p>{inteira}</p>

                                    <button onClick={aumentarInteira}>+</button>
                                </section>

                            </section>

                            <section className='cupom'>

                                <p>Cupom</p>

                                <input
                                    type="text"
                                    value={cupom}
                                    onChange={(e) => setCupom(e.target.value)}
                                />

                            </section>

                            <section className='calcula'>

                                <button onClick={valorFinal}>
                                    Calcular
                                </button>

                            </section>

                        </div>

                    </section>

                </section>

                <section className='total'>
                    <p>Valor total = {total}</p>
                </section>

            </div>

        </div>
    )
}
