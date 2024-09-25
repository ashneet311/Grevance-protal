import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import RegisterGrievance from './RegisterGrievance'; // Import the new component
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> {/* Login route */}
          <Route path="/register" element={<RegisterGrievance />} /> {/* New Grievance route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
