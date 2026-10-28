import { useState } from 'react'
import Cabecalho from '../../componentes/header'
import './index.scss'

export default function Contador(){
    const [num, setNum] = useState(0)

    function adiciona(){
        setNum(num + 1)
    }

    function diminui(){
        if(num > 0){
            setNum(num - 1)
        }
        
    }

    return(
        <div className="pages-contador">
            <Cabecalho titulo='CONTADOR'/>
            <main>
                <h2>Adicione ou diminua</h2>
                <button onClick={diminui}>-</button>
                <p>{num}</p>
                <button onClick={adiciona}>+</button>
            </main>
        </div>
    )
}