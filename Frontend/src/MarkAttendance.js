import React, { useState } from 'react';
import axios from 'axios';

function MarkAttendance() {
  const [employeeId, setEmployeeId] = useState('');
  const [inTime, setInTime] = useState('');
  const [outTime, setOutTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/mark_attendance', {
        employeeId,
        inTime,
        outTime,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error marking the attendance!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Employee ID:</label>
        <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
      </div>
      <div>
        <label>In Time:</label>
        <input type="text" value={inTime} onChange={(e) => setInTime(e.target.value)} />
      </div>
      <div>
        <label>Out Time:</label>
        <input type="text" value={outTime} onChange={(e) => setOutTime(e.target.value)} />
      </div>
      <button type="submit">Mark Attendance</button>
    </form>
  );
}

export default MarkAttendance;