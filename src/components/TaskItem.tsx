"use client";

import toast from "react-hot-toast";
import { deleteTask, toggleTask } from "../services/tasks";

export default function TaskItem({
  task,
  onEdit,
  refresh,
}: any) {
  const handleDelete = async () => {
    await deleteTask(task.id);
    toast.success("Task Deleted ✅");
    refresh();
  };

  const handleToggle = async () => {
    await toggleTask(task.id);
    toast.success("Task Updated ✅");
    refresh();
  };

  return (
    <div className="flex justify-between items-center p-3 border rounded mb-2">
      <div>
        <h2
          className={`font-semibold ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.title}
        </h2>
        <p className="text-sm text-gray-600">{task.description}</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleToggle}
          className="px-2 py-1 bg-green-500 text-white rounded"
        >
          Toggle
        </button>

        <button
          onClick={() => onEdit(task)}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}