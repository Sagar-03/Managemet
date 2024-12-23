import React, { useState } from 'react';

function GenerateReport() {
  const [reportType, setReportType] = useState('daily');
  const [report, setReport] = useState(null);

  const handleGenerateReport = () => {
    // Here you can handle the report generation logic locally
    // For demonstration, we'll just set a dummy report
    const dummyReport = {
      daily: [{ id: 1, name: 'John Doe', attendance: 'Present' }],
      tasks: [{ id: 1, task: 'Task 1', assignedTo: 'John Doe' }],
      employees: [{ id: 1, name: 'John Doe', position: 'Developer' }],
    };

    setReport(dummyReport[reportType]);
  };

  return (
    <div>
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
    </div>
  );
}

export default GenerateReport;