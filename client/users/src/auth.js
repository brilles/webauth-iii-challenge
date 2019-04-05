import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

axios.interceptors.request.use(function(requestConfig) {
  const token = localStorage.getItem('token');
  requestConfig.headers.authorization = token;
  return requestConfig;
});

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem('token');
      const noAuth = <h2>Sign in to view content</h2>;

      return <>{token ? <Component /> : noAuth}</>;
    }
  };
}
