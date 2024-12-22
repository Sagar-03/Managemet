import React, { useState } from 'react';
import axios from 'axios';

function OnboardEmployee() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/onboard_employee', {
        name,
        position,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error onboarding the employee!', error);
    }
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