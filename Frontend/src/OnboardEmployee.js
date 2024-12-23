import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function OnboardEmployee() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee onboarded:', { name, position });
    alert('Employee onboarded successfully!');
    history.push('/'); // Navigate to the home page or another route
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Position:</label>
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
      </div>
      <button type="submit">Onboard Employee</button>
    </form>
  );
}

export default OnboardEmployee;