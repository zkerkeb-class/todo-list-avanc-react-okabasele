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
  const handleComplete = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onComplete(id);
  };

  return (
    <div key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => handleComplete(e)}
      />
      {title}
      <button
      onClick={(e)=>handleDelete(e)}>
        <IoTrashBin />
      </button>
    </div>
  );
};

export default Task;
