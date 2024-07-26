// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import LoginForm from '../components/LoginForm';

export default function HomePage() {
  const [topVinyl, setTopVinyl] = useState([]);

  useEffect(() => {
    const fetchTopVinyl = async () => {
      try {
        // This is a placeholder for fetching data from the backend
        const response = await fetch('/api/top-vinyl');
        const data = await response.json();
        setTopVinyl(data);
      } catch (error) {
        console.error('Error fetching top vinyl:', error);
      }
    };

    fetchTopVinyl();
  }, []);

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

      <LoginForm />
    </>
  );
}
