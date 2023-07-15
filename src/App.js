import React from 'react';
import './App.css';
import LoginPage from './login/login';
import RegistrationForm from './registration/registration';
import HomePage from './home/home';
import Customerdetails from './admin/customerdetails';
import Benificiarydetails from './users/benificiary';
import { NavLink, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <img
            src="https://www.vhv.rs/dpng/d/427-4273719_random-logo-transparent-background-hd-png-download.png"
            height="60px"
          />
          <h1>Omega Banking</h1>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/accounts">Accounts</a>
              </li>
              <li>
                <NavLink to="/benificiaries">
                  <a>Benificiaries</a>
                </NavLink>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Navbar /> */}
        <main>
          <div className="loginsection">
            <h2>Secure and Convenient Online Banking</h2>
            <p>
              Manage your accounts and perform transactions from the comfort of
              your home.
            </p>
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>
            <NavLink to="/registration">
              <button>Register</button>
            </NavLink>
          </div>
          <div className="mainsource">
            <Routes>
              <Route path="" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registration" element={<RegistrationForm />} />
              <Route path="/benificiaries" element={<Benificiarydetails />} />
            </Routes>
          </div>
        </main>
        <benificiarydetails />
        <footer>
          <p>
            &copy; {new Date().getFullYear()} Omega Banking. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
