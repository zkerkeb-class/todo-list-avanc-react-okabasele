import { ITask } from "@/interface/task";
import { useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const saveTasks = (tasks: ITask[]) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const fetchTasks = async () => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  };

  const createTask = (title: string) => {
    const newTask: ITask = {
      id: Math.random().toString(36).substring(2, 11),
      title,
      completed: false,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const completeTask = (id: string) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  return {
    tasks,
    createTask,
    deleteTask,
    completeTask,
    fetchTasks,
  };
};

export default useTasks;
