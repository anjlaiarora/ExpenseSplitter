import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'animate.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    //checks if email already exists
    const userExists = users.some((user: { email: string; }) => user.email === email);


    if (userExists) {
      alert('Email already registered. Please use another email.');
      return;
    }

    const newUser = { username, email, password, groups: [] };

    // Add the new user to the users array and save it back to localStorage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Log in the user and navigate to the dashboard
    localStorage.setItem('RegisterInUser', JSON.stringify(newUser));
    // setLoggedInUser(newUser);
    navigate('/splitter');
  };
  const upercase = (string: string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg animate__animated animate__fadeInUp" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={(t)=>handleRegister(t)}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={upercase(username) }
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
          <button type="submit" className="btn btn-primary btn-block">Register</button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
