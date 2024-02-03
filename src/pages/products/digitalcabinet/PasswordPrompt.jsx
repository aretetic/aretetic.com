import React, { useState } from 'react';
console.log('Rendering PasswordPrompt'); // Debugging line

const PasswordPrompt = ({ onPasswordSubmit }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPasswordSubmit(password);
  };

  return (
    <div className='pageContainer'>
            <div className='pageContent'>
            <center><h2>This information is currently confidential, please enter the page password.</h2></center>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '50px', padding: '21px', }}>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginLeft: '5px', marginRight: '8px', }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default PasswordPrompt;
