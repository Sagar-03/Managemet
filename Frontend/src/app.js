// filepath: /C:/Users/SAGAR/Desktop/Management/Frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    personalDetails: '',
    shift: '',
    salaryDetails: '',
    gpsLocation: '',
  });
  const [task, setTask] = useState({
    id: '',
    assignedTo: '',
    description: '',
  });
  const [attendance, setAttendance] = useState({
    employeeId: '',
    inTime: '',
    outTime: '',
  });
  const [reportType, setReportType] = useState('daily');
  const [report, setReport] = useState(null);

  const handleEmployeeSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/onboard_employee', employee);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error onboarding employee');
    }
  };

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/assign_task', task);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error assigning task');
    }
  };

  const handleAttendanceSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/mark_attendance', attendance);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error marking attendance');
    }
  };

  const handleGenerateReport = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/generate_report?type=${reportType}`);
      setReport(response.data.report);
    } catch (error) {
      console.error('There was an error generating the report!', error);
    }
  };

  return (
    <div className="App">
      <h1>Work Tracking System</h1>

      <section>
        <h2>Onboard Employee</h2>
        <form onSubmit={handleEmployeeSubmit}>
          <input type="text" placeholder="ID" onChange={(e) => setEmployee({ ...employee, id: e.target.value })} />
          <input type="text" placeholder="Name" onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
          <input type="text" placeholder="Personal Details" onChange={(e) => setEmployee({ ...employee, personalDetails: e.target.value })} />
          <input type="text" placeholder="Shift" onChange={(e) => setEmployee({ ...employee, shift: e.target.value })} />
          <input type="text" placeholder="Salary Details" onChange={(e) => setEmployee({ ...employee, salaryDetails: e.target.value })} />
          <button type="submit">Onboard</button>
        </form>
      </section>

      <section>
        <h2>Assign Task</h2>
        <form onSubmit={handleTaskSubmit}>
          <input type="text" placeholder="Task ID" onChange={(e) => setTask({ ...task, id: e.target.value })} />
          <input type="text" placeholder="Assigned To" onChange={(e) => setTask({ ...task, assignedTo: e.target.value })} />
          <input type="text" placeholder="Description" onChange={(e) => setTask({ ...task, description: e.target.value })} />
          <button type="submit">Assign</button>
        </form>
      </section>

      <section>
        <h2>Mark Attendance</h2>
        <form onSubmit={handleAttendanceSubmit}>
          <input type="text" placeholder="Employee ID" onChange={(e) => setAttendance({ ...attendance, employeeId: e.target.value })} />
          <input type="time" placeholder="In Time" onChange={(e) => setAttendance({ ...attendance, inTime: e.target.value })} />
          <input type="time" placeholder="Out Time" onChange={(e) => setAttendance({ ...attendance, outTime: e.target.value })} />
          <button type="submit">Mark Attendance</button>
        </form>
      </section>

      <section>
        <h2>Generate Report</h2>
        <div>
          <label>Report Type:</label>
          <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
            <option value="daily">Daily</option>
            <option value="tasks">Tasks</option>
            <option value="employees">Employees</option>
          </select>
        </div>
        <button onClick={handleGenerateReport}>Generate Report</button>
        {report && (
          <div>
            <h2>Report:</h2>
            <pre>{JSON.stringify(report, null, 2)}</pre>
          </div>
        )}
      </section>
    </div>
  );
};

export default App;