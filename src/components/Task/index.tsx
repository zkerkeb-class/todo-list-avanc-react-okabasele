import React from "react";
import { ITask } from "@/interface/task";
import { IoTrashBin } from "react-icons/io5";

type TaskProps = ITask & {
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
};
const Task = ({ id, title, completed, onComplete, onDelete }: TaskProps) => {
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onDelete(id);
  };
  const handleComplete = () => {
    onComplete(id);
  };

  return (
    <div className="w-full border-b flex py-5 justify-between">
      <div className="flex gap-2">
        <input type="checkbox" checked={completed} onChange={handleComplete} />
        <p
          className={`font-semibold ${
            completed && "text-gray-500 line-through"
          }`}
        >
          {title}
        </p>
      </div>
      <button onClick={handleDelete}>
        <IoTrashBin />
      </button>
    </div>
  );
};

export default Task;
