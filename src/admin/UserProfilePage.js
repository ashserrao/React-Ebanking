import React from 'react';
//import { useLocation } from 'react-router-dom';
import './UserProfilePage.css';

const UserProfilePage = () => {
 // const location = useLocation();
  //const userData = location.state;
  const userDataString = localStorage.getItem('data');
  const userData = JSON.parse(userDataString);
  //const userData = localStorage.getItem('data');

  return (
    <div className="user-profile">
      <div className="transactions-card card">
        <h2>Transactions</h2>
        <ul>
          <li>
            <span className="amount">+$500</span>
            <span className="date">July 12, 2023</span>
          </li>
          <li>
            <span className="amount">-$200</span>
            <span className="date">July 10, 2023</span>
          </li>
          {/* Add more transaction items */}
        </ul>
      </div>

      <div className="personal-info-card card">
        <h2>Personal Information</h2>
        <p>Name: {userData.first_name+userData.last_name}</p>
        <p>Email: {userData.email}</p>
        <p>Birth Date:{userData.date_of_birth}</p>
        <p>Phone No. :{userData.phone_no}</p>
        {/* Add more personal information */}
      </div>

      <div className="beneficiary-card card">
        <h2>Beneficiary Information</h2>
        <p>Name: Jane Smith</p>
        <p>Account Number: 123456789</p>
        {/* Add more beneficiary information */}
      </div>

      <div className="bank-services-card card">
        <h2>Bank Services</h2>
        <ul>
          <li>Online Banking</li>
          <li>Mobile Banking</li>
          <li>ATM Services</li>
          {/* Add more bank services */}
        </ul>
      </div>
    </div>
  );
};

export default UserProfilePage;
