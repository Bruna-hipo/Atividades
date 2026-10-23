import { useState } from 'react'
import './index.scss'

import Cabecalho from '../../componentes/header'

export default function Cinema(){

    const [qtd, setQtd] = useState(1);
    const [meia, setMeia] = useState(false);
    const [cupom, setCupom] = useState ('');
    const [total, setTotal] = useState ('');
    const [filme, setFilme] = useState ('');
    const valorIngresso = 30;

    function valorFinal(){
        let valor = qtd * valorIngresso;

        if (meia == true){
            valor = valor/2
        }
        if (cupom == '50%OFF'){
            valor = valor * 0.5
        }
        if (cupom == '10%OFF'){
            valor = valor * 0.1
        }
        if (cupom == '30%OFF'){
            valor = valor * 0.3
        }
        setTotal(valor)
    }

    return(
        <div className="page-cinema">
            <Cabecalho titulo='CINEMA'/>
            <main>
                <h2>Escolha um filme</h2>
                <section>
                   
                </section>
            </main>
        </div>
    )
}