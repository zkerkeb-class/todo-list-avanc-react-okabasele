"use client";
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";
import useTasks from "@/hooks/useTasks";
import { useEffect } from "react";

export default function Home() {
  const { tasks, createTask, deleteTask, completeTask, fetchTasks } =
    useTasks();

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <section className="px-2">
      <TaskList tasks={tasks} onDelete={deleteTask} onComplete={completeTask} />
      <AddTask onAdd={createTask} />
    </section>
  );
}
