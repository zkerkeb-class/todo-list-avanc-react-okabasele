import { ITask } from "@/interface/task";
import { useCallback, useState } from "react";

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

  const createTask = useCallback(
    (title: string) => {
      const newTask: ITask = {
        id: Math.random().toString(36).substring(2, 11),
        title,
        completed: false,
      };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      saveTasks(newTasks);
    },
    [tasks]
  );

  const deleteTask = useCallback(
    (id: string) => {
      const newTasks = tasks.filter((task) => task.id !== id);
      setTasks(newTasks);
      saveTasks(newTasks);
    },
    [tasks]
  );

  const completeTask = useCallback(
    (id: string) => {
      const newTasks = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      setTasks(newTasks);
      saveTasks(newTasks);
    },
    [tasks]
  );

  const filterTodos = (todos: ITask[], filter: string) => {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return {
    tasks,
    createTask,
    deleteTask,
    completeTask,
    fetchTasks,
    filterTodos,
  };
};

export default useTasks;
