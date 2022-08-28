import './App.css';
import { Edit } from './components/edit-tarefa/edit';
import Newtarefa from './components/new-tarefa/new-tarefa';
import { Pesquisar } from './components/pesquisa-tarefa/pesquisa-tarefa';
import { useState } from 'react';
import { Tarefas } from './components/tarefas/tarefas';

var idedit

function App() {
  const [tarefas, setTarefas] = useState([]);

  const addObj = (tarefa)=>{
    setTarefas([...tarefas, tarefa])
  };

  const toggle = (id)=>{
    document.getElementById(id).classList.toggle('feito')
  }

  const deletet = (id)=>{
    const filtered = tarefas.filter((tarefa)=>tarefa.id !== id)
    const iddelet = id
    document.getElementById(id).classList.remove('feito')
    filtered.map((test)=>{
      if (test.id != 0 && iddelet < test.id){
        if (document.getElementById(test.id).classList.contains('feito')){
          document.getElementById(test.id).classList.remove('feito')
          document.getElementById(test.id - 1).classList.add('feito')
        }
        test.id -= 1
      }
    })
    setTarefas(filtered)
  }

  const edit = (id)=>{
    document.getElementById('inputadd').classList.toggle('none')
    document.getElementById('inputedit').classList.toggle('none')
    document.getElementById('edit').value = tarefas[id].text
    idedit = id
  }

  const editconfirm = ()=>{
    document.getElementById('inputadd').classList.toggle('none')
    document.getElementById('inputedit').classList.toggle('none')
    const valueedit = document.getElementById('edit').value
    tarefas[idedit].text = valueedit
    setTarefas([...tarefas])
    idedit = null
  }

  const canceledit = ()=>{
    document.getElementById('inputadd').classList.toggle('none')
    document.getElementById('inputedit').classList.toggle('none')
    idedit = null
  }

  return (
    <div className="App">
      <h1>Tarefas</h1>
      <div className='line'></div>
      <Newtarefa addObj={addObj}/>
      <Edit editconfirm={editconfirm} canceledit={canceledit}/>
      <div className='line'></div>
      {tarefas.map((e)=>(
        <div key={e.id} id={e.id} className='w100'>
          <Tarefas tarefa={e.text} idbutton={e.id} edit={edit} toggle={toggle} deletet={deletet} />
        </div>
      ))}
    </div>
  );
}

export default App;
