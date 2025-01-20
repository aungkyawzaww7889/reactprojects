import React from 'react'
import Task from '../components/Task.jsx';

const TaskList = ({tasks,removeTask}) => {

  return (
    <div>
        <h1 className='font-bold font-serif mb-3'>TaskList (Total {tasks.length}), Done {0}</h1>
        {tasks.map((task,idx)=>(
            <Task key={idx} task={task} removeTask={removeTask}/>
        ))}
    </div>
  )
}

export default TaskList
