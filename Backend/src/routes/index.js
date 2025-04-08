const express = require("express");
const router = express.Router();

// Import individual route files
const authRoutes = require("./authRoutes");
const roomRoutes = require("./room-routes");

// Use the routes
router.use("/auth", authRoutes);  // All auth-related routes (signup, login, etc.)
router.use("/rooms", roomRoutes); // All room-related routes (CRUD, search, etc.)

module.exports = router;
