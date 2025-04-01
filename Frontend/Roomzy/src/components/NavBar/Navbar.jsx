// navbar.jsx
import React, { useState } from 'react';
import { FaHome, FaUser , FaCog, FaList, FaAdjust } from 'react-icons/fa'; // Import the icons you want to use
import './navbar.css'; // Import the CSS file

const Navbar = () => {
  const [selectedIcon, setSelectedIcon] = useState(null); // State to track the selected icon

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName); // Set the selected icon
    console.log(`${iconName} icon clicked!`);
  };

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          </ul>
        </div>
        <a className="btn btn-ghost btn-custom">RoomZy</a> {/* Keep the text */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li 
            onClick={() => handleIconClick('User ')} 
            className={selectedIcon === 'User ' ? 'active' : ''}
            style={{ marginRight: "60px" }}
          >
            <FaUser  size={24} /> {/* User Icon */}
          </li>
          <li 
            onClick={() => handleIconClick('Settings')} 
            className={selectedIcon === 'Settings' ? 'active' : ''}
            style={{ marginRight: "60px" }}
          >
            <FaCog size={24} /> {/* Settings Icon */}
          </li>
         

          <li 
            onClick={() => handleIconClick('Payment')} 
            className={selectedIcon === 'Payment' ? 'active' : ''}
            style={{ marginRight: "60px" }}
          >
            <FaAdjust size={23} /> {/* Settings Icon */}
          </li>
          <li 
            onClick={() => handleIconClick('Home')} 
            className={selectedIcon === 'Home' ? 'active' : ''}
            style={{ marginRight: "60px" }}
          >
            <FaHome size={24} /> {/* Home Icon */}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div onClick={() => handleIconClick('Home')} style={{ cursor: 'pointer' }}>
          <FaList size={24} color="white" /> {/* Replace button with icon */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;