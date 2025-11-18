import React from "react";

function TaskCard({ task, onDone }) {
  return (
    <div
      className="p-4 rounded-xl border border-zinc-300 dark:border-zinc-700 
                 bg-white dark:bg-zinc-900 shadow-sm"
    >
      <h2 className="text-lg font-semibold">{task.title}</h2>
      <p className="text-sm text-zinc-700 dark:text-zinc-400 mt-1">
        {task.description}
      </p>

      <button
        onClick={() => onDone(task.id)}
        className="mt-3 px-3 py-2 rounded-lg 
                   bg-green-600 dark:bg-green-500 
                   hover:bg-green-700 dark:hover:bg-green-600
                   text-white font-medium transition"
      >
        Done
      </button>
    </div>
  );
}

export default TaskCard;
