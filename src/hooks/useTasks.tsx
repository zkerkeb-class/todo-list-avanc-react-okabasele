import { ITask } from "@/interface/task";
import { useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const createTask = (title: string) => {
    const newTask: ITask = {
      id: Math.random().toString(36).substring(2, 11),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return {
    tasks,
    createTask,
    deleteTask,
    completeTask,
  };
};

export default useTasks;
