// src/pages/HomePage.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';

export default function HomePage() {
  const topVinyl = [
    { title: 'Vinyl 1', price: '100.00', link: '#' },
    { title: 'Vinyl 2', price: '95.00', link: '#' },
    { title: 'Vinyl 3', price: '90.00', link: '#' },
    { title: 'Vinyl 4', price: '85.00', link: '#' },
    { title: 'Vinyl 5', price: '80.00', link: '#' },
  ];

  const topDVDs = [
    { title: 'DVD 1', price: '70.00', link: '#' },
    { title: 'DVD 2', price: '65.00', link: '#' },
    { title: 'DVD 3', price: '60.00', link: '#' },
    { title: 'DVD 4', price: '55.00', link: '#' },
    { title: 'DVD 5', price: '50.00', link: '#' },
  ];

  return (
    <>
      <h1>Welcome to Media Collection Manager</h1>
      <p>Track and value your physical media collections.</p>

      <h2>Top 5 Most Expensive Vinyl Records</h2>
      <ul>
        {topVinyl.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title} - ${item.price}
            </a>
          </li>
        ))}
      </ul>

      <h2>Top 5 Most Expensive DVDs</h2>
      <ul>
        {topDVDs.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title} - ${item.price}
            </a>
          </li>
        ))}
      </ul>

      <h2>Login</h2>
      <LoginForm />
    </>
  );
}
