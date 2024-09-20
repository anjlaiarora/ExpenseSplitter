import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'animate.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Retrieve all users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Find the user with the matching email and password
    const user = users.find((user: { email: string; password: string; }) => user.email === email && user.password === password);

    if (user) {
      // Log in the user and navigate to the dashboard
      localStorage.setItem('loggedInUser', 'true');
      // setLoggedInUser(user);
      navigate('/splitter');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg animate__animated animate__fadeInDown" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={(e)=>handleLogin(e)}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
