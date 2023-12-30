import React from 'react'
import TodoItems from './TodoItems'
import styles from './TodoItem.module.css';
const TodoItem = (props)=>{
 
  return (
    <React.Fragment>
    
     <ul className={styles.ul}>
     {props.TodoData.map( items => <TodoItems key={items.name} Todos={items} handleDelete={props.handleDelete}/>
     )}
     </ul>
    

   
    </React.Fragment>
  )
}
export default TodoItem