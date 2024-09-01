import React from 'react';
import 'styles/index.css'; 

const PopUpLogin = ({ onClose, onLogin }) => {
  return (
    <div className="popup-login">
      <div className="popup-login-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Log In</h2>
        <form onSubmit={onLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default PopUpLogin;
