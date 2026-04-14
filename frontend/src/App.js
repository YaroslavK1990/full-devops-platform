import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const API_URL = "http://localhost:8000";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(`${API_URL}/tasks`);
    const data = await res.json();
    setTasks(data);
  };

  const createTask = async () => {
    await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    setTitle("");
    setDescription("");
    fetchTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>

      <h2>Add Task</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={createTask}>Add</button>

      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <b>{task.title}</b> - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;