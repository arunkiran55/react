import { useState } from 'react';
import './Demo.css';
// import Header from './components/header';
// import Howtowork from './components/howtowork';
// import State from './components/state';


import Todo from './components/todo';
function App() {
  const [todoList,settodoList]= useState([])

  const addTodoListHandlerinapp = (todo)=>{
    console.log(todo)
  }
  return (
    <div className="App">
        {/* <Header/> */}
        {/* <State/> */}
        <Todo addTodoListHandler={addTodoListHandlerinapp}/> {/* todo is a child component addTodoListHandler is child property(Left hand side) and addTodoListHandlerinapp is parent property (right hand side) */}
    </div>
  );
}

export default App;
