import { useSearchParams } from 'react-router-dom';
import { useTodos } from '../store/Todos'


const Todos = () => {
const {todos,toggletodocomplete,handledeletetodo}=useTodos();

const [searchparams]=useSearchParams();
let todosdata=searchparams.get("todos");

let filterdata=todos;

if(todosdata==="active"){
    filterdata=todos.filter((task)=>{
        return!task.completed;
    })
}
if(todosdata==="completed"){
    filterdata=todos.filter((task)=>{
        return task.completed;
    })
}
  return (
    <div className="container">
   <ul>
    {
        filterdata.map((todo)=>{
          return(
            <li key={todo.id}>
             <input type="checkbox" id={`todo-${todo.id}`} 
             checked={todo.completed}
             onChange={()=>toggletodocomplete(todo.id)}
             />
             <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
             <div className="button-container">
             {
                todo.completed && (
                    <button className='addedlist' type="button"
                    onClick={()=>handledeletetodo(todo.id)}
                    >Delete</button>
                )
                }
                </div>
            </li>
          )
        })
    }
   </ul>
   </div>
  )
}

export default Todos
