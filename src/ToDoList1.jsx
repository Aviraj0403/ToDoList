import { useState } from "react"
import {v4 as uuidv4} from "uuid"
export default function TodoList1()
{
    let[todos, setTodos] = useState([{task: "SampleTask",id: uuidv4()}]);
    let [newTodo , setNewTodo] =useState([""]);

    let addNewTask=()=>
        {
            // setTodos([...todos ,newTodo]);
            // setTodos([...todos ,{task:newTodo,id:uuidv4()}]);
               setTodos((prevTodos) =>
            {
                return[...todos ,{task:newTodo,id:uuidv4()}]
            });
            setNewTodo([""]);
        }

    let UpdateTodoValue = (event) =>
        {
            setNewTodo(event.target.value);
        }
    let deleteTodo =(id) =>
        {
        setTodos( (prevtodos) =>todos.filter((prevtodos)=>prevtodos.id !=id));
        }
    return(
        <div>
            <input placeholder="Add New Task" value={newTodo} onChange={UpdateTodoValue}></input> <br></br>
              
            

            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>  <br></br>  <br></br>
            <hr></hr>
            <h4>Task Todo </h4>
            <ul>
                  {
                    todos.map((todo) => 
                    (
                        <li key ={todo.id}>
                            <span>
                            {todo.task}
                            </span>
                            &nbsp; &nbsp; &nbsp;

                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            {/* we want to delete task but did not excute at run time ,
                            so we create arrow function it create copy of its argrument */}
                        </li>
                    )
                    )
                  }
            </ul>
        </div>
    )
}