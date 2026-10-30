
import { useState } from 'react'
import Cabecalho from '../../componentes/header'
import './index.scss'

export default function Formulario() {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [zona, setZona] = useState('')

    function Limpar() {
        setIdade('')
        setNome('')
        setZona('')
    }

    function alterou() {
        alert("Você alterou o valor do input")
    }

    function passar() {
        alert("Você passou o mouse aqui")
    }

    function enviar() {
        alert("Você enviou o formulario")
    }

    return (
        <div className="pages-formalario">

            <Cabecalho titulo='FORMULÁRIO' />

            <main>

                <h2>Responda o formulário</h2>

                <section className='dados-pessoais'>

                    <div className='campo-nome'>
                        <h3>Nome completo</h3>

                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite seu nome completo"
                        />
                    </div>

                    <div className='campo-idade'>
                        <h3>Idade</h3>

                        <select
                            value={idade}
                            onChange={(e) => {
                                setIdade(e.target.value);
                                alterou();
                            }}
                        >
                            <option value="">Escolha sua idade</option>
                            <option value="até 13 anos">até 13 anos</option>
                            <option value="14 a 17">14 a 17</option>
                            <option value="18 a 24">18 a 24</option>
                            <option value="25 a 50">25 a 50</option>
                            <option value="51 a 69">51 a 69</option>
                            <option value="70 mais">70 mais</option>
                        </select>
                    </div>

                </section>

                <section className='area-regiao'>

                    <h3>Região que mora:</h3>

                    <div className='opcoes-regiao'>

                        <label>
                            <input
                                type="radio"
                                name='zona'
                                value="Zona Sul"
                                checked={zona === 'Zona Sul'}
                                onChange={(e) => {
                                    setZona(e.target.value);
                                    alterou();
                                }}
                            />
                            Zona Sul
                        </label>

                        <label>
                            <input
                                type="radio"
                                name='zona'
                                value="Zona Leste"
                                checked={zona === 'Zona Leste'}
                                onChange={(e) => {
                                    setZona(e.target.value);
                                    alterou();
                                }}
                            />
                            Zona Leste
                        </label>

                        <label>
                            <input
                                type="radio"
                                name='zona'
                                value="Zona Oeste"
                                checked={zona === 'Zona Oeste'}
                                onChange={(e) => {
                                    setZona(e.target.value);
                                    alterou();
                                }}
                            />
                            Zona Oeste
                        </label>

                        <label>
                            <input
                                type="radio"
                                name='zona'
                                value="Centro"
                                checked={zona === 'Centro'}
                                onChange={(e) => {
                                    setZona(e.target.value);
                                    alterou();
                                }}
                            />
                            Centro
                        </label>

                        <label>
                            <input
                                type="radio"
                                name='zona'
                                value="Zona Norte"
                                checked={zona === 'Zona Norte'}
                                onChange={(e) => {
                                    setZona(e.target.value);
                                    alterou();
                                }}
                            />
                            Zona Norte
                        </label>

                    </div>

                </section>

                <section className='area-interacao'>

                    <div
                        className='passar-mouse'
                        onMouseEnter={passar}
                    >
                        <p>Passe o Mouse Aqui</p>
                    </div>

                    <div className='botoes'>

                        <button onClick={enviar}>
                            Enviar Formulário
                        </button>

                        <button onClick={Limpar}>
                            Limpar
                        </button>

                    </div>

                </section>

            </main>

        </div>
    )
}
