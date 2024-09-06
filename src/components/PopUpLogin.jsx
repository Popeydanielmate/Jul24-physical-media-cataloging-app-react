import React, { useState } from 'react';
import '../styles/index.css'; 

const PopUpLogin = ({ onClose, onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <div className="popup-login">
      <div className="popup-login-content">
        <span className="close-button" onClick={onClose}>&times;</span> 
        <h2>Please log in to continue to your collection</h2> 
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default PopUpLogin;
