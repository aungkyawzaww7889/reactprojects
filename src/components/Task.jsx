import React from 'react'

const Task = ({task,removeTask}) => {

    const removeTaskBtn = () =>{
        if(confirm("Are You Sure To Delete")){
            removeTask(task);
        }
    }
    
    return (
        <div className='flex justify-between items-center border border-2 rounded-md px-3 py-2 mb-3'>
        <p>{task}</p>
        <button className='bg-red-100 text-red-500 text-sm border-lg px-3 py-2 hover:bg-red-200' onClick={removeTaskBtn}>Delete</button>
        </div>
    )
}

export default Task
