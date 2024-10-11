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
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task {...task} onComplete={onComplete} onDelete={onDelete}  />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
