import React, { useState } from 'react';
import './Review.css';

const Review = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'Robert Karmazov',
      rating: 5,
      feedback:
        "I recently had the opportunity to explore RoomZy's UI design system, and it left a lasting impression on my workflow. The system seamlessly blends user-friendly features with a robust set of design components.",
      date: '20 days ago',
    },
    {
      name: 'Nilesh Shah',
      rating: 5,
      feedback:
        "RoomZy seamlessly blends user-friendly features with a robust set of design components, making it a go-to for creating visually stunning and consistent interfaces.",
      date: '1 month ago',
    },
    {
      name: 'Edna Watson',
      rating: 4,
      feedback:
        "I recently had the opportunity to explore RoomZy's UI design system. The system blends user-friendly features and consistent interfaces quite well.",
      date: '8 months ago',
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    feedback: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRating = (rate) => {
    setFormData({ ...formData, rating: rate });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.rating && formData.feedback) {
      const newReview = {
        name: formData.name,
        rating: formData.rating,
        feedback: formData.feedback,
        date: 'just now',
      };
      setReviews([newReview, ...reviews]);
      setFormData({ name: '', email: '', rating: 0, feedback: '' });
    }
  };

  const getStars = (count) => '★'.repeat(count) + '☆'.repeat(5 - count);

  return (
    <div>
        <div className="review-container">
        <div className="review-top">
            <div className="average-rating">
            <h3>Average Rating</h3>
            <div className="score">4.5 <span className="stars">★★★★☆</span></div>
            <div className="bars">
                {[5, 4, 3, 2, 1].map((star) => (
                <div className="bar-row" key={star}>
                    <span>{star}</span>
                    <div className="bar">
                    <div className={`bar-fill star-${star}`}></div>
                    </div>
                </div>
                ))}
            </div>
            </div>

            <div className="submit-review">
            <h3>Submit Your Review</h3>
            <div className="rating-input">
                {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={formData.rating >= star ? 'filled' : ''}
                    onClick={() => handleRating(star)}
                >
                    ★
                </span>
                ))}
            </div>
            <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
            />
            <textarea
                placeholder="Write here..."
                name="feedback"
                value={formData.feedback}
                onChange={handleInputChange}
            ></textarea>
            <button onClick={handleSubmit}>Submit Reviews</button>
            </div>
        </div>

        <div className="feedback-section">
            <h3>Customer Feedbacks</h3>
            {reviews.map((review, i) => (
            <div key={i} className="feedback-card">
                <div className="name-rating">
                <strong>{review.name}</strong>
                <div className="stars">{getStars(review.rating)}</div>
                </div>
                <p>{review.feedback}</p>
                <span className="date">{review.date}</span>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default Review;