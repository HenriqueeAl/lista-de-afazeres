import './tarefas.css'
import { AiOutlineCheck,AiOutlineClose } from 'react-icons/ai';
import { GrEdit } from 'react-icons/gr';

export function Tarefas({tarefa, idbutton, toggle, deletet, edit}){

    return(
        <div className='tarefa'>
            <p>{tarefa}</p>
            <button onClick={()=>{toggle(idbutton)}}><AiOutlineCheck /></button>
            <button onClick={()=>{edit(idbutton)}}><GrEdit /></button>
            <button onClick={()=>{deletet(idbutton)}}><AiOutlineClose /></button>
        </div>
    )
}