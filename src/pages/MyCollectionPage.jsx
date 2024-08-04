import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import vhsImage from '../assets/vhs.jpg';
import CollectionManager from '../components/CollectionManager';
import { getCollectionItems } from '../services/api';

export default function MyCollectionPage({ token }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    } else {
      fetchCollectionItems();
    }
  }, [token, navigate]);

  const fetchCollectionItems = async () => {
    try {
      const items = await getCollectionItems(token);
      setItems(items);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching collection items:', error);
    }
  };

  if (!token) {
    return <p>Redirecting...</p>;
  }

  return (
    <div className="collection-page-container">
      <h1>Welcome, [username]</h1>
      <div className="collection-image-container">
        <img src={vhsImage} alt="VHS" className="collection-image" />
      </div>
      <div className="collection-container">
        {loading ? (
          <p>Loading your collection...</p>
        ) : (
          <CollectionManager items={items} setItems={setItems} token={token} />
        )}
      </div>
    </div>
  );
}

