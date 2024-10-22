import { ITask } from "@/interface/task";
import React from "react";
import Task from "../Task";

type TaskListProps = {
  tasks: ITask[];
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
};
const TaskList = ({ tasks, onDelete, onComplete }: TaskListProps) => {
  return (
    <div className="flex flex-col">
      {tasks.map((task) => (
        <Task key={task.id} {...task} onComplete={onComplete} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
