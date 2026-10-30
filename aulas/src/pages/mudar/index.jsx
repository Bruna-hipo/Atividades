
import { useState } from 'react'
import Cabecalho from '../../componentes/header'
import './index.scss'

export default function Mudar() {

    const [titulo, setTitulo] = useState('TITULO');
    const [sub, setSub] = useState('');
    const [mudar, setMudar] = useState('SUBTITULO');
    const [check, setCheck] = useState(false);
    const [cor, setCor] = useState('#F3ECF0');

    function alterarTitulo(e) {
        let valor = e.target.value;
        setTitulo(valor);
    }

    function alterarSub(e) {
        let valor = e.target.value;
        setSub(valor);
    }

    function alterarCheck(e) {
        let valor = e.target.checked;
        setCheck(valor);
    }

    function novoSub() {
        setMudar(sub);
    }

    function alterarCor(e) {
        let valor = e.target.value;
        setCor(valor);
    }

    return (
        <div className="pages-mudar" style={{ backgroundColor: cor }}>

            <Cabecalho titulo='MUDAR' />

            <main>

                <h2>Mude algumas coisas</h2>

                <section className='area-textos'>

                    <h3>{titulo}</h3>

                    <input
                        type="text"
                        value={titulo}
                        onChange={alterarTitulo}
                        placeholder="Digite um título"
                    />

                    <h4>{mudar}</h4>

                    <input
                        type="text"
                        value={sub}
                        onChange={alterarSub}
                        placeholder="Digite um subtítulo"
                    />

                    <button onClick={novoSub}>
                        Mudar
                    </button>

                </section>

                <section className='area-personalizacao'>

                    <div className='escolha-cor'>

                        <h3>Escolha uma cor: {cor}</h3>

                        <input
                            type="color"
                            value={cor}
                            onChange={alterarCor}
                        />

                    </div>

                    <div className='escolha-bolo'>

                        <h3>Gosta de bolo: {check ? 'Sim' : 'Não'}</h3>

                        <input
                            type="checkbox"
                            checked={check}
                            onChange={alterarCheck}
                        />

                    </div>

                </section>

            </main>

        </div>
    )
}
