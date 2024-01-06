import { useContext } from "react";
import { TodoContext } from "./store/todoContext";

const WelcomeMessage=()=>{
 const {todos} = useContext(TodoContext);
 return   todos.length === 0 ? <center>Welcome Buddy! </center> : '';
 
}
export default WelcomeMessage;