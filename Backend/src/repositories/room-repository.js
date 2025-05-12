const Room = require("../models/roommodel");
const User = require("../models/Usermodel");

// ✅ 1️⃣ Create a new room
const createRoom = async (roomData) => {
  try {
    const { owner } = roomData;
    // Check if owner (user) exists
    const user = await User.findById(owner);
    if (!user) {
      throw new Error("User not found!");
    }

    // Create a new room
    const newRoom = await Room.create(roomData);

    // Add room ID to user's ownedProperties
    user.ownedProperties.push(newRoom._id);
    await user.save();

    return newRoom;
  } catch (error) {
    throw new Error(error.message);
  }
};

// ✅ 2️⃣ Get all rooms
const getAllRooms = async () => {
  try {
    return await Room.find().populate("owner", "firstName lastName email");
  } catch (error) {
    throw new Error(error.message);
  }
};

// ✅ 3️⃣ Get rooms by Owner ID
const getRoomsByOwner = async (ownerId) => {
  try {
    return await Room.find({ owner: ownerId }).populate("owner", "firstName lastName email");
  } catch (error) {
    throw new Error(error.message);
  }
};

// ✅ 4️⃣ Get room by Room ID
const getRoomById = async (roomId) => {
  try {
    return await Room.findById(roomId).populate("owner", "firstName lastName email");
  } catch (error) {
    throw new Error(error.message);
  }
};

// ✅ 5️⃣ Update room by Room ID
const updateRoom = async (roomId, updatedData) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(roomId, updatedData, { new: true });
    if (!updatedRoom) throw new Error("Room not found!");
    return updatedRoom;
  } catch (error) {
    throw new Error(error.message);
  }
};

// ✅ 6️⃣ Delete room by Room ID
const deleteRoom = async (roomId) => {
  try {
    // Fetch the room details
    const room = await Room.findById(roomId);
    if (!room) throw new Error("Room not found!");

    // Extract owner ID
    const ownerId = room.owner;

    // Delete the room
    const deletedRoom = await Room.findByIdAndDelete(roomId);
    if (!deletedRoom) throw new Error("Room deletion failed!");

    // Remove room ID from owner's ownedProperties array
    await User.findByIdAndUpdate(ownerId, { $pull: { ownedProperties: roomId } });

    return { message: "Room deleted successfully", deletedRoom };
  } catch (error) {
    throw new Error(error.message);
  }
};

// ✅ 7️⃣ Get rooms by filters (Price, Location, Bedrooms, etc.)
const getRoomsByFilters = async (filters) => {
  try {
    const query = {};

    if (filters.city) query.city = filters.city;
    if (filters.locality) query.locality = filters.locality;
    if (filters.minRent) query.monthlyRent = { $gte: filters.minRent };
    if (filters.maxRent) query.monthlyRent = { ...query.monthlyRent, $lte: filters.maxRent };
    if (filters.bedrooms) query.bedrooms = filters.bedrooms;
    if (filters.furnishedStatus) query.furnishedStatus = filters.furnishedStatus;
    if (filters.listingType) query.listingType = filters.listingType;
    if (filters.occupancyType) query.occupancyType = filters.occupancyType;

    return await Room.find(query).populate("owner", "firstName lastName email");
  } catch (error) {
    throw new Error(error.message);
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
