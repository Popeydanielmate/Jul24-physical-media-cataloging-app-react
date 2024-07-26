import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

export default function HomePage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="container">
      <h1>Physical Media Cataloging Site</h1>
      <p>Top 5 most expensive vinyl right now:</p>
      <ul className="top-5-list">
        <li>Artist: Title $price</li>
        <li>Artist: Title $price</li>
        <li>Artist: Title $price</li>
        <li>Artist: Title $price</li>
        <li>Artist: Title $price</li>
      </ul>
      <LoginForm isSignUp={isSignUp} />
      <button className="toggle-button" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Switch to Log In' : 'Switch to Sign Up'}
      </button>
    </div>
  );
}

