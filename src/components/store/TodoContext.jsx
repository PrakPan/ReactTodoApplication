import { createContext, useReducer } from "react";

export const TodoContext = createContext({
  todos:[],
  addNewItem:()=>{},
  deleteItem:()=>{}
});

//Pure Function
const todoReducer =(currState,action)=>{
  let newObj = currState;
    if(action.type === 'NEW_ITEM'){
         let Obj= {"name":action.payload.name,
          "date":action.payload.date};
        newObj = [...currState,Obj];
    }else if( action.type === "DELETE_ITEM"){
       newObj = currState.filter(elem=> elem.name !== action.payload.name);
    }
    return newObj;
}

const TodoContextProvider =({children})=>{
  const [todos,dispatchTodoAction] = useReducer(todoReducer,[]);

  const addNewItem=(name,date)=>{
  const newAction = {
    type : 'NEW_ITEM',
    payload :{ name,
    date},
  }
  dispatchTodoAction(newAction);
  }
  const deleteItem=(item)=>{
      const deleteAction = {
        type: "DELETE_ITEM",
        payload: {
          name : item
        },
  
      }
      dispatchTodoAction(deleteAction);
  }
  return (
    <TodoContext.Provider value={{todos,
      addNewItem,
      deleteItem}}> 
      {children}
      </TodoContext.Provider>
  )
}
export default TodoContextProvider;
