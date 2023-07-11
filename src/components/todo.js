import React,{useState} from "react";

const Todo = (props)=>{ //props is a parameter(property)
    let [todo, setTodo] = useState({
        id:"",
        task:""
    }) //useState todo variable [datatype is obj]

    const handleTaskChange = (event)=>{ //whenever user gives input in text this function will invoke 
        event.preventDefault();//preventing the default functionality of event 
        // const { name:dname,value:dval} = event.target; //destructring 
        const {name,value} = event.target; 
        setTodo((prevState)=>({...prevState,[name]:value}))//append present char with previous value d i di,
        //  di n din
    }

    const add = (event)=>{ // whenever user clicks on submit button this function will invoke 
        event.preventDefault();  //preventing the default functionality of event 
        props.addTodoListHandler(todo); //props is property in that we have addTodoListHandler from parent component and we are passing todo usestate variable (what we have) 
        setTodo({task:''}) //setting the usestate to empty again 
    }

    

    return(
        <div className="card p-2" id="">
            <h2>To Do Form</h2> 
            <form onSubmit={add}>
                <div className="form-group">
                    <label>To do</label>
                    <input type="text" className="form-control"  name="task" placeholder="Enter Task" onChange={handleTaskChange} value={todo.task}/>
                </div>
                <div className="m-2">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Todo;