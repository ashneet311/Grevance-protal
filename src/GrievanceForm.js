import React, { useState } from 'react';

function GrievanceForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [grievance, setGrievance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, grievance });
    // Post request logic to submit the grievance form
  };

  return (
    <div className="grievance-form">
      <h2>Submit Your Grievance</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <label>Grievance:</label>
        <textarea value={grievance} onChange={(e) => setGrievance(e.target.value)} />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GrievanceForm;
