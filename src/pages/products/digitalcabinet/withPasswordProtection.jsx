import React, { useState } from 'react';
import PasswordPrompt from './PasswordPrompt';

const withPasswordProtection = (WrappedComponent, correctPassword) => {
  return props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const onPasswordSubmit = (password) => {
      console.log(`Password submitted: ${password}`); // Debugging line to log submitted password
      if (password === correctPassword) {
        console.log('Password is correct, user authenticated'); // Debugging line for successful authentication
        setIsAuthenticated(true);
      } else {
        console.log('Password is incorrect, authentication failed'); // Debugging line for failed authentication
        alert('Incorrect Password!');
      }
    };

    console.log(`isAuthenticated status: ${isAuthenticated}`); // Debugging line to log authentication status

    if (!isAuthenticated) {
      return <PasswordPrompt onPasswordSubmit={onPasswordSubmit} />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withPasswordProtection;
