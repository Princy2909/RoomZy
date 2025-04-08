const rentalPropertyRepo = require("../repositories/room-repository");

// ✅ 1️⃣ Create a new room
const createRoomService = async (roomData) => {
  try {
    return await rentalPropertyRepo.createRoom(roomData);
  } catch (error) {
    throw new Error(error.message);
  }
};

// ✅ 2️⃣ Get all rooms
const getAllRoomsService = async () => {
  try {
    return await rentalPropertyRepo.getAllRooms();
  } catch (error) {
    throw new Error(error.message);
  }                                                                                                                                                         
};

// ✅ 3️⃣ Get rooms by Owner ID
const getRoomsByOwnerService = async (ownerId) => {
  try {
    return await rentalPropertyRepo.getRoomsByOwner(ownerId);
  } catch (error) {
    throw new Error(error.message);
  }
};

// ✅ 4️⃣ Get room by Room ID
const getRoomByIdService = async (roomId) => {
  try {
    return await rentalPropertyRepo.getRoomById(roomId);
  } catch (error) {
    throw new Error(error.message);
  }
};

// ✅ 5️⃣ Update room by Room ID
const updateRoomService = async (roomId, updatedData) => {
  try {
    return await rentalPropertyRepo.updateRoom(roomId, updatedData);
  } catch (error) {
    throw new Error(error.message);
  }
};

// ✅ 6️⃣ Delete room by Room ID
const deleteRoomService = async (roomId, ownerId) => {
  try {
    return await rentalPropertyRepo.deleteRoom(roomId, ownerId);
  } catch (error) {
    throw new Error(error.message);
  }
};

// ✅ 7️⃣ Get rooms by filters (Price, Location, etc.)
const getRoomsByFiltersService = async (filters) => {
  try {
    return await rentalPropertyRepo.getRoomsByFilters(filters);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createRoomService,
  getAllRoomsService,
  getRoomsByOwnerService,
  getRoomByIdService,
  updateRoomService,
  deleteRoomService,
  getRoomsByFiltersService,
};
