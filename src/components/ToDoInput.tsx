import {PlusCircle} from '@phosphor-icons/react'

import styles from './ToDoInput.module.css'
import { ChangeEvent, useState, FormEvent } from 'react'

interface inputProps {
createTaskFunction: (taskInput: string) => void
}
export function ToDoInput({createTaskFunction}:inputProps) {
  const [textInput, setTextInput] = useState('')
 
  function handleNewInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setTextInput(event.target.value)
  }
  function createTask(event: FormEvent){
    event.preventDefault()

    if (textInput.trim() === "") {
      return alert(`Não é possivel criar uma tarefa sem texto. Por favor insira um texto antes de continuar`  )
    } else {
      createTaskFunction(textInput);
    }
    setTextInput('')

  }
  return(

    <form 
    className={styles.ToDoInput}
    onSubmit={createTask}
    >

      <textarea name="inputTask" 
      placeholder='Adicionar uma nova tarefa'
      value={textInput}
      onChange={handleNewInput}
      maxLength={200}
      minLength={1}
      />

      <button type='submit'>

         Criar {" "} 
          <span>
            <PlusCircle size={16} y={5}/>
            </span>

      </button>
    </form>
  )
} 