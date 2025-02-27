const Owner = require("../models/OwnerModel");

const addroom =  async (req, res) => {
    try {
        const { id } = req.user; // id comes from token
        const {
            profilePicture,
            price, address, city, state, pinCode,
            latitude, longitude, rating, bedRoom,
            bathRoom, kitchen, roomType, furnished,
            amenities, description, availableFrom,
            leaseDuration, image
        } = req.body;

        // Find the owner by their ID
        const owner = await Owner.findOne({ "owner.ownerId": id });

        if (!owner) {
            // If the owner does not exist, create a new owner
            const newOwner = new Owner({
                owner: {
                    ownerId: id,
                    profilePicture,
                },
                roomDetails: [{
                    price,
                    location: {
                        address,
                        city,
                        state,
                        pinCode,
                        latitude,
                        longitude,
                    },
                    rating,
                    bedRoom,
                    bathRoom,
                    kitchen,
                    roomType,
                    furnished,
                    amenities,
                    description,
                    availableFrom,
                    leaseDuration,
                    image,
                }]
            });

            const result = await newOwner.save();
            return res.status(200).send({ message: "Owner and room added successfully", data: result });
        } else {
            // If the owner exists, push the new room details into the roomDetails array
            owner.roomDetails.push({
                price,
                location: {
                    address,
                    city,
                    state,
                    pinCode,
                    latitude,
                    longitude,
                },
                rating,
                bedRoom,
                bathRoom,
                kitchen,
                roomType,
                furnished,
                amenities,
                description,
                availableFrom,
                leaseDuration,
                image,
            });

            const result = await owner.save();
            return res.status(200).send({ message: "Room added successfully", data: result });
        }

    } catch (err) {
        res.status(400).send(err.message);
    }
};

const edit_roomInfo =  async (req, res) => {
    const { id } = req.user; // user comes from token
    const { room_id } = req.params; // this id of owner comes from param of 
                                    //edit_room of particular room of corresponding owner room array.

    try {
        const owner = await Owner.findOne({ "owner.ownerId": id });
       
        if (!owner) throw new Error("First Register your room");

       
            const roomToUpdate = owner.roomDetails.find(r => r._id.toString() === room_id);
            if (!roomToUpdate) throw new Error("Room not found");

            // Update the room details
            Object.keys(req.body).forEach(key => {
                roomToUpdate[key] = req.body[key];
            });

            // Save the updated owner document
            await owner.save();

            res.status(200).send({ message: "Room information updated successfully", updatedOwner: owner });

    } catch (err) {
        console.error(err); 
        res.status(400).send({ error: err.message });
    }
};

module.exports = { addroom, edit_roomInfo };