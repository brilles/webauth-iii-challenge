import React from 'react';
import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <div>
      <form>
        <h2>Sign In</h2>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Pasword" />
        <Link to="/users">
          <button type="submit">Sign In</button>
        </Link>
      </form>
    </div>
  );
}
