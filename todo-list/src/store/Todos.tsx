import { ReactNode, createContext, useContext, useState } from "react";

export type todoproviderprops={
    children:ReactNode
}
export type Todo={
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}
export type TodoContext={
    todos:Todo[];
    handleaddTodo:(task:string) => void;
    toggletodocomplete:(id:string) => void;
    handledeletetodo:(id:string) => void;
}

export const todoContext=createContext<TodoContext|null>(null)

export const Todoprovider=({children}:todoproviderprops)=>{
    
    const[todos,settodos]=useState<Todo[]>(()=>{
        try {
            const data=localStorage.getItem("todos")
            if(data){
                return JSON.parse(data)
            }
            else{
                return []
            }
        }
        catch (error) {
            console.log(error);
        }
    })

    const handleaddTodo=(task:string)=>{
        settodos((prev)=>{
            const newtodos:Todo[]=[
                {
                   id:Math.random().toString(),
                   task:task,
                   completed:false,
                   createdAt:new Date(), 
                },
                ...prev
            ]
            // console.log("my previous data "+ prev);
            // console.log(newtodos)
            localStorage.setItem("todos",JSON.stringify(newtodos))
            return newtodos
        })
    }


    const toggletodocomplete=(id:string)=>{
        settodos((prev)=>{
           let newtodos = prev.map((todo)=>{
                if(todo.id===id){
                    return{
                       ...todo,
                        completed:!todo.completed
                    }
                }
                return todo;
            })
            localStorage.setItem("todos",JSON.stringify(newtodos))
           
            return newtodos;
        })
    }

    const handledeletetodo=(id:string)=>{
        settodos((prev)=>{
            let newtodos= prev.filter((filtertodo)=>
                filtertodo.id!==id);
            localStorage.setItem("todos",JSON.stringify(newtodos))
           
            return newtodos; 
        })
    }

    return <todoContext.Provider value={{todos,handleaddTodo,toggletodocomplete,handledeletetodo}}>
    {children} 
    </todoContext.Provider>
}


export const useTodos=()=>{
    const  todosconsumer=useContext(todoContext);
    if(!todosconsumer){
        throw new Error("useTodos must be used outside Provider")
    }
    return todosconsumer;
}