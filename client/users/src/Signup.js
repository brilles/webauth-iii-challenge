import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    signup({
      username,
      password,
      department
    });
    setUsername('');
    setPassword('');
    setDepartment('');
  };

  const signup = creds => {
    axios
      .post('http://localhost:5000/api/register', creds)
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Pasword"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          name="password"
          placeholder="Department"
          value={department}
          onChange={e => setDepartment(e.target.value)}
        />
        {/* <Link to="/users"> */}
        <button type="submit">Sign Up</button>
        {/* </Link> */}
      </form>
    </div>
  );
}
