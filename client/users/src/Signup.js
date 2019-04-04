import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div>
      <form>
        <h2>Sign Up</h2>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Pasword" />
        <input type="text" name="password" placeholder="Department" />
        <Link to="/users">
          <button type="submit">Sign Up</button>
        </Link>
      </form>
    </div>
  );
}
