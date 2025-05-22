import React, { useState } from "react";
import "./Listing.css";

const Listing = () => {
  const initialRoom = {
    price: 15000,
    location: {
      address: "123 Street",
      city: "Delhi",
      state: "Delhi",
      pinCode: "110001",
      latitude: "28.6139",
      longitude: "77.2090",
    },
    rating: 4.6,
    bedRoom: 2,
    bathRoom: 1,
    kitchen: 1,
    roomType: "Apartment",
    furnished: true,
    amenities: ["WiFi", "AC", "Parking"],
    description: "Spacious and fully furnished room in the heart of the city.",
    availableFrom: "2025-04-10",
    leaseDuration: 12,
    image: "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
  };

  const [room, setRoom] = useState(initialRoom);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRoom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;

    setRoom((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        [name]: value,
      },
    }));
  };

  return (
    <div className="listing-container">
      <div className="listing-card">
        <img src={room.image} alt="Room" className="room-image" />
        <div className="listing-details">
          {isEditing ? (
            <>
              <input type="text" name="roomType" value={room.roomType} onChange={handleChange} />
              <input type="number" name="price" value={room.price} onChange={handleChange} />
              <input type="text" name="address" value={room.location.address} onChange={handleLocationChange} />
              <input type="text" name="city" value={room.location.city} onChange={handleLocationChange} />
              <input type="text" name="state" value={room.location.state} onChange={handleLocationChange} />
              <input type="text" name="pinCode" value={room.location.pinCode} onChange={handleLocationChange} />
              <input type="text" name="description" value={room.description} onChange={handleChange} />
              <div className="button-center">
                  <button onClick={() => setIsEditing(false)}>Save</button>
              </div>

            </>
          ) : (
            <>
              <h2 className="room-title">{room.roomType} in {room.location.city}</h2>
              <p className="room-description">{room.description}</p>
              <p><strong>Price:</strong> ₹{room.price} / month</p>
              <p><strong>Rating:</strong> ⭐ {room.rating}</p>
              <p><strong>Location:</strong> {room.location.address}, {room.location.city}, {room.location.state} - {room.location.pinCode}</p>
              <p><strong>Rooms:</strong> {room.bedRoom} Bed | {room.bathRoom} Bath | {room.kitchen} Kitchen</p>
              <p><strong>Furnished:</strong> {room.furnished ? "Yes" : "No"}</p>
              <p><strong>Amenities:</strong> {room.amenities.join(", ")}</p>
              <p><strong>Available From:</strong> {room.availableFrom}</p>
              <p><strong>Lease Duration:</strong> {room.leaseDuration} months</p>
              <div className="button-center">
                   <button onClick={() => setIsEditing(true)}>Edit</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Listing;
