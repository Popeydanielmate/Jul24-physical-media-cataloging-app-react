import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm({ isSignUp, formData, onChange, onSubmit, error }) {
  const { username, email, password } = formData;

  return (
    <div className="container">
      <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
      <form onSubmit={onSubmit}>
        {isSignUp && (
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onChange}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
            value={email}
            onChange={onChange}
          />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export function LoginContainer({ setToken }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting login form:', formData); // Log form data
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, formData);
      console.log('Login response:', response.data); // Log response data
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      setError(''); // Clear any previous errors
    } catch (err) {
      console.error('Login error:', err.response || err.message); // Log error
      setError('Log in error. Please check your details and try again.');
    }
  };

  return (
    <LoginForm
      isSignUp={false}
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      error={error}
    />
  );
}
