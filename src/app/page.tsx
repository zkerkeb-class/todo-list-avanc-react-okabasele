"use client";
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";
import useTasks from "@/hooks/useTasks";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const {
    tasks,
    createTask,
    deleteTask,
    completeTask,
    fetchTasks,
    filterTodos,
  } = useTasks();
  const [filter, setFilter] = useState<string>("all");
  const visibleTasks = useMemo(
    () => filterTodos(tasks, filter),
    [tasks, filter]
  );

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <section className="px-2">
      <div className="flex gap-5">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <TaskList
        tasks={visibleTasks}
        onDelete={deleteTask}
        onComplete={completeTask}
      />
      <AddTask onAdd={createTask} />
    </section>
  );
}
