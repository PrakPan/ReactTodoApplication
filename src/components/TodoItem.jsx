import React, { useContext } from 'react'
import TodoItems from './TodoItems'
import styles from './TodoItem.module.css';
import { TodoContext } from './store/todoContext';
const TodoItem = ()=>{
    const {todos} = useContext(TodoContext);
  return (
    <React.Fragment>
    
     <ul className={styles.ul}>
     {todos.map( items => <TodoItems key={items.name} name={items.name} date={items.date} />
     )}
     </ul>
    

   
    </React.Fragment>
  )
}
export default TodoItem