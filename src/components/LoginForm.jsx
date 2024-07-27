import React from 'react';

export default function LoginForm({ isSignUp }) {
  return (
    <div className="container">
      <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
      <form>
        {isSignUp && (
          <input type="text" placeholder="Username" />
        )}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
      </form>
    </div>
  );
}



