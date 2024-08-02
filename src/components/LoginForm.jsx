import React from 'react';

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
