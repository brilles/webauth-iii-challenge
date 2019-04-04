import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    signin({
      username,
      password
    });
    setUsername('');
    setPassword('');
  };

  const signin = creds => {
    axios
      .post('http://localhost:5000/api/login', creds)
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
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
        {/* <Link to="/users"> */}
        <button type="submit">Sign In</button>
        {/* </Link> */}
      </form>
    </div>
  );
}
