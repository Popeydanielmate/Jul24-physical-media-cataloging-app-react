import React from 'react';

export default function MyCollectionPage() {
  return (
    <div className="container">
      <h1>Welcome, [Username]</h1>
      <h2>Your Collection</h2>
      <ul className="collection-list">
        <li>Format: Title by Artist - $price</li>
        <li>Format: Title by Artist - $price</li>
        <li>Format: Title by Artist - $price</li>
        {/* Add more items here */}
      </ul>
      <h3>Add to Your Collection</h3>
      <form className="collection-form">
        <select>
          <option value="vinyl">Vinyl</option>
          <option value="blu-ray">Blu-ray</option>
          <option value="cd">CD</option>
          <option value="dvd">DVD</option>
          <option value="vhs">VHS</option>
        </select>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Artist" />
        <button type="submit">Add to Collection</button>
      </form>
    </div>
  );
}

