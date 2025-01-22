import React, { useState } from 'react'
import TaskContext from './TaskContext'

const TaskProvider = ({children}) => {
    const [tasks,setTasks] = useState([
        { id: 1, task: "Learn NestJS basics", isDone: false },
        { id: 2, task: "Understand modules and controllers", isDone: true },
        { id: 3, task: "Work with services and providers", isDone: true },
        { id: 4, task: "Implement authentication and authorization", isDone: false }
    ]);

    const addTask = (newTask)=>{
    setTasks([...tasks,newTask]);
    }

    const removeTask = (id)=>{
    setTasks(tasks.filter((task)=> task.id != id));
    }

    const doneTask = (id) =>{
    setTasks(tasks.map((task)=> task.id === id ? {...task, isDone: !task.isDone} : task));
    }
    return (
        <TaskContext.Provider value={{tasks,addTask,removeTask,doneTask}}>{children}</TaskContext.Provider>
    )
}

export default TaskProvider
