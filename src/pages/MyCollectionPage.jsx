import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import vhsImage from '../assets/vhs.jpg';
import { getCollectionItems, getUserDetails, addCollectionItem } from '../services/api';

export default function MyCollectionPage({ token, setToken }) {
  const [items, setItems] = useState([]);
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [format, setFormat] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    } else {
      fetchUserDetails();
      fetchCollectionItems();
    }
  }, [token, navigate]);

  const fetchUserDetails = async () => {
    try {
      const user = await getUserDetails(token);
      setUsername(user.username);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const fetchCollectionItems = async () => {
    try {
      const items = await getCollectionItems(token);
      setItems(items);
    } catch (error) {
      console.error('Error fetching collection items:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newItem = await addCollectionItem({ title, artist, format }, token);
      setItems([...items, newItem]);
      setTitle('');
      setArtist('');
      setFormat('');
    } catch (error) {
      console.error('Error adding collection item:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/');
  };

  return (
    <div className="collection-page-container">
      <h1>Welcome, {username}</h1>
      <div className="collection-image-container">
        <img src={vhsImage} alt="VHS" className="collection-image" />
      </div>
      <div className="collection-container">
        <h2>Add to Collection</h2>
        <form className="collection-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="format">Format</label>
            <select id="format" name="format" value={format} onChange={(e) => setFormat(e.target.value)} required>
              <option value="">Select Format</option>
              <option value="vinyl">Vinyl</option>
              <option value="cd">CD</option>
              <option value="dvd">DVD</option>
              <option value="blu-ray">Blu-ray</option>
              <option value="vhs">VHS</option>
              <option value="cassette">Cassette</option>
              <option value="boxset">Boxset</option>
            </select>
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="artist">Artist</label>
            <input
              type="text"
              id="artist"
              name="artist"
              placeholder="Artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />
          </div>
          <button type="submit">Add to Collection</button>
        </form>
        <ul className="collection-list">
          {items.map((item) => (
            <li key={item._id}>
              {item.title} {item.artist && `by ${item.artist}`} ({item.format})
            </li>
          ))}
        </ul>
      </div>
      <button className="logout-button" onClick={handleLogout}>Log Out</button>
    </div>
  );
}
