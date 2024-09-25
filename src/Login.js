import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState(''); // Field for OTP verification
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    otp: '',
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = {
      email: '',
      password: '',
      otp: '',
    };
    let formIsValid = true;

    if (!email) {
      formIsValid = false;
      validationErrors.email = 'Email cannot be blank.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      validationErrors.email = 'Email is not valid.';
    }

    if (!password) {
      formIsValid = false;
      validationErrors.password = 'Password cannot be blank.';
    }

    if (!otp) {
      formIsValid = false;
      validationErrors.otp = 'OTP is required.';
    }

    setErrors(validationErrors);

    if (formIsValid) {
      alert('Login successful!');
      navigate('/register');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <img src={`${process.env.PUBLIC_URL}/images/ptu logo.png`} alt="University Logo" className="logo" />
        <h2 id="univname">IK GUJRAL PUNJAB TECHNICAL UNIVERSITY</h2>
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="email" className="blue-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password" className="blue-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="otp" className="blue-label">Verify Me (OTP)</label>
          <input
            type="text"
            id="otp"
            className="form-control"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          {errors.otp && <span className="error">{errors.otp}</span>}
        </div>

        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
      <p className="returning-user">
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;


