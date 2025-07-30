const express = require("express");
const router = express.Router();
const rentalPropertyController = require("../controllers/room-controller");
const {validateToken} =require("../middleware2/auth");
const upload=require("../middleware2/cloudinaryStorage");

// api  for this folder  api/rooms/crete,.....,;
// Create a new room
router.post("/create",validateToken,upload.array("photos", 5), rentalPropertyController.createRoom);

// Search rooms with filters(like min ,price max price etc);
router.get("/search", rentalPropertyController.getRoomsByFilters);

// Get room by ID
// router.get("/:roomId", rentalPropertyController.getRoomById);
router.get("/roomsByOwner",validateToken, rentalPropertyController.getRoomsByOwner);

// Get rooms by owner ID(all the rooms listed by the owner);
router.get("/owner/:ownerId", rentalPropertyController.getRoomsByOwner);

// Update room details
router.patch("/:roomId", rentalPropertyController.updateRoom);

// Delete a room
router.delete("/:roomId", rentalPropertyController.deleteRoom);

router.post("/roomreview/:roomId",rentalPropertyController.reviewRoom);

module.exports = router;
