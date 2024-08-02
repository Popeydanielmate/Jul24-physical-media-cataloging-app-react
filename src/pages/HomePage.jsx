import React, { useState } from 'react';
import cassetteImage from '../assets/cassette.jpg';
import { registerUser, loginUser } from '../services/api';
import LoginForm from '../components/LoginForm';

export default function HomePage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        const response = await registerUser({ username, email, password });
        console.log('User registered successfully:', response);
      } else {
        const response = await loginUser({ email, password });
        console.log('User logged in successfully:', response);
        // Handle storing the token and user redirection
      }
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error('Authentication error:', err);
      setError('Authentication failed. Please check your details and try again.');
    }
  };

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="home-text">
          <h1>Track your vinyl, CDs, and more!</h1>
          <div className="image-container">
            <img src={cassetteImage} alt="Cassette" className="home-image" />
          </div>
          <div className="form-container">
            <LoginForm
              isSignUp={isSignUp}
              formData={formData}
              onChange={onChange}
              onSubmit={onSubmit}
              error={error}
            />
            <button className="toggle-button" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Switch to Log In' : 'Switch to Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
