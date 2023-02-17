import { useState } from "react";
import TaskList from "./TaskList";

function TaskManager() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    const newTaskObject = { id: Date.now(), title: newTask };
    setTasks(tasks.concat(newTaskObject));
    setNewTask("");
  };

  const handleTaskDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleNewTaskSubmit}>
            <div className="flex">
              <input
                type="text"
                placeholder="Ajouter une nouvelle tâche"
                className="w-full py-2 px-4 rounded-l-md border-t border-b border-l text-gray-800 font-medium bg-white focus:outline-none focus:border-indigo-500 focus:bg-white focus:placeholder-gray-500"
                value={newTask}
                onChange={handleNewTaskChange}
              />
              <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 rounded-r-md border border-indigo-500 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
                Ajouter
              </button>
            </div>
          </form>
          <TaskList tasks={tasks} handleTaskDelete={handleTaskDelete} />
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
