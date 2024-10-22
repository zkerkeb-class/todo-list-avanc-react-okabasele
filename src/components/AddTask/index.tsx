import { useState } from "react";
import { BiPlus } from "react-icons/bi";

type AddTaskProps = {
  onAdd: (title: string) => void;
};

const AddTask = ({ onAdd }: AddTaskProps) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) {
      setError("Task title is required");
      return;
    }
    setError("");
    onAdd(title);
    setTitle("");
    e.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleCreateTask}
      className="w-full flex py-5 justify-between"
    >
      <div className="flex w-3/4 gap-2">
        <input type="checkbox" disabled />
        <div className="w-full">
          <input
            className="border-b w-full"
            type="text"
            placeholder="Add task"
            onChange={(e) => setTitle(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
      <button type="submit">
        <BiPlus />
      </button>
    </form>
  );
};

export default AddTask;
