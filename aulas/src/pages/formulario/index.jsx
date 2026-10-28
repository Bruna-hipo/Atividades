import { useState } from 'react'
import Cabecalho from '../../componentes/header'
import './index.scss'

export default function Formulario(){

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState ('')
    const [zona, setZona] = useState ('')

    function Limpar() {
        setIdade('')
        setNome('')
        setZona ('')
    }

    function alterou(){
        alert("Você alterou o valor do input")
    }
    function passar() {
        alert("Você passou o mouse aqui")
    }
    function enviar(){
        alert("Você enviou o formulario")
    }

    return(
        <div className="pages-formalario">
            <Cabecalho titulo='FORMULÁRIO'/>
            <main>
                <h2>Responda o formulário</h2>

                <h3>Nome completo</h3>  
                <input type="text" value={nome}  onChange={(e) => setNome(e.target.value)}/>

                <h3>Idade</h3>
                <select value={idade} onChange={(e) => {setIdade(e.target.value); alterou()}}>
                    <option>até 13 anos</option>
                    <option>14 a 17</option>
                    <option>18 a 24</option>
                    <option>25 a 50</option>
                    <option>51 a 69</option>
                    <option>70 mais</option>
                </select>

                <h3>Regiáo que mora:</h3>
                <label  onChange ={(e) => {setZona(e.target.value); alterou()}}>
                    <input type="radio" name='zona' value="Zona Sul" checked={zona === 'Zona Sul'} />
                    Zona Sul
                </label>
                <label  onChange ={(e) => {setZona(e.target.value); alterou()}}>
                    <input type="radio" name='zona' value="Zona Leste" checked={zona === 'Zona Leste'}/>
                    Zona Leste
                </label>
                <label  onChange ={(e) => {setZona(e.target.value); alterou()}}>
                    <input type="radio" name='zona' value="Zona Oeste" checked={zona === 'Zona Oeste'}/>
                    Zona Oeste
                </label>
                <label  onChange ={(e) => {setZona(e.target.value); alterou()}}>
                    <input type="radio" name='zona' value="Centro" checked={zona === 'Centro'}/>
                    Centro
                </label>
                <label  onChange ={(e) => {setZona(e.target.value); alterou()}}>
                    <input type="radio" name='zona' value="Zona Norte" checked={zona === 'Zona Norte'}/>
                    Zona Norte
                </label>

                <section onMouseEnter={passar}>
                    <p>Passe o Mouse Aqui</p>
                </section>
                <section>
                    <button onClick={enviar}>Enviar Formulário</button>
                    <button onClick={Limpar}>Limpar</button>
                </section>
             
            </main>
        </div>
    )
}