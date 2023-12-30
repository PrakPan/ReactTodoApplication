import './App.css'
import TodoItem from './components/TodoItem'
import TodoTitle from './components/TodoTitle'
import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import TodoDisplay from './components/TodoDisplay';

function App() {
 
  let [todos,setTodos] =useState([]);

const handleTodos=(name,date)=>{
  let newObj= {"name":name,
  "date":date};
  setTodos([...todos,newObj]);
}

const handleDelete=(item)=>{
    let newVal = todos.filter(elem=> elem !== item);
    setTodos(newVal);
}
  return (
    <>
      <TodoTitle/>
      <TodoDisplay handleTodos={handleTodos}/>
      {todos.length ?  <TodoItem TodoData={todos}  handleDelete={handleDelete}/>:<WelcomeMessage/>}
     
    </>
  )
}

export default App
