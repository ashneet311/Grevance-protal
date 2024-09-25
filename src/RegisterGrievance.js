import React, { useState } from 'react';
import './RegisterGrievance.css';

const RegisterGrievance = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    grievanceDetails: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    console.log('Form Data Submitted', formData);
    alert('Grievance Registered Successfully');
  };

  return (
    <div className="grievance-container">
      <h2>Register Your Grievance</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number *</label>
          <input
            type="text"
            name="mobile"
            className="form-control"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="grievanceDetails">Grievance Details *</label>
          <textarea
            name="grievanceDetails"
            className="form-control"
            value={formData.grievanceDetails}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default RegisterGrievance;
