import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Create the request payload
    const payload = {
      username: username,
      password: password,
    };

    // Make a POST request to the login API endpoint
    axios
      .post('/api/login', payload)
      .then((response) => {
        // Handle the response
        console.log('Login successful:', response.data);
        // Perform any necessary actions, such as storing the authentication token in local storage or Redux state
      })
      .catch((error) => {
        // Handle the error
        console.error('Login failed:', error);
        // Perform any necessary error handling, such as displaying an error message to the user
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
