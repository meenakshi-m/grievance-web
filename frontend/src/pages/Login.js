import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth(); // Destructure the login method from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ email, password }); // Call your login API
      if (response.data.token) {  // Assuming the response contains a token
        localStorage.setItem('token', response.data.token); // Save the token
        authLogin(email); // Set the email in AuthContext
        alert('Login successful');
        navigate('/grievance'); // Redirect to Submit Grievance page
      }
    } catch (error) {
      alert('Login failed');
      console.error('Login error:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <p>Don’t have an account yet? <a href="/register">Sign Up</a></p>
          <form onSubmit={handleSubmit}>
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />

            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter 6 characters or more" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />

            <div className="login-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
            </div>

            <button className="login-btn">LOGIN</button>

            <div className="social-login">
              <p>or login with</p>
              <div className="social-buttons">
                <button 
                  className="google-btn" 
                  onClick={() => window.location.href = 'https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email profile'}>
                  <img src="/google.png" alt="Google" /> Google
                </button>

                <button className="facebook-btn" onClick={() => window.location.href = 'https://www.facebook.com/'}>
                  <img src="/facebook.jpg" alt="Facebook" /> Facebook
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
