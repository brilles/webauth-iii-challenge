import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Signin extends Component {
  state = {
    username: '',
    password: '',
    department: ''
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Sign Up</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChanges}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChanges}
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={this.state.department}
            onChange={this.handleChanges}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signin = creds => {
    axios
      .post('http://localhost:5000/api/login', creds)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/users');
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/register', this.state)
      .then(res => {
        console.log(res);
        this.signin({
          username: this.state.username,
          password: this.state.password
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
