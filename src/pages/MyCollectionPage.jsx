import React from 'react';
import VHSImage from '../assets/vhs.jpg';

export default function MyCollectionPage() {
  return (
    <div className="container">
      <h1>Welcome, [Username]</h1>
      <p>Here's your collection and its estimated value.</p>
      <div className="collection-container">
        <ul className="collection-list">
          <li>Item 1 - $10</li>
          <li>Item 2 - $20</li>
        </ul>
        <form className="collection-form">
          <select name="format" id="format">
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
        <div className="image-container">
          <img src={VHSImage} alt="VHS" className="home-image" />
        </div>
      </div>
    </div>
  );
}


