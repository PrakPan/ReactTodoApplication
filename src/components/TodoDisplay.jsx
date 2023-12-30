import { useState } from "react";
import styles from './TodoItem.module.css';
const TodoDisplay=(props)=>{
  const [todoName,setTodoName] = useState("");
  const [todoDate,setTodoDate] = useState("");
   
  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
  }

  const handleDateChange=(event)=>{
    setTodoDate(event.target.value);
  }
  return (
    <div className={styles.input}>
    <input type='text' placeholder='Enter Todo Here' className='text' value={todoName} onChange={handleNameChange}/>
    <input type='Date' className='date'value={todoDate} onChange={handleDateChange}/>
    <button type="button" className="btn btn-success" onClick={()=>{
      props.handleTodos(todoName,todoDate);
      setTodoName("");
      setTodoDate("");
     }
    }>Add</button>
  </div>  
  )
}
export default TodoDisplay;