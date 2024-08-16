// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('authToken');

  if (isAuthenticated) {
    return <Component {...rest} />;
  }

  // Save the location user tried to access
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
