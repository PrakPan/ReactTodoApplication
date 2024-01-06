import { useContext, useRef} from "react";
import styles from './TodoItem.module.css';
import { TodoContext } from "./store/todoContext";
import { IoMdAddCircleOutline } from "react-icons/io";
const TodoDisplay=()=>{

  const todoNameRef = useRef();
  const todoDateRef = useRef();  
  const {addNewItem} = useContext(TodoContext);
  return (
    <form onSubmit={(event)=>{
       event.preventDefault();
      let todoName=todoNameRef.current.value;
      let todoDate=todoDateRef.current.value;
      todoNameRef.current.value="";
      todoDateRef.current.value="";
      addNewItem(todoName,todoDate);

    }}>
    <div className={styles.input}>
    <input type='text' placeholder='Enter Todo Here' className='text' ref={todoNameRef} />
    <input type='Date' className='date' ref={todoDateRef}/>
    <button className="btn btn-success"><IoMdAddCircleOutline/></button>
  </div>  
  </form>
  )
}
export default TodoDisplay;