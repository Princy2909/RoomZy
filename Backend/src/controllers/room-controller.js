const rentalPropertyService = require("../services/room-service");

// ✅ 1️⃣ Create a new room
const createRoom = async (req, res) => {
  try {
    const roomData = req.body;
    const newRoom = await rentalPropertyService.createRoomService(roomData);
    res.status(201).json({ message: "Room created successfully!", room: newRoom });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ 2️⃣ Get all rooms
const getAllRooms = async (req, res) => {
  try {
    const rooms = await rentalPropertyService.getAllRoomsService();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ 3️⃣ Get rooms by Owner ID
const getRoomsByOwner = async (req, res) => {
  try {
    const { ownerId } = req.params;
    const rooms = await rentalPropertyService.getRoomsByOwnerService(ownerId);
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ 4️⃣ Get room by Room ID
const getRoomById = async (req, res) => {
  try {
    const { roomId } = req.params;
    const room = await rentalPropertyService.getRoomByIdService(roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found!" });
    }
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ 5️⃣ Update room by Room ID
const updateRoom = async (req, res) => {
  try {
    const { roomId } = req.params;
    const updatedData = req.body;
    const updatedRoom = await rentalPropertyService.updateRoomService(roomId, updatedData);
    if (!updatedRoom) {
      return res.status(404).json({ message: "Room not found or update failed!" });
    }
    res.status(200).json({ message: "Room updated successfully!", room: updatedRoom });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ 6️⃣ Delete room by Room ID
const deleteRoom = async (req, res) => {
  try {
    const { roomId } = req.params;
    const { ownerId } = req.body; // Owner ID must be sent in the request body
    const deletedRoom = await rentalPropertyService.deleteRoomService(roomId, ownerId);
    if (!deletedRoom) {
      return res.status(404).json({ message: "Room not found or deletion failed!" });
    }
    res.status(200).json({ message: "Room deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ 7️⃣ Get rooms by filters (Price, Location, etc.)
const getRoomsByFilters = async (req, res) => {
  try {
    const filters = req.query; // Filters will be passed via query parameters
    const rooms = await rentalPropertyService.getRoomsByFiltersService(filters);
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createRoom,
  getAllRooms,
  getRoomsByOwner,
  getRoomById,
  updateRoom,
  deleteRoom,
  getRoomsByFilters,
};
