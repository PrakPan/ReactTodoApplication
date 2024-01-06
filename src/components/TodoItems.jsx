import { useContext } from 'react';
import styles from './TodoItems.module.css';
import { TodoContext } from './store/todoContext';
import { MdDelete } from "react-icons/md";
const TodoItems=({name,date})=>{
  const {deleteItem} = useContext(TodoContext);
return (
  
  <>
        <li className={styles.todos}>
        <span>{name}</span>
        <span>{date}</span>
        <button type="button" className="btn btn-danger" onClick={()=>deleteItem(name)}><MdDelete/></button>
        </li>
  </>
)

}
export default TodoItems