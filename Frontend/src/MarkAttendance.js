import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function MarkAttendance() {
  const [employeeId, setEmployeeId] = useState('');
  const [inTime, setInTime] = useState('');
  const [outTime, setOutTime] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., save to local state or navigate to another route
    console.log('Attendance marked:', { employeeId, inTime, outTime });
    alert('Attendance marked successfully!');
    history.push('/'); // Navigate to the home page or another route
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Employee ID:</label>
        <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
      </div>
      <div>
        <label>In Time:</label>
        <input type="time" value={inTime} onChange={(e) => setInTime(e.target.value)} />
      </div>
      <div>
        <label>Out Time:</label>
        <input type="time" value={outTime} onChange={(e) => setOutTime(e.target.value)} />
      </div>
      <button type="submit">Mark Attendance</button>
    </form>
  );
}

export default MarkAttendance;