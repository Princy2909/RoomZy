import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaAdjust, FaBell, FaSignOutAlt } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './navbar.css'; // You must also include NotificationCenter CSS here or inside navbar.css

const Navbar = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [showLogoutPanel, setShowLogoutPanel] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      user: "John Doe",
      message: "applied for your apartment at Downtown Heights",
      time: "10 min ago",
      read: false,
    },
    {
      id: 2,
      user: "Sarah Adams",
      message: "submitted documents for verification",
      time: "30 min ago",
      read: false,
    },
    {
      id: 3,
      user: "Mike Johnson",
      message: "requested a property tour",
      time: "1 hour ago",
      read: true,
    },
    {
      id: 4,
      user: "Reminder",
      message: "Your rent for March is due on 5th",
      time: "1 day ago",
      read: false,
    },
    {
      id: 5,
      user: "Landlord Notification",
      message: "Tenant Alex paid rent for March",
      time: "2 days ago",
      read: true,
    },
  ]);
  const [filter, setFilter] = useState("all");

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
    if (iconName === 'User') navigate('/listing');
    else if (iconName === 'Home') navigate('/body');
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('dark-mode');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setShowLogoutPanel(false);
    navigate('/login');
  };

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(item => (item.id === id ? { ...item, read: true } : item))
    );
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
    if (savedTheme) document.body.classList.add('dark-mode');
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(prev => [
        {
          id: Date.now(),
          user: "New Tenant",
          message: "requested a property tour",
          time: "Just now",
          read: false,
        },
        ...prev,
      ]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const filteredNotifications = notifications.filter(n =>
    filter === "all" ? true : filter === "unread" ? !n.read : n.read
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <a className="btn btn-ghost btn-custom">RoomZy</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li onClick={() => handleIconClick('User')} style={{ marginRight: '50px', cursor: 'pointer' }}>
            <FaUser size={22} />
          </li>
          <li onClick={() => setIsNotificationOpen(!isNotificationOpen)} style={{ marginRight: '50px', cursor: 'pointer', position: 'relative' }}>
            <FaBell size={22} />
            {unreadCount > 0 && (
              <span className="notification-count">{unreadCount}</span>
            )}
          </li>
          <li onClick={() => handleIconClick('Payment')} style={{ marginRight: '50px', cursor: 'pointer' }}>
            <FaAdjust size={22} />
          </li>
          <li onClick={() => handleIconClick('Home')} style={{ marginRight: '50px', cursor: 'pointer' }}>
            <FaHome size={22} />
          </li>
        </ul>
      </div>

      <div className="navbar-end" style={{ gap: '20px' }}>
        <div onClick={toggleDarkMode} style={{ cursor: 'pointer' }}>
          {darkMode ? <BsSun size={20} color="white" /> : <BsMoon size={20} />}
        </div>
        <div onClick={() => setShowLogoutPanel(!showLogoutPanel)} style={{ cursor: 'pointer' }}>
          <FaSignOutAlt size={22} color="white" />
        </div>
      </div>

      {showLogoutPanel && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#222',
          color: 'white',
          padding: '15px 25px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          zIndex: 1000
        }}>
          <p style={{ marginBottom: '10px' }}>Are you sure you want to logout?</p>
          <button onClick={handleLogout} style={{
            backgroundColor: '#ff4d4d',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Logout
          </button>
        </div>
      )}

      {/* Notification Slide Panel */}
      <div className={`notification-panel ${isNotificationOpen ? "open" : ""}`}>
        <div className="panel-header">
          <h3>Notifications</h3>
          <button className="close-btn" onClick={() => setIsNotificationOpen(false)}>×</button>
        </div>

        <div className="notification-tabs">
          <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
          <button className={filter === "unread" ? "active" : ""} onClick={() => setFilter("unread")}>Unread</button>
          <button className={filter === "read" ? "active" : ""} onClick={() => setFilter("read")}>Read</button>
        </div>

        <div className="notification-list">
          {filteredNotifications.length === 0 ? (
            <p className="no-notifications">No notifications</p>
          ) : (
            filteredNotifications.map(item => (
              <div
                key={item.id}
                className={`notification-item ${item.read ? "read" : "unread"}`}
                onClick={() => markAsRead(item.id)}
              >
                <p className="user-name">{item.user}</p>
                <p className="notification-message">{item.message}</p>
                <span className="notification-time">{item.time}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
