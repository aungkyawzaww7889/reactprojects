import { useState } from "react";
import CreateTask from "./components/CreateTask"
import Heading from "./components/Heading"
import TaskList from "./components/TaskList"

function App() {

  const [tasks,setTasks] = useState([
    "Learn NestJS basics",
    "Understand modules and controllers",
    "Work with services and providers",
    "Implement authentication and authorization"
  ]);

  const addTask = (newTask)=>{
    setTasks([...tasks,newTask]);
  }

  const removeTask = (removeOldTask)=>{
    setTasks(tasks.filter((task)=> task != removeOldTask));
  }

  return (
    <div className="p-10">
      <Heading/>
      <CreateTask addTask={addTask}/>
      <TaskList tasks={tasks} removeTask={removeTask}/>
    </div>
  )
}

export default App
