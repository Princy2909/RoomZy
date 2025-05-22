import React from "react";
import "./Card.css"; // Import CSS file

const Card = ({ image, title, description, price, rating }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-price"><strong>Price:</strong> {price}</p>
        <p className="card-rating"><strong>Rating:</strong> ⭐ {rating}</p>
      </div>
    </div>
  );
};

export default Card;
