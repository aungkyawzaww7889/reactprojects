import CreateTask from "./components/CreateTask"
import Heading from "./components/Heading"
import TaskList from "./components/TaskList"
// import TaskProvider from "./context/TaskProvider";

function App() {

  return (
   
      <div className="p-10">
        <Heading/>
        <CreateTask/>
        <TaskList/>
      </div>

  )
}

export default App
