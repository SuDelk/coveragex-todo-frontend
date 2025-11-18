import React from "react";
import Swal from "sweetalert2";

function TaskCard({ task, onDone }) {
  const handleDone = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to mark this task as done?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, mark as done!",
    }).then((result) => {
      if (result.isConfirmed) {
        onDone(task.id);
        Swal.fire("Marked!", "The task has been marked as done.", "success");
      }
    });
  };
  return (
    <div
      className="p-4 rounded-xl border border-zinc-300 dark:border-zinc-700 
                 bg-white dark:bg-zinc-900 shadow-sm flex flex-col"
    >
      <h2 className="text-lg font-semibold">{task.title}</h2>
      <p className="text-sm text-zinc-700 dark:text-zinc-400 mt-1">
        {task.description}
      </p>

      <div className="mt-3 flex justify-end">
        <button
          onClick={handleDone}
          className="px-3 py-2 rounded-lg 
                     bg-green-600 dark:bg-green-500 
                     hover:bg-green-700 dark:hover:bg-green-600
                     text-white font-medium transition hover:cursor-pointer"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
