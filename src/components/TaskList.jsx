import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, onDone }) {
  if (tasks.length === 0) {
    return (
      <div className="text-zinc-500 dark:text-zinc-400">
        No tasks added yet.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDone={onDone} />
      ))}
    </div>
  );
}

export default TaskList;
