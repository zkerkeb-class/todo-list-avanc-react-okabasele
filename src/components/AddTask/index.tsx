import { useState } from "react";

type AddTaskProps = {
    onAdd: (title: string) => void;
  };
  
  const AddTask = ({ onAdd }: AddTaskProps) => {
    const [title, setTitle] = useState("");
  
    const handleCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onAdd(title);
    };
  
    return (
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Add task"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    );
  };
  
  export default AddTask;
  