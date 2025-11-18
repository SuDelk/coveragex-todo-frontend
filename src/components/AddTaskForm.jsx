import React, { useState } from "react";

function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return alert("Title is required");

    onAdd(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 rounded-xl border border-zinc-300 dark:border-zinc-700
                 bg-white dark:bg-zinc-900 shadow-sm flex flex-col gap-4"
    >
      {/* Title */}
      <div className="flex flex-col gap-1">
        <label htmlFor="Title" className="font-medium text-zinc-800 dark:text-zinc-300">
          Title
        </label>
        <input
          type="text"
          placeholder="Enter task title"
          className="w-full px-3 py-2 rounded-lg border 
                     border-zinc-300 dark:border-zinc-600
                     bg-zinc-50 dark:bg-zinc-800
                     text-zinc-900 dark:text-zinc-200
                     focus:outline-none focus:ring-2 
                     focus:ring-blue-500 dark:focus:ring-blue-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-1">
        <label htmlFor="Description" className="font-medium text-zinc-800 dark:text-zinc-300">
          Description (optional)
        </label>
        <textarea
          placeholder="Enter description (optional)"
          className="w-full px-3 py-2 rounded-lg border
                     border-zinc-300 dark:border-zinc-600
                     bg-zinc-50 dark:bg-zinc-800
                     text-zinc-900 dark:text-zinc-200
                     focus:outline-none focus:ring-2 
                     focus:ring-blue-500 dark:focus:ring-blue-400
                     resize-none h-24"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full py-2 rounded-lg
                   bg-blue-600 dark:bg-blue-500
                   hover:bg-blue-700 dark:hover:bg-blue-600
                   text-white font-medium transition hover:cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
