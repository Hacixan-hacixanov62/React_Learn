import React from 'react';
import './index.css'; // Optional styling file

function Card({ title, description, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  );
}

export default Card;
