import { Link, useSearchParams } from "react-router-dom"

const Navbar = () => {
    const [searchparams]=useSearchParams();
    let todosdata=searchparams.get("todos");
  return (
    <nav>
          
              <Link to="/" className={todosdata===null ?"active":""}>All</Link>
            
              <Link to="/?todos=active" className={todosdata==="active"?"active":""}>Active</Link>
           
              <Link to="/?todos=completed" className={todosdata==="completed"?"active":""}>Completed</Link>
          
    </nav>
  )
}

export default Navbar
