import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext';
import useTaskStore from '../store/useTaskStore';

const Task = ({task:{id,task,isDone}}) => {

    // const {removeTask,doneTask} = useContext(TaskContext);
    const {removeTask,doneTask} = useTaskStore();

    const removeTaskBtn = () =>{
        if(confirm("Are You Sure To Delete")){
            removeTask(id);
        }
    }

    const checkOnChange = () =>{
        doneTask(id);
    }
    
    return (
        <div className='flex justify-between items-center border border-2 rounded-md px-3 py-2 mb-3'>
        <div className='flex gap-3'>
            <input type="checkbox" onChange={checkOnChange} checked={isDone} />
            <p className={isDone ? "line-through" : ""}>{task}</p>
        </div>
        <button className='bg-red-100 text-red-500 text-sm border-lg px-3 py-2 hover:bg-red-200' onClick={removeTaskBtn}>Delete</button>
        </div>
    )
}

export default Task
