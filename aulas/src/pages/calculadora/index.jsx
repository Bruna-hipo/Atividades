import { useState } from 'react'
import Cabecalho from '../../componentes/header'
import './index.scss'

export default function Calculadora(){

    const [num1, setNum1] = useState ('')
    const [num2, setNum2] = useState ('')
    const [result, setResult] = useState ('')

    function Somar(){
        let valor = Number(num1) + Number(num2)
        setResult(valor)
    }

    return(
        <div className="pages-calculadora">
            <Cabecalho titulo='CALCULADORA'/>
            <main>
                <h2>Escolha uma operação:</h2>
                <section>
                    <h2>Soma</h2>
                    <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder='Número 1' />
                    <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder='Número 2' />
                    <p>A soma é: {result}</p>
                    <button onClick={Somar}>Calular</button>
                </section>
            </main>
        </div>
    )
}