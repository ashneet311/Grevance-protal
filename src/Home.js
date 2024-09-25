import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      
      {/* Header Section */}
      <header className="header-section">
        <div className="header-text">
          <h1 className="university-title">I.K. Gujral Punjab Technical University</h1>
          <h2 className="grievance-title">Grievance Portal</h2>
        </div>
      </header>
      
      <main className="main-content">
        <section className="intro-section">
          <p>
            The I.K. Gujral Punjab Technical University (IKGPTU) Grievance Redressal System is an online platform where students, faculty, and staff can lodge complaints. The university will address the registered grievances within a defined time frame to ensure fairness and transparency.
          </p>
        </section>

        <div className="alert alert-danger" role="alert">
          <strong>Note:</strong> I.K. Gujral Punjab Technical University does not provide any form of insurance coverage.
        </div>

        <div className="action-section">
  <Link to="/register" className="register-btn">Register your Grievance</Link>
</div>


        <div className="support-image">
          <img src="https://via.placeholder.com/600x300" alt="University Support" />
        </div>
      </main>
    </div>
  );
};

export default Home;
