import { useState } from 'react'
import Cabecalho from '../../componentes/header'
import './index.scss'

export default function Mudar(){

    const [titulo, setTitulo] = useState('TITULO');
    const [sub, setSub] = useState('');
    const [mudar, setMudar] = useState('SUBTITULO')
    const [check, setCheck] = useState(false);
    const [cor, setCor] = useState ('#F3ECF0')

    function alterarTitulo(e){
        let valor = e.target.value
        setTitulo(valor)
    }

    function alterarSub(e){
        let valor = e.target.value
        setSub(valor)
    }

    function alterarCheck (e){
        let valor = e.target.checked
        setCheck(valor)
    }

    function novoSub (e){
        setMudar(sub)
    }

    function alterarCor(e) {
       let valor = e.target.value
       setCor(valor) 
    }

    return(
        <div className="pages-mudar" style={{backgroundColor:cor}}>
            <Cabecalho titulo='MUDAR'/>
            <main>
                <h2>Mude algumas coisas</h2>
                <section>
                    <h3>{titulo}</h3>
                    <input type="text" onChange={alterarTitulo} />

                    <h4>{mudar}</h4>
                    <input type="text" onChange={alterarSub} />
                    <button onClick={novoSub}>Mudar</button>
                </section>
                <section>
                    <h3>Escolha uma cor: {cor} </h3>
                    <input type="color" value={cor} onChange={alterarCor} />

                    <h3>Gosta de bolo: {check ? 'Sim': 'Não'}</h3>
                    <input type="checkbox"  value={check} onChange={alterarCheck}/>
                </section>
            </main>
        </div>
    )
}