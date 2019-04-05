import React, { Component } from 'react';
import axios from 'axios';
import auth from './auth.js';

class Users extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <div className="users">
        <h2>Users:</h2>
        {this.state.users.map(user => (
          <div key={user.id}>
            <h4>Username: {user.username}</h4>
            <p>Department: {user.department}</p>
          </div>
        ))}
      </div>
    );
  }

  componentDidMount() {
    axios
      .get('/api/users')
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default auth(Users);
