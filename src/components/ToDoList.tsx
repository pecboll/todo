
import { ToDo } from './ToDo'
import {  ClipboardText } from '@phosphor-icons/react'
import styles from './ToDoList.module.css'
import {useState} from 'react'

interface tasks {
  text: string,
  complete: boolean,
  id: string,
}
interface todoListProps {
  tasks: {
    text: string,
    complete: boolean,
    id: string,
  }[],
  setTasks: React.Dispatch<React.SetStateAction<tasks[]>>
}
export function ToDoList({tasks, setTasks}:todoListProps) {
  const [counterComplete, setCounterComplete] = useState(0)

    function isComplete(complete:boolean, id:string) {
      if(complete === false) {

         setTasks(tasks.map((todo)=> { 
          if (todo.id === id) {
            
        console.log(tasks)
        setCounterComplete(counterComplete + 1)

          return {...todo,
          complete:true
          }
        }return todo
      } 
        ));
      }  else{
        setTasks(tasks.map((todo)=> { 
          if (todo.id === id) {
            setCounterComplete(counterComplete - 1)
          return {...todo,
          complete:false
          }
        }return todo
      } 
        ));
      }
    } 

    function deleteTask(id:string, complete:boolean) {
      if(complete === true){
      setCounterComplete(counterComplete - 1)}
      setTasks(tasks.filter((todo) => {if(todo.id!=id){
        return todo
      }})) 
    }

 function ifTask() {
  if(tasks.length <= 0) {
return(
  <div className={styles.ToDoListEmpty}>

     <span className={styles.clipBoard} >
      <ClipboardText size={56}/>
      </span> 

     <p>Você ainda não tem tarefas cadastradas </p>

     <span>Crie tarefas e organize seus itens a fazer</span>
      
      </div>
)
  } else{
    return(
<div className={styles.ToDoList}>
      {tasks.map((tasks) =>{
        return <ToDo text={tasks.text} complete={tasks.complete} key={tasks.id} id={tasks.id}
        isComplete={isComplete} deleteTask={deleteTask} />
      })}
</div>
    )
  }
 }
  

  return(
    <div className={styles.ToDoBox}>
      <div className={styles.todoHeader}>      
      
      <p className={styles.taskCreate}>Tarefas criadas {' '} <span>{tasks.length}</span></p>

      <p className={styles.taskComplete}>Concluidas {' '} <span>{counterComplete}</span></p>
      </div>

      {ifTask()}
      
    </div>
  )
}