import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (title, description) => {
    const newTask = {
      title,
      description,
    };

    const updated = [newTask, ...tasks].slice(0, 5);

    setTasks(updated);
  };

  const handleMarkDone = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-200 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT SIDE — Add Task */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Add New Task</h1>
          <AddTaskForm onAdd={handleAddTask} />
        </div>

        {/* RIGHT SIDE — Recent Tasks */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Recent Tasks</h1>
          <TaskList tasks={tasks} onDone={handleMarkDone} />
        </div>
      </div>
    </div>
  );
}

export default App;
