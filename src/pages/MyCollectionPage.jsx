import React, { useState } from 'react';

export default function MyCollectionPage({ username }) {
  const [collection, setCollection] = useState([
    { id: 1, format: 'Vinyl', title: 'Abbey Road', artist: 'The Beatles', price: 29.99 },
    { id: 2, format: 'Blu-ray', title: 'Inception', artist: 'Christopher Nolan', price: 14.99 },
  ]);
  
  const [newItem, setNewItem] = useState({
    format: '',
    title: '',
    artist: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItemWithId = { ...newItem, id: collection.length + 1, price: 0 }; // Placeholder price
    setCollection([...collection, newItemWithId]);
    setNewItem({ format: '', title: '', artist: '' });
  };

  return (
    <>
      <h1>Welcome, {username}</h1>
      <h2>Your Collection</h2>
      <ul>
        {collection.map((item) => (
          <li key={item.id}>
            {item.format}: {item.title} by {item.artist} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>

      <h2>Add to Collection</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="format">Format</label>
          <select id="format" name="format" value={newItem.format} onChange={handleInputChange}>
            <option value="">Select Format</option>
            <option value="Vinyl">Vinyl</option>
            <option value="Blu-ray">Blu-ray</option>
            <option value="CD">CD</option>
            <option value="DVD">DVD</option>
            <option value="VHS">VHS</option>
          </select>
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newItem.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={newItem.artist}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add to Collection</button>
      </form>
    </>
  );
}
