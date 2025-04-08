const mongoose = require("mongoose");

const RentalPropertySchema = new mongoose.Schema({
  // Reference to the User (Owner of the Property)
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 

  // Listing Type (Only Rent or Lease)
  listingType: { 
    type: String, 
    enum: ["Rent", "Lease"],  
    required: true 
  },

  // Full House or Sharing
  occupancyType: { 
    type: String, 
    enum: ["Full House", "On Sharing Basis"], 
    required: true 
  },

  // Society/Project Details
  societyName: { type: String },
  totalFlatsInSociety: { type: Number },

  // Location
  city: { type: String, required: true },
  locality: { type: String, required: true },

  // Property Features
  bedrooms: { type: Number, required: true },
  balconies: { type: Number, default: 0 },
  floorNo: { type: String }, // Can be "Lower Basement", "Ground", "1", "2", etc.
  totalFloors: { type: Number, required: true },
  furnishedStatus: { 
    type: String, 
    enum: ["Furnished", "Unfurnished", "Semi-Furnished"], 
    required: true 
  },
  bathrooms: { type: Number, required: true },
  // Availability & Transaction Type
  availableFrom: { type: Date, required: true },
  ageOfConstruction: { 
    type: String, 
    enum: ["New", "0-5 years", "5-10 years", "10+ years"] 
  },

  // Rent/Lease Details
  monthlyRent: { type: Number, required: true },
  isRentNegotiable: { type: Boolean, default: false },
  securityDeposit: { type: Number },
  maintenanceCharges: { type: Number },

  // Description
  description: { type: String, maxlength: 1000 }, // Optional property description

  // Photos
  photos: [{ 
    type: String, 
    validate: {
      validator: function(url) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(url);
      },
      message: "Invalid image URL format!"
    }
  }],

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("roomModel", RentalPropertySchema);
