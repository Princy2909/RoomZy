import React, { useState, useEffect } from "react";
import "./NotificationCenter.css";
import { FaBell } from "react-icons/fa";

const initialNotifications = [
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
];

const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState("all"); // all, unread, read

  // Calculate unread notifications count
  const unreadCount = notifications.filter(item => !item.read).length;

  // Function to mark notification as read
  const markAsRead = (id) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(item =>
        item.id === id ? { ...item, read: true } : item
      )
    );
  };

  // Simulate receiving a new notification
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(prevNotifications => [
        {
          id: Date.now(),
          user: "New Tenant",
          message: "requested a property tour",
          time: "Just now",
          read: false,
        },
        ...prevNotifications,
      ]);
    }, 15000); // New notification every 15 seconds

    return () => clearInterval(interval);
  }, []);

  // Filtered Notifications based on tab selection
  const filteredNotifications = notifications.filter(item => {
    if (filter === "unread") return !item.read;
    if (filter === "read") return item.read;
    return true; // all
  });

  return (
    <div className="notification-container">
      <button className="notification-icon" onClick={() => setIsOpen(!isOpen)}>
        <FaBell size={20} />
        {unreadCount > 0 && <span className="notification-count">{unreadCount}</span>}
      </button>

      <div className={`notification-panel ${isOpen ? "open" : ""}`}>
        <div className="panel-header">
          <h3>Notifications</h3>
          <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
        </div>

        {/* Filter Tabs */}
        <div className="notification-tabs">
          <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
          <button className={filter === "unread" ? "active" : ""} onClick={() => setFilter("unread")}>Unread</button>
          <button className={filter === "read" ? "active" : ""} onClick={() => setFilter("read")}>Read</button>
        </div>

        {/* Scrollable Notification List */}
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

export default NotificationCenter;