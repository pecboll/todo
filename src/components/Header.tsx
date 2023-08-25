import rocket from '../assets/rocket.svg'

import styles from './Header.module.css'
import { ToDoInput } from './ToDoInput'

interface headerProps {
  createTaskFunction: (taskInput: string) => void
}
export function Header({createTaskFunction}:headerProps) {
  return(
    <header className={styles.header}>
      <div className={styles.logo}>
      <img src={rocket} alt="logo de foguete" />
      <h1>to<span>do</span></h1>
      </div>
      <div className={styles.input}>       
      <ToDoInput createTaskFunction={createTaskFunction} />
      </div>
    </header>
  )
}