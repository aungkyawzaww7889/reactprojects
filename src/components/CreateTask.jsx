import React, { useState } from 'react'

const CreateTask = ({addTask}) => {

    const [job,setJob] = useState("");

    const handleOnChange = (event)=>{
        setJob(event.target.value);
    }

    const clickHandler = ()=>{
        // console.log(job);
        addTask(job);
        setJob("");
    }

    return (
        <div className='flex mb-3'>
            <input type="text" className='flex-grow border border-2 px-3 py-2 rounded-l-lg focus:outline-none' placeholder='Enter new task' value={job} onChange={handleOnChange} />
            <button className='bg-slate-500 text-white border border-2 px-3 py-2' onClick={clickHandler}>Add Task</button>
        </div>
    )
}

export default CreateTask
