import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import CassetteImage from '../assets/cassette.jpg';

export default function HomePage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1>Welcome to Physical Media Cataloging</h1>
        <p>Track your vinyl, CDs, and more!</p>
        <LoginForm isSignUp={isSignUp} />
        <button className="toggle-button" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Switch to Log In' : 'Switch to Sign Up'}
        </button>
        <div className="image-container">
          <img src={CassetteImage} alt="Cassette" className="home-image" />
        </div>
      </div>
    </div>
  );
}







