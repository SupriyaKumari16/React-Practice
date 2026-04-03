import {useState} from "react";
import {v4 as uuidv4} from "uuid";
export default function Todo(){
    let [todos, setTodos] = useState([{task:"sample-task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos)=>{ 
           return[...prevTodos, {task: newTodo,id: uuidv4(), isDone: false}]
        });
        setNewTodo("");
    };
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    let deleteTodo=(id) => {
    //    let copy= (todos.filter((todo)=> todo.id != id));
    //    console.log(copy);
     setTodos((prevTodos)=>prevTodos.filter((prevTodos)=> prevTodos.id != id));
    };
    // this line is created to all task in upeercase change 
    // let upperCaseAll = () => {
    //     setTodos((todos) =>
    //         todos.map((todo) =>{
    //             return {
    //                 ...todo,
    //                 task: todo.task.toUpperCase(),
    //             };
    //         })
    //     );
    // };


    //this line is created to all task in lowercase change when we have to change the upercase then you back again change in lowercase
    let lowerCaseAll = () =>{
        setTodos((todos)=>
        todos.map((todo)=>{
            return {
                ...todo,
                task: todo.task.toLowerCase(),
            };
        })
    );
    };

   
// if one element want to chnage in upper case 
    // let upperCaseOne = (id)=>{
    //     setTodos((todos)=>
    //     todos.map((todo)=>{
    //         if(todo.id == id){
    //             return {
    //             ...todo,
    //             task: todo.task.toUpperCase(),
    //         };
    //         }else{
    //             return todo;
    //         }        
    //     })
    // );
    // }

    let markAsDoneAll = () => {
        setTodos((todos) =>
            todos.map((todo) =>{
                return {
                    ...todo,
                   isDone: true,
                };
            })
        );
    };


     let markAsDone = (id)=>{
        setTodos((todos)=>
        todos.map((todo)=>{
            if(todo.id == id){
                return {
                ...todo,
                isDone: true,
            };
            }else{
                return todo;
            }        
        })
    );
    }
    // if one element want to change in lower case

    let lowerCaseOne = (id)=>{
        setTodos((todos)=>
        todos.map((todo)=>{
            if(todo.id == id){
                return {
                ...todo,
                task: todo.task.toLowerCase(),
            };
            }else{
                return todo;
            }        
        })
    );
    }

    return(
        <div>
            <input placeholder ="add a task"
            value={newTodo}
            onChange={updateTodoValue}>
                </input>
                <br></br>
                <button onClick={addNewTask}>Add Task </button>
                <br></br>
                <br></br>
                <br></br>
                
                <hr />
                    <h4>Task Todo</h4>
                    
                        <ul>
                        {todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>
                                {todo.task}
                                </span>
                            &nbsp;&nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                            {/* <button onClick={()=>upperCaseOne(todo.id)}>UpperCase One</button> */}
                            <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                            <button onClick={()=>lowerCaseOne(todo.id)}>LowerCase One</button>
                            </li>
                                ))}
                        </ul>
                        <br></br>
                        {/* <button onClick={upperCaseAll}>UpperCase All</button> */}
                         <button onClick={markAsDoneAll}>Mark As Done All</button>
                        <br></br>
                        <button onClick={lowerCaseAll}>LowerCase All</button>
                        
                    

            </div>
    );
}