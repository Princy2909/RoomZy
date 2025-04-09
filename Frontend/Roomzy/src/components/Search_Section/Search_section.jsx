import React, { useState } from 'react';
import './Search_section.css';

const sections = [
 
  { id: 1, name: 'Rent', color: '#28A745' },
  { id: 2, name: 'Furnished', color: '#17A2B8' },
  { id: 3, name: 'ListingType', color: '#DC3545' },
  { id: 4, name: 'OccupancyType', color: '#6F42C1' },
];

const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Pune', 'Hyderabad'];

const SearchSection = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    setFilteredCities(cities.filter(city => city.toLowerCase().includes(value.toLowerCase())));
  };

  // Function to select a city without triggering search or keeping unnecessary columns
  const handleCitySelect = (city) => {
    setSearchText(city);
    setFilteredCities([]); // Hide suggestions after selection
  };

  return (
    <div className="search-section">
      <h1 className="search-line">Find Your Perfect Property</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Select City"
          className="search-input"
          value={searchText}
          onChange={handleSearchChange}
        />
        <button className="search-button">Search</button>
      </div>
      {filteredCities.length > 0 && (
        <ul className="suggestion-box">
          {filteredCities.map((city, index) => (
            <li key={index} onClick={() => handleCitySelect(city)}>{city}</li>
          ))}
        </ul>
      )}
      <div className="section-container">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`section ${activeSection?.id === section.id ? 'active' : ''}`}
            onClick={() => handleSectionClick(section)}
            style={{ backgroundColor: activeSection?.id === section.id ? section.color : 'white' }}
          >
            {section.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
