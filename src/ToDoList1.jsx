import { useState } from "react"
export default function TodoList1()
{
    let[todos, setTodos] = useState(["Start Task"]);
    let [newTodo , setNewTodo] =useState([""]);

    let addNewTask=()=>
        {
            setTodos([...todos ,newTodo]);
            setNewTodo([""]);
        }

    let UpdateTodoValue = (event) =>
        {
            setNewTodo(event.target.value);
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
                        <li>
                            {todo}
                        </li>
                    )
                    )
                  }
            </ul>
        </div>
    )
}