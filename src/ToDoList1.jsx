import { useState } from "react"
import {v4 as uuidv4} from "uuid"
export default function TodoList1()
{
    let[todos, setTodos] = useState([{task: "SampleTask",id: uuidv4(),isDone:false}]);
    let [newTodo , setNewTodo] =useState([""]);

    let addNewTask=()=>
        {
            // setTodos([...todos ,newTodo]);
            // setTodos([...todos ,{task:newTodo,id:uuidv4()}]);
               setTodos((prevTodos) =>
            {
                return[...todos ,{task:newTodo,id:uuidv4(),isDone:false}]
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
    let markAllDone= () =>{
       setTodos( (prevTodos) => (
        prevTodos.map((todo) => {
            return {
                ...todo,
                isDone:true,
            };
        })
    ));
};
        // console.log(newArr);

    let markAsDone = (id) =>
        {
            setTodos( ( prevTodos ) => (
                prevTodos.map((todo) => {
                    if(todo.id == id)
                        {
            return {
                ...todo,
                isDone:true,
            };
        } else {
            return todo;
        }
        })
    ));
};


    
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
                            <span style={todo.isDone ? {textDecorationLine:"line-through" , backgroundColor:"burlywood"} : {}}>
                            {todo.task}
                            </span>
                            &nbsp; &nbsp; &nbsp;

                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                            {/* we want to delete task but did not excute at run time ,
                            so we create arrow function it create copy of its argrument */}
                        </li>
                    )
                    )
                  }
            </ul>
            <br></br>
            <button onClick={markAllDone}>All Done</button>
        </div>
    )
}