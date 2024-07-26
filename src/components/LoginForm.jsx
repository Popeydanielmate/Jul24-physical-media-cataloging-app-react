import React from 'react';

export default function LoginForm({ isSignUp }) {
  return (
    <form>
      <input type="text" placeholder="Username" />
      {isSignUp && <input type="email" placeholder="Email" />}
      <input type="password" placeholder="Password" />
      <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
    </form>
  );
}


