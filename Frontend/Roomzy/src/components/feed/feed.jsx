import React, { useState } from "react";
import "./Feed.css";
import Card from "../feed/Card"; // ✅ Import Card component

const Feed = () => {
  const properties = [
    { id: 1, image: "https://housing-images.n7net.in/4f2250e8/857dbfa14c6251d7a79818de5d629400/v0/large/house2.jpeg", title: "House 1", description: "Beautiful house in a prime area.", price: "$250,000", rating: "4.5" },
    { id: 2, image: "https://housing-images.n7net.in/4f2250e8/857dbfa14c6251d7a79818de5d629400/v0/large/house2.jpeg", title: "House 2", description: "Spacious garden with modern amenities.", price: "$350,000", rating: "4.8" },
    { id: 3, image: "https://housing-images.n7net.in/4f2250e8/857dbfa14c6251d7a79818de5d629400/v0/large/house2.jpeg", title: "House 3", description: "Cozy house perfect for families.", price: "$200,000", rating: "4.3" },
    { id: 4, image: "https://housing-images.n7net.in/4f2250e8/857dbfa14c6251d7a79818de5d629400/v0/large/house2.jpeg", title: "House 4", description: "Luxury villa with sea view.", price: "$1,200,000", rating: "5.0" },
    { id: 5, image: "https://housing-images.n7net.in/4f2250e8/857dbfa14c6251d7a79818de5d629400/v0/large/house2.jpeg", title: "House 5", description: "Modern apartment in the city center.", price: "$450,000", rating: "4.7" },
    { id: 6, image: "https://housing-images.n7net.in/4f2250e8/857dbfa14c6251d7a79818de5d629400/v0/large/house2.jpeg", title: "House 6", description: "Classic bungalow with a big lawn.", price: "$320,000", rating: "4.6" },
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < properties.length - 3) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="feed-container">
      <div className="feed-wrapper">
        {index > 0 && <button className="arrow left-arrow" onClick={handlePrev}>&#8249;</button>}
        <div className="feed-list" style={{ transform: `translateX(-${index * 300}px)` }}>
          {properties.map((property) => (
            <Card 
              key={property.id} 
              image={property.image} 
              title={property.title} 
              description={property.description} 
              price={property.price} 
              rating={property.rating} 
            />
          ))}
        </div>
        {index < properties.length - 3 && <button className="arrow right-arrow" onClick={handleNext}>&#8250;</button>}
      </div>
    </div>
  );
};

export default Feed;
