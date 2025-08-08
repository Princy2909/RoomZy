const express = require("express");
const router = express.Router();
const rentalPropertyController = require("../controllers/room-controller");
const {validateToken} =require("../middleware2/auth");
const upload=require("../middleware2/cloudinaryStorage");

// Create a new room
router.post("/create",validateToken,upload.array("photos", 5), rentalPropertyController.createRoom);

// Search rooms with filters(like min ,price max price etc);
router.get("/search", rentalPropertyController.getRoomsByFilters);

// Get rooms by owner ID(all the rooms listed by the owner);
router.get("/roomsByOwner",validateToken, rentalPropertyController.getRoomsByOwner);

// Get room by ID
router.get("/:roomId", rentalPropertyController.getRoomById);


// Update room details
router.patch("/:roomId", rentalPropertyController.updateRoom);

// Delete a room
router.delete("/:roomId", rentalPropertyController.deleteRoom);

router.post("/roomreview/:roomId",rentalPropertyController.reviewRoom);

module.exports = router;
