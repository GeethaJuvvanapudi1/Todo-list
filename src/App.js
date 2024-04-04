import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState({
    pending: [],
    completed: [],
    tested: [],
    underTesting: []
  });
  const [selectedStatus, setSelectedStatus] = useState('pending');
  const [newTask, setNewTask] = useState('');

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleTaskAdd = () => {
    if (newTask.trim() === '') return;
    setTasks((prevTasks) => ({
      ...prevTasks,
      [selectedStatus]: [...prevTasks[selectedStatus], newTask]
    }));
    setNewTask('');
  };

  return (
    <div className="App">
      <div className="controls">
        <select value={selectedStatus} onChange={handleStatusChange}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="tested">Tested</option>
          <option value="underTesting">Under Testing</option>
        </select>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add task..."
        />
        <button onClick={handleTaskAdd}>Add Task</button>
      </div>
      <div className="cards">
        <div className="card pending">
          <h3>Pending</h3>
          <ul>
            {tasks.pending.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        <div className="card completed">
          <h3>Completed</h3>
          <ul>
            {tasks.completed.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        <div className="card tested">
          <h3>Tested</h3>
          <ul>
            {tasks.tested.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        <div className="card underTesting">
          <h3>Under Testing</h3>
          <ul>
            {tasks.underTesting.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
