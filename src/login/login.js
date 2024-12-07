import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const LoginPage = () => {
  const handleSignUp = () => {
    navigate('/signup'); 
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      // Create the request payload
      const payload = {
        username: username,
        password: password,
      };

      // Make a POST request to the login API endpoint
      const response = await axios.post('/user/authenticate', payload);

      // Handle the response
     // console.log('Login successful:', response.data);

      // Extract the JWT token from the response
      const token = response.data;


      // Fetch user data using the token
      const userResponse = await axios.get('/user/getUserByUsername', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = userResponse.data;
       // Get the user's role from the response
    const userRole = userResponse.data.role;

    // Store the token and role in local storage for future use
    localStorage.setItem('token', token);
    localStorage.setItem('role', userRole);

    // Fetch Allusers based on Role
    let adminResponse;

    try {
      if (userRole === 'ROLE_ADMIN') {
        adminResponse = await axios.get('/user/getAllUsers', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      // Handle the error here
      console.error('Error fetching users:', error);
    }
    
     const allUsers = adminResponse.data;
   // localStorage.setItem('data',userData)
   console.log(allUsers);
   localStorage.setItem('allUserData',JSON.stringify(allUsers));
   localStorage.setItem('data', JSON.stringify(userData));


    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Get the user data from the response
      
      console.log(userData);
      console.log(userRole);


      // Redirect to the profile page and pass the user data as state
      navigate('/profile', { state: userData });

    } catch (error) {
      // Handle the error
      console.error('Login failed:', error);
      // Perform any necessary error handling, such as displaying an error message to the user
    }
  };

  return (
    <div className='form-container'>
      <form className='form-group'>
        <center>
          <h1>Login</h1>
        </center>
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
        <center>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <p className='small'>Don't have a account ,get one</p>
          <button onClick={handleSignUp}>Sign Up</button>
          
        </center>
      </form>
    </div>
  );
};

export default LoginPage;
