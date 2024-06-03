import { FormEvent, useState } from "react"
import { useTodos } from "../store/Todos";

const Addtodolist = () => {

    const[todo,settodo]=useState("");
    const {handleaddTodo}=useTodos();

    const handlesubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handleaddTodo(todo)
        settodo("")
    }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" value={todo} onChange={(e)=>settodo(e.target.value)} />
        <button className="button1" type="submit">ADD</button>
      </form>
    </div>
  )
}

export default Addtodolist
