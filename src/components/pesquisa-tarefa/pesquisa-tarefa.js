import './pesquisar-tarefa.css'
import { BsFillBackspaceFill } from 'react-icons/bs';

export function Pesquisar(){
    return(
        <div className='procurar'>
            <div className='pesquisar'>
                <p>Pesquisar:</p>
                <div className='flex-row'>
                    <input id='pesquisa'></input>
                    <button><BsFillBackspaceFill /></button>
                </div>
            </div>
            <div className='filtrar'>
                <p>Filtrar:</p>
                <select id='select'>
                    <option>Todos</option>
                    <option>Feitos</option>
                    <option>Faltando</option>
                </select>
            </div>
        </div>
    )
}