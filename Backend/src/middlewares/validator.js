const { StatusCodes } = require("http-status-codes");
const validator = require("validator");

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

module.exports = { validateSignup };
