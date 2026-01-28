"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { createTask, updateTask } from "../services/tasks";

export default function TaskForm({
  selectedTask,
  refresh,
  clearSelection,
}: any) {
  const [title, setTitle] = useState(selectedTask?.title || "");
  const [description, setDescription] = useState(
    selectedTask?.description || ""
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (selectedTask) {
      await updateTask(selectedTask.id, { title, description });
      toast.success("Task Updated ✅");
    } else {
      await createTask({ title, description });
      toast.success("Task Added ✅");
    }

    setTitle("");
    setDescription("");
    clearSelection();
    refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded mb-4"
    >
      <h2 className="font-bold mb-2">
        {selectedTask ? "Edit Task" : "Add Task"}
      </h2>

      <input
        className="w-full p-2 border mb-2"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full p-2 border mb-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="w-full bg-black text-white p-2 rounded">
        {selectedTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}