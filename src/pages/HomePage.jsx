import React, { useState } from 'react';
import cassetteImage from '../assets/cassette.jpg';
import videoStoreImage from '../assets/video-store.jpg'; // Added video store image
import vinylShelvesImage from '../assets/vinyl-shelves.jpg'; // Added vinyl shelves image
import { registerUser, loginUser } from '../services/api';
import LoginForm from '../components/LoginForm';
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
  const navigate = useNavigate();

  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        const response = await registerUser({ username, email, password });
        setSuccessMessage('Sign-up successful. Please check your email.');
      } else {
        const response = await loginUser({ email, password });
        localStorage.setItem('token', response.token);
        setToken(response.token);
        navigate('/collection');
      }
      setError(null);
    } catch (err) {
      setError('Log in error. Please check your details and try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/'); // Redirect to homepage on logout
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
            {!token ? (
              <>
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
              </>
            ) : (
              <button className="logout-button" onClick={handleLogout}>Log Out</button>
            )}
          </div>
          {token && (
            <div className="extra-content">
              <img src={videoStoreImage} alt="Video Store" className="extra-image" />
              <p className="extra-text">
                Sign up with us now to catalog and value your physical media collection, calculate how much it is worth, and coming soon; a message board to buy, swap, sell, and connect with other collectors.
              </p>
              <img src={vinylShelvesImage} alt="Vinyl Shelves" className="extra-image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

