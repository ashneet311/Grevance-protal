import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img
          src={`${process.env.PUBLIC_URL}/images/ptu logo.png`}
          alt="National Health Authority"
          className="navbar-logo"
        />
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register Your Grievance</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/track">Track Your Grievance</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/feedback">Feedback / Suggestion</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/faq">FAQ</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

