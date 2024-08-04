import React, { useState } from 'react';
import { addCollectionItem } from '../services/api';

const CollectionManager = ({ items, setItems, token }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [format, setFormat] = useState('');

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

  return (
    <div className="collection-manager">
      <ul className="collection-list">
        {items.map((item) => (
          <li key={item._id}>
            {item.title} by {item.artist} ({item.format})
          </li>
        ))}
      </ul>
      <form className="collection-form" onSubmit={handleSubmit}>
        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="vinyl">Vinyl</option>
          <option value="cd">CD</option>
          <option value="dvd">DVD</option>
          <option value="blu-ray">Blu-ray</option>
          <option value="vhs">VHS</option>
          <option value="cassette">Cassette</option>
          <option value="boxset">Boxset</option>
        </select>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <button type="submit">Add to Collection</button>
      </form>
    </div>
  );
};

export default CollectionManager;
