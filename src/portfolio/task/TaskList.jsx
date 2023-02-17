import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleTaskDelete }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Liste des tâches</h2>
      {tasks.length === 0 ? (
        <p>Aucune tâche à afficher</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleTaskDelete={handleTaskDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
