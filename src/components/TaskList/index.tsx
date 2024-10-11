import { ITask } from '@/interface/task'
import React from 'react'
import Task from '../Task'

type TaskListProps = {
    tasks: ITask[]
}
const TaskList = ({tasks}:TaskListProps) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task {...task} />
        </div>
      ))}
    </div>
  )
}

export default TaskList