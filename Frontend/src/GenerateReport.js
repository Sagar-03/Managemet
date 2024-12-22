import React, { useState } from 'react';
import axios from 'axios';

function GenerateReport() {
  const [reportType, setReportType] = useState('daily');
  const [report, setReport] = useState(null);

  const handleGenerateReport = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/generate_report?type=${reportType}`);
      setReport(response.data.report);
    } catch (error) {
      console.error('There was an error generating the report!', error);
    }
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