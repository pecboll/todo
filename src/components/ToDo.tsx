
import { useState,useEffect } from 'react'
import styles from './ToDo.module.css'
import { Check, Trash } from '@phosphor-icons/react'

interface ToDoProps {
  text: string,
  complete: boolean,
  id: string,
  isComplete: (complete:boolean, id:string) => void,
  deleteTask: ( id:string, complete:boolean) => void,

}
export function ToDo({text, complete, isComplete, deleteTask, id}:ToDoProps) {
  const [isCompleteStyle, setIsCompleteStyle] = useState(styles.ToDoComplete)

  useEffect(() => {
if(complete === true) {
      setIsCompleteStyle(styles.ToDoComplete)
    } 
    else{
      setIsCompleteStyle(styles.ToDoNotComplete)
    }
  },[complete])

  function handleDeleteTask(){
    deleteTask(id,complete)
  }
 
  return(


<div className={isCompleteStyle}>

  <div className={styles.leftElements}>
      <button
      name='checkbox'
      onClick={() => {isComplete(complete, id)}}
      > <Check size={12}/> </button>

      <label>{text}</label>
  </div>  

  <div className={styles.rightElements}>
     <span onClick={handleDeleteTask}> <Trash size={20}/> </span> 
     </div>
  </div>
    

  )
}