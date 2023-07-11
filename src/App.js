import { useState } from 'react';
import './Demo.css';
// import Header from './components/header';
// import Howtowork from './components/howtowork';
// import State from './components/state';


import Todo from './components/todo';

const { v4: uuidv4 } = require('uuid');

function App() {
  const [todoList,settodoList]= useState([])

  const addTodoListHandlerinapp = (todo)=>{ //prop function of child component 
      settodoList([...todoList, {id:uuidv4(), ...todo}]) // {id:uuidv4(), ...todo} -> in todo we have   id:"", task:"to do breakfast" we are updating id with unique id and appending (adding at last) in todolist array
  }

  let viewList = todoList.map((item)=>{ // iterating todolist array and each iteration as item
     return(  // a function will return some functionality here we are writing jsx
      <div className='card' key={item.id}> 
        <h3>{item?.task}</h3>
      </div>
     ) //returning a div map should have key uniqueid for sure and in that div we are showing task name to show in rendering return data via one way data binding
  })

  return (
    <div className="App">
        {/* <Header/> */}
        {/* <State/> */}
        <Todo addTodoListHandler={addTodoListHandlerinapp}/> {/* todo is a child component addTodoListHandler is child property(Left hand side) and addTodoListHandlerinapp is parent property (right hand side) */}
        <div>{viewList}</div>
    </div>
  );
}

export default App;
