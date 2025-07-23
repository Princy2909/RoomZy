const { StatusCodes } = require("http-status-codes");
const validator = require("validator");
const Room = require("../models/roommodel");

function validateSignup(req, res, next) {
    if (!req.body.firstName) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Signup failed",
            error: { message: "firstName is required" },
        });
    }
    if (!req.body.lastName) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Signup failed",
            error: { message: "lastName is required" },
        });
    }

    if (!req.body.email || !validator.isEmail(req.body.email)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Signup failed",
            error: { message: "Invalid email format" },
        });
    }

    if (!req.body.password || req.body.password.length < 6) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Signup failed",
            error: { message: "Password must be at least 6 characters long" },
        });
    }

    next();
}

const isOwner = (req, res, next) => {
    
    const { roomId } = req.params;
    const userId = req.body.userId; // Assuming you have user info in req.user
  
    // RentalProperty.findById(roomId)
    Room.findById(roomId)
      .then(property => {
        if (property.owner.toString() === userId.toString()) {
          return res.status(403).json({ message: "Owners cannot review their own property." });
        }
        next();
      })
      .catch(err => res.status(500).json({ message: "Error finding property." }));
  };

module.exports = { validateSignup,isOwner };
