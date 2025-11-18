import { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { api } from "./service/api";
import Swal from "sweetalert2";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch recent tasks from backend
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const recentTasks = await api("/tasks");
      setTasks(recentTasks);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (title, description) => {
    try {
      const newTask = await api("/tasks", "POST", { title, description });
      if (newTask.id != undefined) {
        Swal.fire("Success", "Task added successfully!", "success");
      }

      setTasks((prev) => [newTask, ...prev].slice(0, 5));
    } catch (err) {
      console.error("Failed to add task:", err);
    }
  };

  const handleMarkDone = async (id) => {
    try {
      await api(`/tasks/${id}/markdone`, "PATCH");
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      console.error("Failed to mark task done:", err);
    }
  };

  // Loading screen component
  if (loading) {
    return (
      <div className="font-['Montserrat'] min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-200">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg font-semibold">Loading tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-['Montserrat'] min-h-screen bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center p-6 dark:text-zinc-200">
      <div
        className="bg-white dark:bg-zinc-900 border hover:shadow-[0_0_10px_#6366f1] 
        transition-shadow duration-300 border-zinc-300 dark:border-zinc-700 rounded-xl shadow-lg p-6 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 relative"
      >
        {/* LEFT SIDE — Add Task */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Add a Task</h1>
          <AddTaskForm onAdd={handleAddTask} />
        </div>

        {/* RIGHT SIDE — Recent Tasks with divider */}
        <div className="md:border-l md:border-zinc-300 md:dark:border-zinc-700 md:pl-6">
          <h1 className="text-2xl font-bold mb-4">Recent Tasks</h1>
          <TaskList tasks={tasks} onDone={handleMarkDone} />
        </div>
      </div>
    </div>
  );
}

export default App;
