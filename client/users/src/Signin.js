import React, { Component } from 'react';
import axios from 'axios';

export default class Signin extends Component {
  state = {
    username: '',
    password: ''
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Sign In</h2>
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

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/login', this.state)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/users');
      })
      .catch(err => {
        console.log(err);
      });
  };
}
