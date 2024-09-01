import React, { useState } from 'react';
import cassetteImage from '../assets/cassette.jpg';
import vinylShelvesImage from '../assets/vinyl-shelves.jpg';
import { registerUser, loginUser } from '../services/api';
import LoginForm from '../components/LoginForm';
import PopUpLogin from '../components/PopUpLogin'; 
import { useNavigate } from 'react-router-dom';

export default function HomePage({ token, setToken }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false); 
  const navigate = useNavigate();

  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await registerUser({ username, email, password });
        setSuccessMessage('Sign-up successful. Please check your email.');
      } else {
        const response = await loginUser({ email, password });
        localStorage.setItem('token', response.token);
        setToken(response.token);
        navigate('/collection');
      }
      setError(null);
    } catch (err) {
      console.error('Authentication error:', err);
      setError('Log in error. Please check your details and try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/');
  };

  const handleCollectionClick = () => {
    if (!token) {
      setIsPopUpVisible(true); 
    } else {
      navigate('/collection'); 
    }
  };

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="home-text">
          <h1>Track your vinyl, CDs, and more!</h1>
          <div className="image-container">
            <img src={cassetteImage} alt="Cassette" className="cassette-image" />
          </div>
          {!token && (
            <div className="form-container">
              <LoginForm
                isSignUp={isSignUp}
                formData={formData}
                onChange={onChange}
                onSubmit={onSubmit}
                error={error}
              />
              {successMessage && <p className="success-message">{successMessage}</p>}
              <button className="toggle-button" onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Switch to Log In' : 'Switch to Sign Up'}
              </button>
            </div>
          )}
          <div className="new-content">
            <p>Catalog and value your physical media collection, calculate how much it is worth, and coming soon: a message board to buy, swap, sell, and connect with other collectors.</p>
            <img src={vinylShelvesImage} alt="Vinyl Shelves" className="home-image" />
            {token && (
              <button className="logout-button" onClick={handleLogout}>Log Out</button>
            )}
          </div>
        </div>
      </div>
      {isPopUpVisible && <PopUpLogin onClose={() => setIsPopUpVisible(false)} onLogin={onSubmit} />}
    </div>
  );
}
