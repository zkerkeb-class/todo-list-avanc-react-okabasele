"use client";
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Task 1",
      completed: false,
    },
    {
      id: "2",
      title: "Task 2",
      completed: true,
    },
  ]);

  const createTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: String(todos.length + 1),
        title,
        completed: false,
      },
    ]);
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const completeTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <section className="px-2">
      <TaskList tasks={todos} onDelete={deleteTodo} onComplete={completeTodo} />
      <AddTask onAdd={createTodo}/>
    </section>
  );
}
