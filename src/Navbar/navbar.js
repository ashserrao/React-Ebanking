import React, { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {
  let token = localStorage.getItem('token');
  if (token === true) {
    return Navigate('/login');
  } else {
    return <Outlet />;
  }
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     // Redirect to the login page if the token is not available
  //     Navigate('/login');
  //   }
  // }, []);

  // return <Outlet />;
}

export default PrivateRoutes;
