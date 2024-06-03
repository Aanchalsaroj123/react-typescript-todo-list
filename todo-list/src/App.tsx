import Addtodolist from "./components/Addtodolist"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"

const App = () => {
  return (
    <div className="main">
      <h1>To-do list</h1>
      <hr />
      <Navbar/>
      <hr />
      <Addtodolist/>
      <Todos/>
    </div>
  )
}

export default App
