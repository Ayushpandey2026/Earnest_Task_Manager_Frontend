"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getTasks } from "@/src/services/tasks";
import TaskItem from "@/src/components/TaskItem";
import TaskForm from "@/src/components/TaskForm";

export default function DashboardPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [selectedTask, setSelectedTask] = useState<any>(null);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [page, setPage] = useState(1);

  /* ---------------- Fetch Tasks ---------------- */
  const fetchTasks = async (reset = false) => {
    try {
      const res = await getTasks({
        page,
        limit: 5,
        search,
        status,
      });

      if (reset) {
        setTasks(res.data.tasks);
      } else {
        setTasks((prev) => [...prev, ...res.data.tasks]);
      }
    } catch {
      toast.error("Failed to load tasks ❌");
    }
  };

  /* ---------------- Load Tasks on Page Change ---------------- */
  useEffect(() => {
    fetchTasks(page === 1);
  }, [page]);

  /* ---------------- Search/Filter Change ---------------- */
  useEffect(() => {
    const delay = setTimeout(() => {
      setTasks([]);
      setPage(1);
      fetchTasks(true);
    }, 500);

    return () => clearTimeout(delay);
  }, [search, status]);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Task Dashboard 
      </h1>

      {/* Task Form */}
      <TaskForm
        selectedTask={selectedTask}
        refresh={() => {
          setTasks([]);
          setPage(1);
          fetchTasks(true);
        }}
        clearSelection={() => setSelectedTask(null)}
      />

      {/* Search + Filter */}
      <div className="flex gap-2 mb-4">
        <input
          placeholder="Search tasks..."
          className="w-full p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 border rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Task List */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={setSelectedTask}
          refresh={() => {
            setTasks([]);
            setPage(1);
            fetchTasks(true);
          }}
        />
      ))}

      {/* Load More */}
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="w-full mt-4 p-2 bg-gray-200 rounded"
      >
        Load More
      </button>
    </div>
  );
}