import React, { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import Signup from './Signup.js';
import Signin from './Signin.js';
import Users from './Users.js';

export default function App() {
  return (
    <div className="App">
      <header>
        <div className="links">
          <NavLink to="/signup" activeClassName="active">
            Signup
          </NavLink>
          <NavLink to="/signin" activeClassName="active">
            Signin
          </NavLink>
          <button>Logout</button>
        </div>
      </header>
      <div className="main">
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/users" component={Users} />
      </div>
    </div>
  );
}