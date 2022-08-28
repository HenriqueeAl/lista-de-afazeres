import './new-tarefa.css'
import { useState } from 'react';
import { GrFormAdd } from 'react-icons/gr';

export default function Newtarefa({addObj}){
    const [text, setText] = useState(null)

    const create = (text)=>{
        if (text){
            const createObj = {text: text, id: document.querySelectorAll('.w100').length}
            addObj(createObj)
            document.getElementById('outlined-basic').value = null
            setText(null)
        }
    }

    return (
        <div id='inputadd'>
            <label>Adicione sua tarefa aqui</label>
            <div className='flex-row'>
                <input type='text' id="outlined-basic" placeholder='Adicione aqui sua tarefa' onChange={(e) => setText(e.target.value)} ></input>
                <button onClick={()=>{create(text)}}><GrFormAdd /></button>
            </div>
        </div>
    )
}