import './edit.css'
import { AiOutlineCheck } from 'react-icons/ai';

export function Edit({editconfirm, canceledit}){
    return(
        <div id='inputedit' className='edit none'>
            <p>Edite a sua tarefa:</p>
            <div className='flex-row'>
                <input placeholder='Edite aqui sua tarefa' id='edit'></input>
                <button onClick={()=>{editconfirm()}}><AiOutlineCheck /></button>
                <button onClick={()=>{canceledit()}}>Cancelar</button>
            </div>
        </div>
    )
}