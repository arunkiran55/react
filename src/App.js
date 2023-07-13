import { useState } from 'react';
import './Demo.css';
// import Header from './components/header';
// import Howtowork from './components/howtowork';
import State from './components/state';


import Todo from './components/todo';

const { v4: uuidv4 } = require('uuid');

function App() {
  const [todoList,settodoList]= useState([])
  const [ApptostateData,setApptostateData] =useState("hello world");

  const ApptostateDatainapp = ()=>{
    {/* dummy function to show the difference between names in parent to child data sharing component*/}
  }
  const addTodoListHandlerinapp = (todo)=>{ //prop function of child component 
      settodoList([...todoList, {id:uuidv4(), ...todo}]) // {id:uuidv4(), ...todo} -> in todo we have   id:"", task:"to do breakfast" we are updating id with unique id and appending (adding at last) in todolist array
  }

  const removeTodo = (id)=>{
    const newtodoList = todoList.filter((item)=>{
      return item.id!==id;
    })  // filtering our todolist variable data if items id is not equal to the id invoked from onclick event then only append data in newtodolist  
    settodoList(newtodoList) // now here we are updating todolist with newtodolist 
  }

  const trashStyle = {
    color:'red',
    cursor:"pointer"
  }

  let viewList = todoList.map((item)=>{ // iterating todolist array and each iteration as item
     return(  // a function will return some functionality here we are writing jsx
      <div className='card' key={item.id}> 
        <div className="d-flex flex-row justify-content-between px-5">
          <h3>{item?.task}</h3>
          <i className="fa fa-trash pt-2" style={trashStyle} aria-hidden="true" onClick={()=>removeTodo(item.id)}></i> {/* added inline style in react and onclick event with function passing id */}
        </div>
      </div>
     ) //returning a div map should have key uniqueid for sure and in that div we are showing task name to show in rendering return data via one way data binding
  })

  return (
    <div className="App">
        {/* <Header/> */}
        {/* <State ApptostateData={ApptostateDatainapp}/> */}
         {/* parent to child data sharing */}

        <Todo addTodoListHandler={addTodoListHandlerinapp}/> {/* todo is a child component addTodoListHandler is child property(Left hand side) and addTodoListHandlerinapp is parent property (right hand side) 
        child to parent data sharing */}
        <div>{viewList}</div>
    </div>
  );
}

export default App;
