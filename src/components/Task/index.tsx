import React from "react";
import { ITask } from "@/interface/task";
import { IoTrashBin } from "react-icons/io5";

const Task = ({ id, title, completed }: ITask) => {
  return (
    <div key={id}>
      <input type="checkbox" defaultChecked={completed} />
      {title}
      <button>
        <IoTrashBin />
      </button>
    </div>
  );
};

export default Task;
