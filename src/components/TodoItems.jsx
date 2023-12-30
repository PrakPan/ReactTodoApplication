import styles from './TodoItems.module.css';
const TodoItems=({Todos,handleDelete})=>{
return (
  <>
        <li className={styles.todos}>
        <span>{Todos.name}</span>
        <span>{Todos.date}</span>
        <button type="button" className="btn btn-danger" onClick={()=>handleDelete(Todos)}>Delete</button>
        </li>
  </>
)

}
export default TodoItems