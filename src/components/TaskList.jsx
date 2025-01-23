import React, { useContext } from 'react'
import Task from '../components/Task.jsx';
import TaskContext from '../context/TaskContext.js';
import useTaskStore from '../store/useTaskStore.js';

const TaskList = () => {
  // const {tasks} = useContext(TaskContext);
  const {tasks} = useTaskStore();
  return (
    <div>
        <h1 className='font-bold font-serif mb-3'>TaskList (Total {tasks.length}), Done {tasks.filter((task)=>task.isDone).length}</h1>
        {tasks.map((task,idx)=>(
            <Task key={idx} task={task}/>
        ))}
    </div>
  )
}

export default TaskList
