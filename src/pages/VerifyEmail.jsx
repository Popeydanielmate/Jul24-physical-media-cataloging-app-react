import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function VerifyEmail() {
  const location = useLocation();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      const token = new URLSearchParams(location.search).get('token');
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/verify-email?token=${token}`);
        setMessage(response.data.message);
      } catch (error) {
        setMessage(error.response.data.message);
      }
    };

    verifyEmail();
  }, [location]);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
