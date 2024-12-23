// filepath: /C:/Users/SAGAR/Desktop/Management/Frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import OnboardEmployee from './OnboardEmployee';
import AssignTask from './AssignTask';
import MarkAttendance from './MarkAttendance';
import GenerateReport from './GenerateReport';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Work Tracking System</h1>
        <nav>
          <ul>
            <li><Link to="/onboard-employee">Onboard Employee</Link></li>
            <li><Link to="/assign-task">Assign Task</Link></li>
            <li><Link to="/mark-attendance">Mark Attendance</Link></li>
            <li><Link to="/generate-report">Generate Report</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/onboard-employee" component={OnboardEmployee} />
          <Route path="/assign-task" component={AssignTask} />
          <Route path="/mark-attendance" component={MarkAttendance} />
          <Route path="/generate-report" component={GenerateReport} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;