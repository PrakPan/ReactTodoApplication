import './App.css'
import TodoItem from './components/TodoItem'
import TodoTitle from './components/TodoTitle'
import WelcomeMessage from './components/WelcomeMessage';
import TodoDisplay from './components/TodoDisplay';
import TodoContextProvider from './components/store/todoContext';

function App() {
 
  return (
    <>
      <TodoContextProvider>
      <TodoTitle/>
      <TodoDisplay />
      <WelcomeMessage/>
      <TodoItem/>
      </TodoContextProvider>
    </>
  )
}

export default App
