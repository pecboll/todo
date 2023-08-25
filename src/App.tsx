
import { Header } from './components/Header';
import { ToDoList } from './components/ToDoList';
import {useState} from 'react'

import styles from './App.module.css'
import  './global.css';

function App() {
  interface tasks {
      text: string,
      complete: boolean,
      id: string,
    }

  const [tasks, setTasks] = useState<tasks[]>([])
  const [countTasks, setCountTask] = useState(0)
  
  function handleCreateNewTask(taskInput:string) {
    setTasks([...tasks,
      {
        text: taskInput,
        complete: false,
        id:taskInput + countTasks
      }
    ]); 
   setCountTask(countTasks +1)

  }

  return (
    <div className={styles.screen}>
      <div>
        <Header
         createTaskFunction={handleCreateNewTask} />
      </div>
      <div className={styles.screenToDo}>
        <ToDoList tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  )
}

export default App
