import React from 'react';
import vhsImage from '../assets/vhs.jpg';

export default function MyCollectionPage() {
  return (
    <div className="collection-page-container">
      <h1>Welcome, [username]</h1>
      <div className="collection-image-container">
        <img src={vhsImage} alt="VHS" className="collection-image" />
      </div>
      <div className="collection-container">
        <ul className="collection-list">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <form className="collection-form">
          <select>
            <option value="vinyl">Vinyl</option>
            <option value="cd">CD</option>
            <option value="dvd">DVD</option>
            <option value="blu-ray">Blu-ray</option>
            <option value="vhs">VHS</option>
            <option value="cassette">Cassette</option>
            <option value="boxset">Boxset</option>
          </select>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Artist" />
          <button type="submit">Add to Collection</button>
        </form>
      </div>
    </div>
  );
}



