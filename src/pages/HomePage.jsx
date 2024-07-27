import React, { useState } from 'react';
import cassetteImage from '../assets/cassette.jpg';

export default function HomePage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="home-text">
          <h1>Track your vinyl, CDs, and more!</h1>
          <div className="image-container">
            <img src={cassetteImage} alt="Cassette" className="home-image" />
          </div>
          <div className="form-container">
            <form>
              {isSignUp && (
                <input type="email" placeholder="Email" />
              )}
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
            </form>
            <button className="toggle-button" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Switch to Log In' : 'Switch to Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}








