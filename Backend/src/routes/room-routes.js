const express = require("express");
const router = express.Router();
const rentalPropertyController = require("../controllers/room-controller");
// api  for this folder  api/rooms/crete,.....,;
// Create a new room
router.post("/create", rentalPropertyController.createRoom);

// Search rooms with filters(like min ,price max price etc);
router.get("/search", rentalPropertyController.getRoomsByFilters);

// Get room by ID
router.get("/:roomId", rentalPropertyController.getRoomById);

// Get rooms by owner ID(all the rooms listed by the owner);
router.get("/owner/:ownerId", rentalPropertyController.getRoomsByOwner);

// Update room details
router.patch("/:roomId", rentalPropertyController.updateRoom);

// Delete a room
router.delete("/:roomId", rentalPropertyController.deleteRoom);

module.exports = router;
