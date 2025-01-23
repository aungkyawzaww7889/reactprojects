import { create } from "zustand";

const useTaskStore = create((set)=>({
    tasks: [
        { id: 1, task: "Learn NestJS basics", isDone: false },
        { id: 2, task: "Understand modules and controllers", isDone: true },
        { id: 3, task: "Work with services and providers", isDone: true },
        { id: 4, task: "Implement authentication and authorization", isDone: false }
    ],
    addTask: (newTask) => set((state)=>({
        tasks: [...state.tasks,newTask ]
    })),
    removeTask : (taskId)=> set((state)=> ({
        tasks: state.tasks.filter(el => el.id !== taskId)
    })),
    doneTask: (taskId) => set((state)=>({
        tasks: state.tasks.map(el => el.id === taskId ? {...el,isDone : !el.isDone} : el )
    }))
}));


export default useTaskStore;