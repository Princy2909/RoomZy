const mongoose=require("mongoose");
const {Schema}=mongoose;

const RoomDetailsSchema = new Schema({
    
        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
      
    price: Number,
    location: {
        address: String,
        city: String,
        state: String,
        pinCode: String,
        latitude: Number,
        longitude: Number
    },
    rating: Number,
    bedRoom: Number,
    bathRoom: Number,
    kitchen: Number,
    roomType: String,
    furnished: Boolean,
    amenities: [String],
    description: String,
    availableFrom: Date,
    leaseDuration: String,
    image: { type: [String], required: true },
}, { _id: true }); // Enable automatic _id generation for subdocuments

const OwnerModel = new Schema({
    owner: {
        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        profilePicture: String,
    },
    roomDetails: [RoomDetailsSchema] // Change to an array of RoomDetailsSchema
}, {
    timestamps: true,
});

const Owner = mongoose.model("Owner", OwnerModel);

module.exports = Owner;