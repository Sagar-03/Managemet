// filepath: /C:/Users/SAGAR/Desktop/Management/Frontend/src/AssignTask.js
import React, { useState } from 'react';
import axios from 'axios';

function AssignTask() {
  const [task, setTask] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/assign_task', {
        task,
        employeeId,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error assigning the task!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task:</label>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      </div>
      <div>
        <label>Employee ID:</label>
        <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
      </div>
      <button type="submit">Assign Task</button>
    </form>
  );
}

export default AssignTask;