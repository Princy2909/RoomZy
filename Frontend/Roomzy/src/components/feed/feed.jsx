import React, { useState } from 'react';
import './Feed.css';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaComments } from 'react-icons/fa';

const Feed = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      title: 'Deluxe Room',
      desc: 'Spacious room with ocean view.',
      price: "₹25,000",
      rating: 4,
      img: 'https://housing-images.n7net.in/4f2250e8/857dbfa14c6251d7a79818de5d629400/v0/large/house2.jpeg',
    },
    {
      id: 2,
      title: 'Studio Apartment',
      desc: 'Cozy and modern interior.',
      price: "₹15,000",
      rating: 5,
      img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    },
    {
      id: 3,
      title: 'Single Room',
      desc: 'Ideal for students or solo travelers.',
      price: "₹35,000",
      rating: 3,
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    },
    {
      id: 4,
      title: 'Family Suite',
      desc: 'Perfect for family vacations.',
      price: "₹40,000",
      rating: 4,
      img: 'https://housing-images.n7net.in/4f2250e8/857dbfa14c6251d7a79818de5d629400/v0/large/house2.jpeg',
    },
    {
      id: 5,
      title: 'Penthouse View',
      desc: 'Top-floor luxury suite.',
      price: "₹60,000",
      rating: 5,
      img: 'https://images.unsplash.com/photo-1599423300746-b62533397364',
    },
    {
      id: 6,
      title: 'Modern Flat',
      desc: 'Comfortable for working professionals.',
      price: "₹30,000",
      rating: 4,
      img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    },
  ];

  const [selectedProperty, setSelectedProperty] = useState(null);

  const openReview = (property) => {
    setSelectedProperty(property);
  };

  const closeReview = () => {
    setSelectedProperty(null);
  };

  const getStars = (rating) =>
    [...Array(5)].map((_, i) =>
      i < rating ? <FaStar key={i} color="gold" /> : <FaStar key={i} color="#ccc" />
    );

  return (
    <div className="feed-slider-container">
      <h2>Available Rooms</h2>
      <div className="card-slider">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <h3 className="details">{item.title}</h3>
            <p className="details">{item.desc}</p>
            <p className="details">{item.price}</p>
            <div className="rating">{getStars(item.rating)}</div>
            <div className="review-actions">
              <button className="review-btn" onClick={() => openReview(item)}>
                Write a Review
              </button>
              <button className="see-reviews" onClick={() => navigate('/review')}>
                See All Reviews <FaComments />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProperty && (
        <div className="review-modal">
          <div className="review-content">
            <span className="close-btn" onClick={closeReview}>&times;</span>
            <h3>Write a Review for {selectedProperty.title}</h3>
            <textarea placeholder="Enter your review here..."></textarea>
            <button className="submit-review">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
